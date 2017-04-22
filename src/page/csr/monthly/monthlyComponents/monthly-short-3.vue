<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>部门邮箱发布月刊</span>
					<span class="text-dark-grey">{{ step.csrApproval.depaEmailRelemonth? step.csrApproval.depaEmailRelemonth : "0000-00-00" }}</span>
				</div>
				<div>
					<span>邮箱地址</span>
					<span class="text-dark-grey">{{ step.csrApproval.email? step.csrApproval.email : "" }}</span>
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
