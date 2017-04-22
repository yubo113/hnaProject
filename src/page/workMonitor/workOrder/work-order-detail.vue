<template>
	<div>
		<div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
					<div class="app-report row bg-white">
			    		<div class="media-text pt-10 pb-10">
				    		<div class="">
				    			<span class="text-light-grey span-3 inline tr">督办单标题</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.projectName }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">督办内容</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.projectName }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">完成时限</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.phone }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">督办类型</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.phone }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">监控领导</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.phone }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">督办人</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.phone }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">反馈人</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.phone }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">反馈中心</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.phone }}</span></span>
				    		</div>
				    		<div class="">
				    			<span class="text-light-grey span-3 inblock tr vertical-top">备注</span>
				    			<span class="span-6 inblock vertical-top pl-10"><span class="text-blue inblock" @click="enterApp(people, item)">{{item.reportParticipantname}}</span></span>
				    		</div>
				    		<div class="">
				    			<span class="text-light-grey span-3 inblock tr vertical-top">反馈内容</span>
				    			<span class="span-6 inblock vertical-top pl-10"><span class="text-blue inblock" @click="enterApp(people, item)">{{item.reportParticipantname}}</span></span>
				    		</div>
				    		<div class="">
				    			<span class="text-light-grey span-3 inblock tr vertical-top">工作思路</span>
				    			<span class="span-6 inblock vertical-top pl-10"><span class="text-blue inblock" @click="enterApp(people, item)">{{item.reportParticipantname}}</span></span>
				    		</div>
				    		<div class="">
				    			<span class="text-light-grey span-4 inblock tr vertical-top">分析任务及完成时点</span>
				    			<span class="span-5 inblock vertical-top pl-10"><span class="text-blue inblock" @click="enterApp(people, item)">{{item.reportParticipantname}}</span></span>
				    		</div>
				    		<div class="">
				    			<span class="text-light-grey span-3 inblock tr vertical-top">需调谐事项</span>
				    			<span class="span-6 inblock vertical-top pl-10"><span class="text-blue inblock" @click="enterApp(people, item)">{{item.reportParticipantname}}</span></span>
				    		</div>
				    		<div class="">
				    			<span class="text-light-grey span-3 inblock tr vertical-top">附件</span>
				    			<span class="span-6 inblock vertical-top pl-10"><span class="text-blue inblock" @click="enterApp(people, item)">{{item.reportParticipantname}}</span></span>
				    		</div>
				    	</div>
				    </div>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				item: {
					projectName: 'name',
					reportParticipantname: 'shshshsshshddiwuo',
					phone: '17600361839'
				}
			};
		},
		created () {
			this.$store.commit('changeTitle', '工作单详情');
		},
		updated () {
			//	刷新iscroll
			if (this.orderDetailIscroll) {
				this.orderDetailIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.orderDetailIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.orderDetailIscroll.destroy();
			this.orderDetailIscroll = null;
		}
	};
</script>
