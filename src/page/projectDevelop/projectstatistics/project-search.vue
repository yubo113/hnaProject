<template>
	<div class="partner-search">
		<div class="bg-white partner-search-header mt-20 ml-10 mr-10 pl-10 pr-10 text-mblack">
			<div class="pt-10 pb-10">
				<span class="inblock">搜索类型</span>
					<div class="static-select partner-search-text">
					<select id="selectWork">  
						<option v-for="option in options" v-bind:value="option.value" :id="option.value">  
							{{ option.item }}  
						</option>  
					</select>  
				</div>
			</div>
			<div class="pt-10 pb-10" v-if="isShow">
				<span class="inblock">搜索时间</span>
				<span class="inblock">: {{startTime}} - {{endTime}}</span>
				<mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="showNum"></mt-picker>
			</div>
		</div>
		<div class="check-more tc bg-red text-white partner-search-footer" @click="search">
			<span>搜  索</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				options: [],
				selected: null,
				showNum: 3,
				isShow: false,
				startTime: '',				//	开始时间
				endTime: '',				//	结束时间
				startIndex: 0,
				endIndex: 0,
				slots: [
					{
						flex: 1,
						values: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
						className: 'slot1',
						defaultIndex: this.$store.state.searchResult.projectSelected.start,
						textAlign: 'right'
					}, {
						divider: true,
						content: '-',
						className: 'slot2'
					}, {
						flex: 1,
						values: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
						className: 'slot3',
						defaultIndex: this.$store.state.searchResult.projectSelected.end,
						textAlign: 'left'
					}
				]
			};
		},
		created () {
			this.$store.commit('changeTitle', '公益项目统计器');
			this.getSelected();
		},
		methods: {
			/*	判断是否有存储状态
			 *	1.有存储状态(不执行ajax)赋值给选中的	2.无存储状态(执行ajax)
			 */
			getSelected: function () {
				let selectValue = this.$store.state.searchResult.projectSelected.value;
				let selectOpt = this.$store.state.searchResult.projectSelected.option;
				if (selectValue) {
					this.options = selectOpt;
				} else {
					this.$store.commit('loadingShow');
					this.getProjectSearch();
				}
			},
			/*
			 *	获取搜索条件,并且创建select2
			 */
			getProjectSearch: function () {
				const self = this;
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getProjectNum'
				}).then(res => {
					if (res.result) {
						const name = res.data.listName;
						const param = res.data.listParam;
						for (let i = 0; i < name.length; i++) {
							let obj = {
								item: '',
								value: ''
							};
							obj.item = name[i];
							obj.value = param[i];
							this.options.push(obj);
						}
						this.newSelect2();
						setTimeout(function () {
							self.$store.commit('loadingHide');
						}, 1000);
					}
				});
			},
			/*
			 *	创建select2
			 */
			newSelect2: function () {
				const self = this;
				//	配置select2参数,创建select2
				const option = {
					width: '100%',
					minimumResultsForSearch: -1,
					placeholder: '请选择搜索关键字...'
				};
				this.selected = this.initSelect('#selectWork', option);
				this.selected.on('change', function () {
					if (self.selected.val() === 'HIS_WHE_VOLU_PART' || self.selected.val() === 'AFT_WHE_PRO_AWAR') {
						self.isShow = true;
					} else {
						self.isShow = false;
						self.startTime = null;
						self.endTime = null;
					}
				});
			},
			/*	点击搜索开始请求图表数据
			 *	1.存储选中状态 2.存贮图表数据 3.储存回到页面是哪个tab
			 */
			search: function () {
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getProjectOfNumber',
					params: {
						content: this.selected.val(),
						startTime: this.startTime,
						endTime: this.endTime
					}
				}).then(res => {
					if (res.result) {
						let categories = res.data.listName;
						let dataTmp = {
							data: res.data.listParam
						};
						//	1.存储(选中值) 2.存贮图表数据
						this.$store.commit('setProjectSelect', {
							value: this.selected.val(),
							option: this.options,
							start: this.startIndex,
							end: this.endIndex
						});
						this.$store.commit('setProjectChart', {
							x: categories,
							y: dataTmp
						});
						this.$router.replace({name: 'projectstatistics'});
					}
				});
			},
			/*	搜索条件--时间
			 *	当前选中时间展示,页面渲染
			 */
			onValuesChange: function (picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0]);
				}
				this.startTime = values[0];
				this.endTime = values[1];
				this.startIndex = this.slots[0].values.indexOf(this.startTime);
				this.endIndex = this.slots[2].values.indexOf(this.endTime);
			}
		},
		mounted () {
			let selectValue = this.$store.state.searchResult.projectSelected.value;
			if (selectValue) {
				this.newSelect2();
				this.selected.val([selectValue]).trigger('change');
			}
		}
	};
</script>
