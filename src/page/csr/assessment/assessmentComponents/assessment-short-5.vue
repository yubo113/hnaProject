<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>调研名称</span>
					<span class="text-dark-grey">{{ step.csrApproval.devResearch }}</span>
				</div>
				<div>
					<span>调研单位</span>
					<span class="text-dark-grey">{{ step.csrApproval.researchDept }}</span>
				</div>
				<div>
					<span>调研对象</span>
					<span class="text-dark-grey">{{ step.csrApproval.researchObj }}</span>
					&nbsp;&nbsp;
					<span class="text-dark-grey">(耗时：{{ step.csrApproval.researchConsuming? step.csrApproval.researchConsuming : "0.0" }}h)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['step'],
		data () {
			return {
			};
		},
		methods: {
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
