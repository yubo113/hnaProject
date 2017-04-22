<template>
	<div>
		<div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
					<div class="app-report row bg-white">
			    		<div class="media-text pt-10 pb-10">
				    		<div class="">
				    			<span class="text-light-grey span-3 inline tr">媒体名称</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.mediaName }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">合作负责人</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.coopHead }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">联系方式</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.coopbrftel }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">开始时间</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.contractStarttime }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">结束时间</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.contractEndtime }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">合作额度</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.coopPosition }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">合作现金</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.coopCash }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">机票</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.planeTicket }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">酒店</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.hotel }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">机上资源</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.machineResources }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">机场资源</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.airportResources }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inblock tr vertical-top">备注信息</span>
				    			<span class="span-6 textOverflow inline"><span class="pl-10">{{ item.remarks }}</span></span>
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
				item: {},
				mediaDetailIscroll: ''
			};
		},
		created () {
			console.log(11);
			this.$store.commit('changeTitle', '媒体合作信息');
			this.getMediaInfo();
		},
		methods: {
			getMediaInfo: function () {
				console.log(this.searchName);
				const self = this;
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/mediaCoop/detail',
					params: {
						id: this.$route.query.id
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						//	当数据成功并且有数据时候执行
						if (res.data.detail) {
							self.item = res.data.detail;
						} else {
							self.item = {};
						}
						this.$store.commit('loadingHide');
					} else {
						//	当返回数据失败时候，展示相应的
						self.item = {};
						this.$store.commit('loadingHide');
					}
				});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.mediaDetailIscroll) {
				this.mediaDetailIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.mediaDetailIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.mediaDetailIscroll.destroy();
			this.mediaDetailIscroll = null;
		}
	};
</script>
