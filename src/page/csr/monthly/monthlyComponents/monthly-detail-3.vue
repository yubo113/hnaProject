<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>部门邮箱发布月刊</span>
					<span class="text-dark-grey">{{ detail.csrApproval.depaEmailRelemonth? detail.csrApproval.depaEmailRelemonth : "0000-00-00" }}</span>
				</div>
				<div>
					<span>邮箱地址</span>
					<span class="text-dark-grey">{{ detail.csrApproval.email? detail.csrApproval.email : "" }}</span>
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
