<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.csrApproval.developSchemeFile && detail.csrApproval.developSchemeFile !== 'null'">
					<span>制定报告传播方案</span>
					<span class="text-dark-grey">({{ detail.csrApproval.schemeTime? detail.csrApproval.schemeTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.developSchemeFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.developSchemeFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.schemeUpdateFile && detail.csrApproval.schemeUpdateFile !== 'null'">
					<span>修改传播方案修改</span>
					<span class="text-dark-grey">({{ detail.csrApproval.updateTime? detail.csrApproval.updateTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.schemeUpdateFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.schemeUpdateFile | filesNum }}个)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail', 'short'],
		data () {
			return {};
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
		}
	};
</script>
