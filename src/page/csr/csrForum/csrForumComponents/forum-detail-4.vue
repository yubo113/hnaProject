<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>制定绿色会议标准</span>
					<span class="text-dark-grey">({{ detail.csrApproval.forGreenMeetingConsuming? detail.csrApproval.forGreenMeetingConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>现场舞台搭建</span>
					<span class="text-dark-grey">({{ detail.csrApproval.stageBuildConsuming? detail.csrApproval.stageBuildConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>音像设备保障</span>
					<span class="text-dark-grey">({{ detail.csrApproval.audioVideoConsuming? detail.csrApproval.audioVideoConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>摄影摄像</span>
					<span class="text-dark-grey">({{ detail.csrApproval.photoCameraConsuming? detail.csrApproval.photoCameraConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>制作嘉宾邀请函</span>
					<span class="text-dark-grey">({{ detail.csrApproval.makeGuestInvConsuming? detail.csrApproval.makeGuestInvConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>嘉宾邀请</span>
					<span class="text-dark-grey">({{ detail.csrApproval.guestInvitationConsuming? detail.csrApproval.guestInvitationConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>嘉宾入住酒店</span>
					<span class="text-dark-grey">({{ detail.csrApproval.guestCheckHotelConsuming? detail.csrApproval.guestCheckHotelConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>嘉宾入场</span>
					<span class="text-dark-grey">({{ detail.csrApproval.guestAdmissionConsuming? detail.csrApproval.guestAdmissionConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>媒体邀请</span>
					<span class="text-dark-grey">({{ detail.csrApproval.mediaInvitationConsuming? detail.csrApproval.mediaInvitationConsuming : "0.0" }}h)</span>
				</div>
				<div>
					<span>媒体接待</span>
					<span class="text-dark-grey">({{ detail.csrApproval.mediaReceptionConsuming? detail.csrApproval.mediaReceptionConsuming : "0.0" }}h)</span>
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
		}
	};
</script>
