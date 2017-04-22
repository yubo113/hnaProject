<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.finalWeeklyObsFile && detail.csrApproval.finalWeeklyObsFile !== 'null'">
					<span>定稿每周责任观察</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.finalWeeklyObsFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.finalWeeklyObsFile | filesNum }}个)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {};
		},
		methods: {
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		}
	};
</script>
