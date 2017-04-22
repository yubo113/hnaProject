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
					type: 'line'
					// spacingTop: 40
				},
				legend: {
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
					text: self.$store.state.searchResult.sourceChart.title
				},
				tooltip: {
					backgroundColor: '#fff',   // 背景颜色
					borderColor: '#333',         // 边框颜色
					borderRadius: 10,             // 边框圆角
					borderWidth: 1,               // 边框宽度
					shadow: true,                 // 是否显示阴影
					animation: true,             // 是否启用动画效果
					formatter: function () {
						return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + this.y + '<br/>';
					}
				},
				xAxis: {
					categories: self.$store.state.searchResult.sourceChart.xAxis || []
				},
				yAxis: {
					min: 0,
					title: {
						text: ''
					},
					stackLabels: {
						enabled: false			//	显示总和的属性  true为显示
					},
					labels: {
						formatter: function () {
							return this.value;
						}
					}
				},
				series: [{
					name: '物资总投入',
					data: self.changeFormt(self.$store.state.searchResult.sourceChart.yGoods)
				}, {
					name: '资金总投入',
					data: self.changeFormt(self.$store.state.searchResult.sourceChart.yMoney)
				}],
				noData: {
					style: {
						fontWeight: 'bold',
						fontSize: '15px',
						color: '#303030'
					}
				}
				});
			},
			/*	初始化数据格式
			 *	1.存储仓库中没有则直接返回空数组, 2.如果数据返回空则返回空数组, 3.如果如果数据正常则正常显示
			 *	返回数字格式数组
			 */
			changeFormt: function (arr) {
				let numArray = [];
				//	1.存储仓库中没有则直接返回空数组,
				if (!arr) {
					return numArray;
				}
				//	2.如果数据返回空则返回空数组
				if (!arr) {
					return numArray;
				}
				//	3.如果如果数据正常则正常显示
				let data = arr;
				for (let i of data) {
					numArray.push(Number(i));
				}
				return numArray;
			}
		},
		mounted () {
			this.newHight();
		}
	};
</script>
