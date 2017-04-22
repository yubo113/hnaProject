<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>拟写材料</span>
					<span class="text-dark-grey">{{ detail.csrApproval.writMesScience }}</span>
				</div>
				<div>
					<span>初次完成</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writMesScienceConsuming? detail.csrApproval.writMesScienceConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.writMesScienceFile && detail.csrApproval.writMesScienceFile !== 'null'">
					<span>报文材料定稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writMesScienConsuming? detail.csrApproval.writMesScienConsuming : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.writMesScienceFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.writMesScienceFile | filesNum }}个)</span>
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
