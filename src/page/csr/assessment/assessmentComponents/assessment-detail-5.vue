<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>调研名称</span>
					<span class="text-dark-grey">{{ detail.csrApproval.devResearch }}</span>
				</div>
				<div>
					<span>调研单位</span>
					<span class="text-dark-grey">{{ detail.csrApproval.researchDept }}</span>
				</div>
				<div>
					<span>调研对象</span>
					<span class="text-dark-grey">{{ detail.csrApproval.researchObj }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.researchConsuming? detail.csrApproval.researchConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>调研材料</span>
					<span class="text-dark-grey">{{ detail.csrApproval.arryResearchScience }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ detail.csrApproval.arryResearchConsuming? detail.csrApproval.arryResearchConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.arryResearchScienceFile && detail.csrApproval.arryResearchScienceFile !== 'null'">
					<span>完成整理</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.arryResearchScienceFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.arryResearchScienceFile | filesNum }}个)</span>
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
