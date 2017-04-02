<template>
	<div>
		<div class="bg-select-wrap pt-20 pb-20 join-header">
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">项目名称</span>
				<span class="span-6 textOverflow inline app-report-text">this is router</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">项目名称</span>
				<span class="span-6 textOverflow inline app-report-text">this is router</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">项目名称</span>
				<span class="span-6 textOverflow inline app-report-text">this is router</span>
			</div>
			<div>
				<span class="text-light-grey span-3 inline tr">项目名称</span>
				<span class="span-6 textOverflow inline app-report-text">this is router</span>
			</div>
		</div>
		<div class="app-report row bg-white pt-20 pl-10 pr-10 pb-20">
    		<div class="mb-20 ">
    			<span class="text-light-grey join-title">合作历史</span>
    		</div>
    		<div class="join-text">
    			<span>于2016/08/09与XXXX首次建立合作关系，共合 作开发项目XX项，规划投入XX元，已经完成投入 XXX元</span>
    		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {};
		},
		created () {
			this.$store.commit('changeTitle', '公益项目合作伙伴');
		}
	};
</script>
