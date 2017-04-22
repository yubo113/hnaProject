<template>
	<div>
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">

				<div>
					<span>发言材料</span>
					<span class="text-dark-grey">{{ detail.csrApproval.readyleadspeak }}</span>
				</div>
				<div>
					<span>耗时</span>
					<span class="text-dark-grey">({{ detail.csrApproval.readyleadspeakconsuming? detail.csrApproval.readyleadspeakconsuming : "0.0" }}h)</span>
				</div>
    			<div v-if="detail.csrApproval.readyleadspeakfile && detail.csrApproval.readyleadspeakfile !== 'null'">
					<span>材料完成</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.readyleadspeakfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.readyleadspeakfile | filesNum }}个)</span>
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
