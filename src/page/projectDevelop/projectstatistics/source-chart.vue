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
				// const params = {};
				this.initChartHeight('#wrapper-chart', '.statistics-iscroll', '#container');
				this.initChart('container', {// 图表初始化函数，其中 container 为图表的容器 div
				chart: {
					type: 'line',
					spacingTop: 40
				},
				legend: {
					// align: 'right',
					// verticalAlign: 'middle',
					// layout: 'vertical'
				},
				plotOptions: {
					line: {
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
					// style: {                      // 文字内容相关样式
					// 	color: "#ff0000",
					// 	fontSize: "12px",
					// 	fontWeight: "blod",
					// 	fontFamily: "Courir new"
					// },
					formatter: function () {
						return this.point.name + ':' + this.y + '%';
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: ''
					},
					stackLabels: {
						enabled: false			//	显示总和的属性  true为显示
						// style: {
						// 	fontWeight: 'bold',
						// 	color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
						// }
					},
					labels: {
						formatter: function () {
							return this.value + '%';
						}
					}
				},
				series: [{
					data: [
						{
							name: 'Tokyo',
							y: 40
						}, {
							name: 'chain',
							y: 60
						}
						// ['Firefox', 44.2],
						// ['IE7', 26.6],
						// ['IE6', 20],
						// ['Chrome', 3.1],
						// ['Other', 5.4]
					]
					}]
				});
			}
		},
		mounted () {
			console.log('this is partner');
			this.newHight();
			// this.initTop('#wrapper-chart', '.statistics-iscroll');
		}
	};
</script>
