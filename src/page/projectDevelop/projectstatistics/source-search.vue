<template>
	<div class="partner-search">
		<div class="bg-white partner-search-header mt-20 ml-10 mr-10 pl-10 pr-10 text-mblack">
			<div class="pt-10 pb-10">
				<span class="inblock">项目名称</span>
				<div class="static-select partner-search-text">
					<select id="selectProject">  
						<option v-for="option in selectMul" v-bind:value="option.value" :id="option.value">  
							{{ option.item }}  
						</option>
					</select>
				</div>
			</div>
			<div class="pt-10 pb-10">
				<span class="inblock">由</span>
				<div class="calendar-container partner-search-text" @click="openCalendar('start')">
					<input type="text" class="static-date" readonly="readonly" v-model="startTime">
					<span class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i></span>
				</div>
			</div>
			<div class="pt-10 pb-10">
				<span class="inblock">至</span>
				<div class="calendar-container partner-search-text" @click="openCalendar('end')">
					<input type="text" class="static-date" readonly="readonly" v-model="endTime">
					<span class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i></span>
				</div>
			</div>
			<div class="pt-10 pb-10">
				<span class="inblock">项目领域</span>
				<div class="static-select partner-search-text">
					<select id="selectReport">  
						<option v-for="option in selectSta" v-bind:value="option.value" :id="option.value">  
							{{ option.item }}  
						</option>  
					</select>
				</div>
			</div>
			<div class="pt-10 pb-10">
				<span class="inblock">工作状态</span>
				<div>
					<div class="static-select partner-search-text">
					<select id="selectWork">  
						<option v-for="option in selectStatue" v-bind:value="option.value" :id="option.value">  
							{{ option.item }}  
						</option>  
					</select>
				</div>
				</div>
			</div>
		</div>
		<div class="check-more tc bg-red text-white partner-search-footer" @click="search">
			<span>搜  索</span>
		</div>
		<div>
			<mt-datetime-picker ref="picker" :value="pickerValue" type="date" @confirm="handleConfirm" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" :startDate="startdate" :endDate="enddate">
			</mt-datetime-picker>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';

	export default {
		data () {
			return {
				defereds: [],				//	储存pormise数组
				selectMul: [],				//	项目名称多选条件
				selectSta: [],				//	项目领域单选条件
				selectStatue: [],			//	项目状态单选条件
				clearTime: null,			//	延时器储存器
				selected: {},
				startdate: new Date('2010-01-01'),
				enddate: new Date(),
				dateTime: '',				//	判定开始or结束时间
				startTime: this.$store.state.searchResult.sourceSelected.start,				//	开始时间
				endTime: this.$store.state.searchResult.sourceSelected.end,		//	结束时间
				pickerValue: new Date()		//	初始化时间
			};
		},
		created () {
			this.$store.commit('changeTitle', '资源投入统计器');
			this.getSelected();
		},
		methods: {
			/*	判断是否有存储状态
			 *	1.有存储状态(不执行ajax)赋值给选中的	2.无存储状态(执行ajax)
			 */
			getSelected: function () {
				let optionMul = this.$store.state.searchResult.sourceSelected.optionMul;
				let optionSta = this.$store.state.searchResult.sourceSelected.optionSta;
				let optionStatue = this.$store.state.searchResult.sourceSelected.optionStatue;
				if (optionMul) {
					this.selectMul = optionMul;
					this.selectSta = optionSta;
					this.selectStatue = optionStatue;
				} else {
					this.$store.commit('loadingShow');
					this.getAllRequest();
				}
			},
			/*
			 *	三个搜索条件完全返回
			 */
			getAllRequest: function () {
				const self = this;
				this.getProjectName();
				this.getProgectStage();
				this.getProgectStatue();
				$.when.apply(null, self.defereds).done(function () {
					self.clearTime = setTimeout(function () {
						self.$store.commit('loadingHide');
					}, 1000);
				});
			},
			/*
			 *	获取项目名称(多选)
			 */
			getProjectName: function () {
				let dfd = $.Deferred();
				this.defereds.push(dfd);
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getProjectName'
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
							this.selectMul.push(obj);
						}
						this.newSelectMul('#selectProject', 'pName');
						dfd.resolve();
					}
				});
			},
			/*
			 *	获取项目领域(单选)
			 */
			getProgectStage: function () {
				let dfd = $.Deferred();
				this.defereds.push(dfd);
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getBasproField'
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
							this.selectSta.push(obj);
						}
						this.newSelect2('#selectReport', 'statge');
						dfd.resolve();
					}
				});
			},
			/*
			 *	获取项目状态(单选)
			 */
			getProgectStatue: function () {
				let dfd = $.Deferred();
				this.defereds.push(dfd);
				this.$get({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getBasproStatus'
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
							this.selectStatue.push(obj);
						}
						this.newSelect2('#selectWork', 'statue');
						dfd.resolve();
					}
				});
			},
			/*
			 *	创建select2
			 *	ele:jquery元素 eleId:存在selected中属性名字
			 */
			newSelect2: function (ele, eleId) {
				//	配置select2参数,创建select2
				const option = {
					width: '100%',
					minimumResultsForSearch: -1,
					placeholder: '请选择搜索关键字...'
				};
				this.selected[eleId] = this.initSelect(ele, option);
			},
			/*
			 *	创建多选select2
			 *	ele:jquery元素 eleId:存在selected中属性名字
			 */
			newSelectMul: function (ele, eleId) {
				//	配置select2参数,创建select2
				const multipleOpt = {
					width: '100%',
					minimumResultsForSearch: -1,
					multiple: true,
					separator: ',',
					placeholder: '请选择搜索关键字...'
				};
				this.selected[eleId] = this.initSelect(ele, multipleOpt);
			},
			/*	过滤项目名称格式(将数组变成去掉中括号的字符串)
			 *	arr: 项目名称id数组
			 *	输出去掉中括号的字符串
			 */
			projectNameFormat: function (arr) {
				let str = '';
				if (arr.length > 0) {
					str = arr[0];
					for (var i = 1; i < arr.length; i++) {
						str += `,${arr[i]}`;
					}
				}
				return str;
			},
			/*	点击搜索开始请求图表数据
			 *	1.存储选中状态 2.存贮图表数据 3.储存回到页面是哪个tab
			 */
			search: function () {
				const self = this;
				if (!this.selected.pName.val()) {
					this.selected.pName.val([self.selectMul[0].value]).trigger('change');
				}
				this.$post({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getCountFund2',
					params: {
						basProField: this.selected.statge.val(),
						basProName: this.projectNameFormat(this.selected.pName.val()),
						basProStatus: this.selected.statue.val(),
						startTime: this.startTime,
						endTime: this.endTime
					}
				}).then(res => {
					if (res.result) {
						console.log(res.data);
						let title = '';
						if (res.data.listPlaInpFund) {
							title = `总投入${res.data.listPlaInpFund[0] || 0},       资金${res.data.listPlaInpFund[1] || 0},       物资${res.data.listPlaInpFund[2] || 0}`;
						}
						let categories = res.data.listName || [];
						let dataGoods = {
							data: res.data.listParam || []
						};
						let dataMoney = {
							data: res.data.listXName || []
						};
						//	1.存储(选中值) 2.存贮图表数据
						this.$store.commit('setSourceSelect', {
							nameValue: this.selected.pName.val(),			//	选中多选条件
							optionMul: this.selectMul,						//	多选条件列表
							stageValue: this.selected.statge.val(),			//	选中领域条件
							optionSta: this.selectSta,						//	领域条件列表
							statueValue: this.selected.statue.val(),		//	选中状态条件
							optionStatue: this.selectStatue,				//	状态条件列表
							start: this.startTime,							//	开始时间
							end: this.endTime								//	结束时间
						});
						// console.log(this.$store.state.searchResult.sourceSelected);
						this.$store.commit('setSourceChart', {
							title: title,
							x: categories,
							yGoods: dataGoods.data,
							yMoney: dataMoney.data
						});
						this.$router.push({name: 'projectStatistics'});
					}
				});
			},
			openCalendar: function (type) {
				if (type === 'start') {
					this.startdate = new Date('2010-01-01');
					this.pickerValue = new Date(this.$store.state.searchResult.sourceSelected.start);
					this.dateTime = true;
				} else {
					this.pickerValue = new Date(this.$store.state.searchResult.sourceSelected.end);
					this.dateTime = false;
				}
				this.$refs.picker.open();
			},
			handleConfirm: function (time) {
				if (this.dateTime) {
					this.startdate = time;
					this.startTime = this.timeStrFormat(time);
				} else {
					this.endTime = this.timeStrFormat(time);
				}
			}
		},
		updated () {
		},
		mounted () {
			let nameValue = this.$store.state.searchResult.sourceSelected.nameValue;
			let stageValue = this.$store.state.searchResult.sourceSelected.stageValue;
			let statueValue = this.$store.state.searchResult.sourceSelected.statueValue;
			if (nameValue) {
				this.newSelectMul('#selectProject', 'pName');
				this.selected.pName.val(nameValue).trigger('change');
			}
			if (stageValue) {
				this.newSelect2('#selectReport', 'statge');
				this.selected.statge.val([stageValue]).trigger('change');
			}
			if (statueValue) {
				this.newSelect2('#selectWork', 'statue');
				this.selected.statue.val([statueValue]).trigger('change');
			}
		},
		beforeDestroy () {
			if (this.clearTime) {
				clearTimeout(this.clearTime);
			}
		}
	};
</script>
