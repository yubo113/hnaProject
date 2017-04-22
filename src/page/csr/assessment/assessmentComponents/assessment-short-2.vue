<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>拟写材料</span>
					<span class="text-dark-grey">{{ step.csrApproval.writMesScience }}</span>
				</div>
				<div>
					<span>初次完成</span>
					<span class="text-dark-grey">({{ step.csrApproval.writMesScienceConsuming? step.csrApproval.writMesScienceConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="step.csrApproval.writMesScienceFile && step.csrApproval.writMesScienceFile !== 'null'">
					<span>报文材料定稿</span>
					<span class="text-dark-grey">({{ step.csrApproval.writMesScienConsuming? step.csrApproval.writMesScienConsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writMesScienceFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writMesScienceFile | filesNum }}个)</span>
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
