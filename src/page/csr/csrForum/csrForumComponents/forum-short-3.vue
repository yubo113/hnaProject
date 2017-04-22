<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>成立项目工作组</span>
					<span class="text-dark-grey">({{ step.csrApproval.establishProjectConsuming? step.csrApproval.establishProjectConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>邀请合作伙伴</span>
					<span class="text-dark-grey">({{ step.csrApproval.invCoopPartnerConsuming? step.csrApproval.invCoopPartnerConsuming : "0.0" }}h)</span>
				</div>				
				<div>
					<span>细化执行议程</span>
					<span class="text-dark-grey">({{ step.csrApproval.refineImpAgendaConsuming? step.csrApproval.refineImpAgendaConsuming : "0.0" }}h)</span>
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
