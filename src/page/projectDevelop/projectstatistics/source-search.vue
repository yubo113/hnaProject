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
	export default {
		data () {
			return {
				selectMul: [],				//	多选条件
				selectSta: [],				//	项目领域条件
				selectStatue: [],			//	项目状态
				options: [],
				selected: {},
				startdate: new Date('2010-01-01'),
				enddate: new Date(),
				dateTime: '',				//	判定把事件传给谁
				startTime: this.timeStrFormat(new Date()),				//	开始时间
				endTime: this.timeStrFormat(new Date()),				//	结束时间
				pickerValue: new Date()		//	初始化时间
			};
		},
		created () {
			this.$store.commit('changeTitle', '搜索');
			this.getSelected();
		},
		methods: {
			/*	判断是否有存储状态
			 *	1.有存储状态(不执行ajax)赋值给选中的	2.无存储状态(执行ajax)
			 */
			getSelected: function () {
				let selectValue = this.$store.state.searchResult.sourceSelected.value;
				// let selectOpt = this.$store.state.searchResult.sourceSelected.option;
				if (selectValue) {
					// this.options = selectOpt;
				} else {
					// this.$store.commit('loadingShow');
					this.getProjectName();
					this.getProgectStage();
					this.getProgectStatue();
				}
			},
			/*
			 *	获取搜索条件,并且创建select2
			 */
			getProjectSearch: function () {
			},
			/*
			 *	获取项目名称(多选)
			 */
			getProjectName: function () {
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
					}
				});
			},
			/*
			 *	获取项目领域(单选)
			 */
			getProgectStage: function () {
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
					}
				});
			},
			/*
			 *	获取项目状态(单选)
			 */
			getProgectStatue: function () {
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
				// this.selected.on('change', function () {
				// });
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
					placeholder: '请选择搜索关键字...'
				};
				this.selected[eleId] = this.initSelect(ele, multipleOpt);
			},
			/*	点击搜索开始请求图表数据
			 *	1.存储选中状态 2.存贮图表数据 3.储存回到页面是哪个tab
			 */
			search: function () {
				const self = this;
				console.log(self.selectMul[0].value);
				if (!this.selected.pName.val()) {
					this.selected.pName.val([self.selectMul[0].value]).trigger('change');
				}
				let str = JSON.stringify(this.selected.pName.val()).substr(1, JSON.stringify(this.selected.pName.val()).length - 2);
				console.log(this.selected.pName.val());
				console.log(this.selected.statue.val());
				console.log(this.selected.statge.val());
				console.log(this.startTime);
				console.log(this.endTime);
				console.log(str);
				this.$post({
					url: '/app/mainReq?reqUrl=/staticin/hnabLedStaticInstitution/getCountFund',
					params: {
						basProField: this.selected.statge.val(),
						basProName: JSON.stringify(this.selected.pName.val()),
						// basProName: 'f3e9aad2efb24b20bcbb4c925dc92792',
						basProStatus: this.selected.statue.val()
						// startTime: this.startTime,
						// endTime: this.endTime
					}
				}).then(res => {
					console.log(res);
					if (res.result) {
						console.log(res.data);
						// let categories = res.data.listName;
						// let dataTmp = {
						// 	data: res.data.listParam
						// };
						//	1.存储(选中值) 2.存贮图表数据
						this.$store.commit('setProjectSelect', {
							nameValue: this.selected.pName.val(),			//	选中多选条件
							optionMul: this.selectMul,						//	多选条件
							stageValue: this.selected.statge.val(),			//	选中领域条件
							optionSta: this.selectStatue,					//	领域条件
							statueValue: this.selected.statue.val(),		//	选中状态条件
							optionStatue: this.selectStatue,				//	状态条件
							start: this.startTime,							//	开始时间
							end: this.endTime								//	结束时间
						});
						console.log(this.$store.statue.sourceSelected);
						// this.$store.commit('setProjectChart', {
						// 	x: categories,
						// 	y: dataTmp
						// });
						// this.$router.push({name: 'projectstatistics'});
					}
				});
			},
			openCalendar: function (type) {
				if (type === 'start') {
					this.startdate = new Date('2010-01-01');
					this.dateTime = true;
				} else {
					this.dateTime = false;
				}
				this.$refs.picker.open();
			},
			handleConfirm: function (time) {
				if (this.dateTime) {
					this.startdate = time;
					this.startTime = this.timeStrFormat(time);
					console.log(this.startTime);
				} else {
					this.endTime = this.timeStrFormat(time);
				}
			}
		},
		mounted () {
			// const options = {
			// 	width: '100%',
			// 	minimumResultsForSearch: -1,
			// 	placeholder: '输入号码搜索...'
			// };
			// const multipleOpt = {
			// 	width: '100%',
			// 	minimumResultsForSearch: -1,
			// 	multiple: true,
			// 	// allowClear: true,
			// 	placeholder: '输入号码搜索...'
			// 	// tags: []
			// };
			// this.initSelect('#selectProject', multipleOpt);
			// this.initSelect('#selectReport', options);
			// this.initSelect('#selectWork', options);
			// $('#selectProject').val(['B', 'C']).trigger('change');
			// console.log($('#selectProject').val());
		}
	};
</script>
