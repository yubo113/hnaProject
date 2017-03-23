<template>
	<div class="csr-work" >
		<div class="common-search m-5">
	    	<input type="text" class="span-10" placeholder="项目名称">
	    	<i @click.stop.prevent="projectSearch" class="fa fa-search" aria-hidden="true"></i>
	    </div>
	    <div class="csrwork-iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
			    <div class="project-detail row bg-white" v-bind:class="{ ' project-status-success': item.status==='success', ' project-status-failed': item.status==='failed' }" v-for="(item,index) in projectList" :key="index">
			    	<div class="fl project-text pt-10 pb-10">
			    		<div>
			    			<span class="text-light-grey span-3 inline tr">项目名称</span>
			    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.name }}</span></span>
			    		</div>
			    		<div>
			    			<span class="text-light-grey span-3 inline tr">报告类别</span>
			    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.report }}</span></span>
			    		</div>
			    		<div>
			    			<span class="text-light-grey span-3 inline tr">发布时间</span>
			    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.time }}</span></span>
			    		</div>
			    		<div>
			    			<span class="text-light-grey span-3 inline tr">工作状态</span>
			    			<span>:<span class="pl-10">{{ item.work }}</span></span>
			    		</div>
			    		<div>
			    			<span class="text-light-grey span-3 inline tr">发布时间</span>
			    			<span>:<span class="pl-10">{{ item.time }}</span></span>
			    		</div>
			    		<div>
			    			<span class="text-light-grey span-3 inline tr">参与人</span>
			    			<span>:<span class="pl-10 text-blue" v-for="(people,index) in item.people" :key="index" @click="enterAppReport">{{people.peoplename}}</span></span>
			    		</div>
			    	</div>
			    	<div class="fr project-index tc text-white">
			    		{{ index + 1 }}
			    	</div>
			    </div>
			    <div class="pull-up" data-type="all">
					上拉加载更多
				</div>
			</div>
			</div>
			<returntop :iscroll='curworkIscroll'></returntop>
		</div>
	</div>
</template>

<script>
	import returntop from '../../../components/returntop.vue';
	import IScroll from 'Iscroll';
	export default {
		components: { 'returntop': returntop },
		data () {
			return {
				projectList: [{
					name: '项目名称',
					report: '公司领导',
					time: '2017-10-2 12:20',
					work: '未完成',
					people: [{
						peoplename: '张彦军'
					}, {
						peoplename: '阳光'
					}],
					status: 'failed'
				}, {
					name: '项目名称',
					report: '公司领导',
					time: '2017-10-2 12:20',
					work: '未完成',
					people: [{
						peoplename: '张彦军'
					}, {
						peoplename: '阳光'
					}],
					status: 'failed'
				},
				{
					name: '项目名称',
					report: '公司领导',
					time: '2017-10-2 12:20',
					work: '完成',
					people: [{
						peoplename: '张彦军'
					}, {
						peoplename: '阳光'
					}],
					status: 'success'
				}, {
					name: '项目名称',
					report: '公司领导',
					time: '2017-10-2 12:20',
					work: '未完成',
					people: [{
						peoplename: '张彦军'
					}, {
						peoplename: '阳光'
					}],
					status: 'failed'
				},
				{
					name: '项目名称',
					report: '公司领导',
					time: '2017-10-2 12:20',
					work: '完成',
					people: [{
						peoplename: '张彦军'
					}, {
						peoplename: '阳光'
					}],
					status: 'success'
				}],
				curworkIscroll: ''
			};
		},
		created () {
			this.$store.commit('changeTitle', 'CSR工作');
		},
		watch: {
		},
		methods: {
			//	进入审批报告
			enterAppReport: function () {
				this.$router.push({name: 'appReport', params: {id: 123}});
			},
			// 加载更多
			pullMore: function () {
				this.projectList.push({
					name: '项目名称',
					report: '公司领导',
					time: '2017-10-2 12:20',
					work: '完成',
					people: [{
						peoplename: '张彦军'
					}, {
						peoplename: '阳光'
					}],
					status: 'success'
				});
			}
		},
		activated () {
			this.$store.commit('changeTitle', 'CSR工作');
	    },
	    deactivated () {
	    },
		updated () {
			//	刷新iscroll
			if (this.curworkIscroll) {
				this.curworkIscroll.refresh();
			}
		},
		mounted () {
			document.querySelector('#wrapper').style.top = `${document.querySelector('.csrwork-iscroll').offsetTop}px`;
			this.curworkIscroll = new IScroll('#wrapper', {
				click: true,
				probeType: 2,
                bounceTime: 250,
                bounceEasing: 'quadratic',
                interactiveScrollbars: false,
                hideScrollbar: false
			});
			this.loadmore(this.curworkIscroll, this.pullMore, this.pullMore);
		},
		beforeDestroy () {
			this.curworkIscroll.destroy();
			this.curworkIscroll = null;
		}
	};
</script>
