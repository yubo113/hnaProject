<template>
	<div class="partner-search">
		<div class="bg-white partner-search-header mt-20 ml-10 mr-10 pl-10 pr-10 text-mblack">
			<div class="pt-10 pb-10">
				<span class="inblock">搜索类型</span>
					<div class="static-select partner-search-text">
					<select id="selectWork">  
						<option v-for="option in options" v-bind:value="option.value" :id="option.value">  
							{{ option.item }}  
						</option>  
					</select>  
				</div>
			</div>
		</div>
		<div class="check-more tc bg-red text-white partner-search-footer" @click="search">
			<span>搜  索</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				options: [],
				selected: ''
			};
		},
		created () {
			this.$store.commit('changeTitle', '合作伙伴统计器');
			this.getSelected();
		},
		methods: {
			/*	判断是否有存储状态
			 *	1.有存储状态(不执行ajax)赋值给选中的	2.无存储状态(执行ajax)
			 */
			getSelected: function () {
				let selectValue = this.$store.state.searchResult.partnerSelected.value;
				let selectOpt = this.$store.state.searchResult.partnerSelected.option;
				if (selectValue) {
					this.options = selectOpt;
				} else {
					this.$store.commit('loadingShow');
					this.getPartnerSearch();
				}
			},
			/*
			 *	获取搜索条件,并且创建select2
			 */
			getPartnerSearch: function () {
				const self = this;
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getCooperative'
				}).then(res => {
					if (res.result) {
						const name = res.data.listName;
						const param = res.data.listParam;
						for (let i = 0; i < name.length; i++) {
							let obj = {
								item: '',
								value: ''
							};
							obj.item = name[i];
							obj.value = param[i];
							this.options.push(obj);
						}
						this.newSelect2();
						setTimeout(function () {
							self.$store.commit('loadingHide');
						}, 1000);
					}
				});
			},
			newSelect2: function () {
				//	配置select2参数,创建select2
				const option = {
					width: '100%',
					minimumResultsForSearch: -1,
					placeholder: '请选择搜索关键字...'
				};
				this.selected = this.initSelect('#selectWork', option);
			},
			/*	点击搜索开始请求图表数据
			 *	1.存储选中状态 2.存贮图表数据 3.储存回到页面是哪个tab
			 */
			search: function () {
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getMFAndRatio',
					params: {
						content: this.selected.val()
					}
				}).then(res => {
					if (res.result) {
						const data = res.data;
						const series = [];
						if (data.listParam == null) {
							//	1.存储(选中值) 2.存贮图表数据
							this.$store.commit('setPartnerSelect', {
								value: this.selected.val(),
								option: this.options
							});
							this.$store.commit('setPartnerChart', series);
							return false;
						} else {
							for (let i = 0; i < data.listParam.length; i++) {
								let serie = [];
								serie[0] = data.listName[i];
								serie[1] = Number(data.listParam[i]);
								series[i] = serie;
							}
						}
						//	1.存储(选中值) 2.存贮图表数据
						this.$store.commit('setPartnerSelect', {
							value: this.selected.val(),
							option: this.options
						});
						this.$store.commit('setPartnerChart', series);
						this.$router.replace({name: 'projectstatistics'});
					}
				});
			}
		},
		mounted () {
			let selectValue = this.$store.state.searchResult.partnerSelected.value;
			if (selectValue) {
				this.newSelect2();
				this.selected.val([selectValue]).trigger('change');
			}
		}
	};
</script>
