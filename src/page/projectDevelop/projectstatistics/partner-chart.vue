<template>
	<div id="container" class="container-chart"></div>
</template>

<script>
	export default {
		data () {
			return {};
		},
		methods: {
			newHight: function () {
				const self = this;
				this.initChartHeight('#wrapper-chart', '.statistics-iscroll', '#container');
				this.initChart('container', {
				chart: {
					type: 'pie'
				},
				legend: {
					align: 'right',
					verticalAlign: 'middle',
					layout: 'vertical'
				},
				plotOptions: {
					pie: {
						// size: '75%',
						dataLabels: {
							enabled: true,
							format: '{point.percentage:.1f} %',
	                        distance: -50,
	                        color: '#FFF',
	                        style: {
	                            textShadow: '0 0 #FFF'
	                        }
						},
						showInLegend: true
					}
				},
				exporting: {
					enabled: false
				},
				credits: {
					enabled: false
				},
				title: {
					text: null
				},
				tooltip: {
					backgroundColor: '#fff',   // 背景颜色
					borderColor: '#333',         // 边框颜色
					borderRadius: 10,             // 边框圆角
					borderWidth: 1,               // 边框宽度
					shadow: true,                 // 是否显示阴影
					animation: true,             // 是否启用动画效果
					formatter: function () {
						return this.point.name + ':' + this.y + '%';
					}
				},
				series: [{
					data: self.$store.state.searchResult.partnerChart
				}],
				noData: {
					style: {
						fontWeight: 'bold',
						fontSize: '15px',
						color: '#303030'
					}
				}
				});
			}
		},
		mounted () {
			this.newHight();
		}
	};
</script>
