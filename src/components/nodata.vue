<template>
	<div class="tc nodata" @click="refreshData">
		<div class="tc"><img :src="imgUrl" class="inline"></div>
		<span class="inline pt-20">{{nodata}}</span>
	</div>
</template>
<script>
	export default {
		props: ['nodata', 'refresh', 'type'],
		computed: {
			imgUrl: function () {
				if (this.type) {
					return '../../static/img/nodata.png';
				} else {
					return '../../static/img/abnormal.png';
				}
			}
		},
		methods: {
			refreshData: function () {
				if (this.nodata !== '暂无数据') {
					this.refresh();
				}
			}
		}
	};
</script>
