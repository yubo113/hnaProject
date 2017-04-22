<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>成立工作组</span>
					<span class="text-dark-grey">{{ detail.csrApproval.establishproject }}</span>
				</div>
    			<div>
					<span>成立耗时</span>
					<span class="text-dark-grey">({{ detail.csrApproval.establishprojectconsuming? detail.csrApproval.establishprojectconsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>策划责任人</span>
					<span class="text-dark-grey">{{ detail.csrApproval.planperson }}</span>
				</div>
				<div>
					<span>方案名称</span>
					<span class="text-dark-grey">{{ detail.csrApproval.makedetailed }}</span>
				</div>
    			<div>
					<span>方案耗时</span>
					<span class="text-dark-grey">({{ detail.csrApproval.makedetailedconsuming? detail.csrApproval.makedetailedconsuming : "0.0" }}h)</span>
				</div>
    			<div v-if="detail.csrApproval.makedetailedfile && detail.csrApproval.makedetailedfile !== 'null'">
					<span>方案定稿</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.makedetailedfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.makedetailedfile | filesNum }}个)</span>
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
