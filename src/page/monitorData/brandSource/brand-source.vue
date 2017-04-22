<template>
	<div class="brand-source" >
		<div class="pt-10 brand-calendar row bg-grey">
			<div class="row">
				<div class="calendar-container fl span-5 pl-10 pr-5" @click="openCalendar('start')">
					<input type="text" class="static-date" placeholder="开始时间" readonly="readonly" v-model="startTime">
					<span class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i></span>
				</div>
				<div class="calendar-container fl span-5 pl-5 pr-10" @click="openCalendar('end')">
					<input type="text" class="static-date" placeholder="结束时间" readonly="readonly" v-model="endTime">
					<span class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i></span>
				</div>
			</div>
			<div class="common-search m-10">
		    	<input type="text" class="span-10" placeholder="广告点位名称" v-model="searchName">
		    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
		    </div>
		</div>
	    <div class="iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
				<div v-if="projectList.length > 0">
				    <div class="project-detail row bg-white" v-bind:class="[ item.pointflag==='0' ? 'project-status-success' : 'project-status-failed' ]" v-for="(item,index) in projectList" :key="index">
				    	<div class="fl project-text pt-10 pb-10" @click="enterMonitorDetail(item.id, item.adPoint)">
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">广告点位</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.adPoint }}</span></span>
				    		</div>
				    		<div class="pb-10 pt-10">
				    			<span class="text-light-grey span-3 inline tr">点位剩余数量</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.pointflag }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr vertical-top">联系人</span>
				    			<span class="span-6 textOverflow inline vertical-top">:<span class="pl-10">{{ item.adContact }}</span></span>
				    		</div>
				    	</div>
				    	<div class="fr project-index tc text-white">
				    		{{ index + 1 }}
				    	</div>
				    </div>
			    </div>
			    <div v-else>
			    	<nodata :nodata="nodata" :refresh="projectSearch" :type="types"></nodata>
			    </div>
			    <div class="pull-up" data-type="all">
					上拉加载更多
				</div>
			</div>
			</div>
			<returntop :iscroll='brandIscroll'></returntop>
		</div>
		<div>
			<mt-datetime-picker ref="picker" :value="pickerValue" type="date" @confirm="handleConfirm" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" :startDate="startdate">
			</mt-datetime-picker>
		</div>
	</div>
</template>

<script>
	import returntop from '../../../components/returntop.vue';
	import nodata from '../../../components/nodata.vue';
	export default {
		components: { 'returntop': returntop, 'nodata': nodata },
		data () {
			return {
				brandIscroll: '',						//	储存iscroll容器
				startTime: this.$store.state.monitorData.startTime,	//	开始时间展示(v-model)
				endTime: this.$store.state.monitorData.endTime,		//	结束时间展示(v-model)
				startdate: new Date('2010-01-01'),		//	日历选择开始时间
				pickerValue: new Date(),				//	日历展示选中时间
				dateTime: '',							//	判定开始or结束时间(boolen)
				projectList: [],						//	储存数据列表对的容器
				isPullDown: false,						//	true为上拉加载,false为下拉刷新
				types: true,							//	true为暂无数据,false为无网络
				searchName: this.$store.state.monitorData.searchName,	//	搜索的广告名称
				nodata: '暂无数据',						//	无数据和无网络显示内容
				pageCount: 1							//	加载第几页
			};
		},
		created () {
			this.$store.commit('changeTitle', '品牌资源使用情况');
			this.$store.commit('loadingShow');
			this.getMonitorList();
		},
		watch: {
		},
		methods: {
			/*	进入详情页
			 *	id: 广告点位id, adpoint: 广告点位名称
			 */
			enterMonitorDetail: function (id, adPoint) {
				this.$router.push({
					name: 'brandSourceDetail',
					query: {
						id: id,
						point: adPoint
					}
				});
			},
			/*	获取核心数据监控列表
			 *	name: 接受广告点位名称
			 */
			getMonitorList: function () {
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/hnabAdResApplyRel/resourcelist',
					params: {
						flag: '1',
						adPoint: this.searchName,
						pageSize: 20,
						pageNo: this.pageCount,
						adPutstarttime: this.startTime,
						adPutendtime: this.endTime
					}
				}).then(res => {
					const preventResult = self.projectList.length;
					//	当成功返回数据
					if (res.result) {
						//	当数据成功并且有数据时候执行
						if (res.data && res.data && res.data.length > 0) {
							//	判断数据是否是上拉加载还是刷新
							if (self.isPullDown) {
								self.projectList = self.projectList.concat(res.data);
								self.isPullDown = false;
							} else {
								self.projectList = res.data;
							}
							this.pageCount += 1;
						} else {
							self.projectList = [];
							this.nodata = '暂无数据';
							this.types = true;
						}
						this.$store.commit('loadingHide');
					} else {
						//	当返回数据失败时候，展示相应的
						self.projectList = [];
						this.nodata = '网络请求失败，请重新尝试';
						this.types = false;
						this.$store.commit('loadingHide');
					}
					return preventResult === self.projectList.length;
				});
			},
			//	下拉刷新
			pullRefresh: function () {
				this.pageCount = 1;
				return this.getMonitorList();
			},
			// 加载更多
			pullMore: function () {
				this.isPullDown = true;
				return this.getMonitorList();
			},
			//	搜索框
			projectSearch: function () {
				this.pageCount = 1;
				this.$store.commit('setMonitorData', {
					start: this.startTime,
					end: this.endTime,
					name: this.searchName
				});
				this.getMonitorList();
			},
			/*	打开日历
			 *	type: 开始,结束时间判断
			 *	1.设置可以选择开始时间
			 */
			openCalendar: function (type) {
				if (type === 'start') {
					this.startdate = new Date('2010-01-01');
					this.pickerValue = new Date(this.startTime);
					this.dateTime = true;
				} else {
					this.pickerValue = new Date(this.endTime);
					this.dateTime = false;
				}
				this.$refs.picker.open();
			},
			/*	选中时间返回参数
			 *	time: 选中的时间(内置的参数)
			 */
			handleConfirm: function (time) {
				if (this.dateTime) {
					this.startdate = time;
					this.startTime = this.timeStrFormat(time);
				} else {
					this.endTime = this.timeStrFormat(time);
				}
			}
		},
		updated () {
			//	刷新iscroll
			if (this.brandIscroll) {
				this.brandIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.brandIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.brandIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.brandIscroll.destroy();
			this.brandIscroll = null;
		}
	};
</script>
