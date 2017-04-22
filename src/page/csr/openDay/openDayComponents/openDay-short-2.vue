<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>拟写报文</span>
					<span class="text-dark-grey">{{ step.csrApproval.writingmes }}</span>
				</div>	
				<div>
					<span>材料完成</span>
					<span class="text-dark-grey">({{ step.csrApproval.mesmatfirstconsuming? step.csrApproval.mesmatfirstconsuming : "0.0" }}h)</span>
				</div>				
				<div v-if="step.csrApproval.writingmesfile && step.csrApproval.writingmesfile !== 'null'">
					<span>报文定稿</span>
					<span class="text-dark-grey">({{ step.csrApproval.mesmatfinalconsuming? step.csrApproval.mesmatfinalconsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writingmesfile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writingmesfile | filesNum }}个)</span>
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
