<template>
	<div class="tc pt-40 nodata" @click="refreshData">
		<span>{{nodata}}</span>
	</div>
</template>
<script>
	export default {
		props: ['nodata', 'refresh'],
		methods: {
			refreshData: function () {
				if (this.nodata !== '暂无数据') {
					this.refresh();
				}
			}
		}
	};
</script>
