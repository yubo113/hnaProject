<template>
	<div>
		<div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
				    <div class="app-report row bg-white brand-source-detail">
						<div class="pt-10 pb-10 pl-10 bg-grey tc">
							<span>{{ $route.query.point }}</span>
						</div>
		    			<div class="row">
		    				<span class="fl tc textOverflow pb-10 pt-10" style="width:12%">序号</span>
		    				<span class="fl tc textOverflow pb-10 pt-10" style="width:28%">开始时间</span>
		    				<span class="fl tc textOverflow pb-10 pt-10" style="width:28%">结束时间</span>
		    				<span class="fl tc textOverflow pb-10 pt-10" style="width:16%">申请人</span>
		    				<span class="fl tc textOverflow pb-10 pt-10" style="width:16%">状态</span>
		    			</div>
				    </div>
				    <div class="row text-light-grey ml-10 mr-10 brand-detail-table" v-for="(item, index) in hisList" :key="index">
	    				<span class="fl tc textOverflow" style="width:12%">{{ index + 1 }}</span>
	    				<span class="fl tc textOverflow" style="width:28%">{{ new Date(item.adPutstarttime) | timeStrFormat }}</span>
	    				<span class="fl tc textOverflow" style="width:28%">{{ new Date(item.adPutendtime) | timeStrFormat }}</span>
	    				<span class="fl tc textOverflow" style="width:16%">{{ item.proposername  }}</span>
	    				<span class="fl tc textOverflow" style="width:16%">{{ item.pStatus }}</span>
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
				hisList: [],				//	历史列表容器
				brandDetailIscroll: ''		//	iscroll容器
			};
		},
		created () {
			this.$store.commit('changeTitle', '品牌资源使用情况');
			this.getHistory();
		},
		methods: {
			/*
			 *	获取合作历史
			 */
			getHistory: function () {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/hnabAdResApplyRel/resApplyRelList',
					params: {
						resourcesId: this.$route.query.id
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						//	当数据成功并且有数据时候执行
						if (res.data) {
							this.hisList = res.data;
						}
					}
					this.$store.commit('loadingHide');
				});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.brandDetailIscroll) {
				this.brandDetailIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.brandDetailIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.brandDetailIscroll.destroy();
			this.brandDetailIscroll = null;
		}
	};
</script>
