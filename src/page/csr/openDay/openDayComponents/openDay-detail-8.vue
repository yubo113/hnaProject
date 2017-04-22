<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>集团动态</span>
					<span class="text-dark-grey">{{ detail.csrApproval.writingdynamic }}</span>
				</div>
				<div>
					<span>耗时</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writingdynamicconsuming? detail.csrApproval.writingdynamicconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>提交方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitcoopproconsuming? detail.csrApproval.submitcoopproconsuming : "0.0" }}h)</span>
				</div>

    			<div v-if="detail.csrApproval.writingdynamicfile && detail.csrApproval.writingdynamicfile !== 'null'">
					<span>拟写定稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writinggrdyfinalconsuming? detail.csrApproval.writinggrdyfinalconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.writingdynamicfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.writingdynamicfile | filesNum }}个)</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {
				timeout: ''
			};
		},
		methods: {
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script> 
