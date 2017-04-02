<template>
	<div class="partner-search">
		<div class="bg-white partner-search-header mt-20 ml-10 mr-10 pl-10 pr-10 text-mblack">
			<div class="pt-10 pb-10">
				<span class="inblock">项目名称</span>
				<div class="partner-search-text">
					<input type="text" class="static-date">
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
				<span class="inblock">报告类别</span>
				<div class="static-select partner-search-text">
					<select v-model="selected" id="selectReport" v-on:change="change">  
						<option v-for="option in options" v-bind:value="option.value">  
							{{ option.text }}  
						</option>  
					</select>  
				</div>
			</div>
			<div class="pt-10 pb-10">
				<span class="inblock">工作状态</span>
				<div>
					<div class="static-select partner-search-text">
					<select v-model="selected" id="selectWork">  
						<option v-for="option in options" v-bind:value="option.value">  
							{{ option.text }}  
						</option>  
					</select>  
				</div>
				</div>
			</div>
		</div>
		<div class="check-more tc bg-red text-white partner-search-footer">
			<span>搜  索</span>
		</div>
		<div>
		<mt-datetime-picker ref="picker" :value="pickerValue" type="datetime" @confirm="handleConfirm" year-format="{value}" month-format="{value} 月" date-format="{value} 日" hour-format="{value} 时" minute-format="{value} 分">
		</mt-datetime-picker>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				options: [
					{ text: 'One', value: 'A' },
					{ text: 'Two', value: 'B' },
					{ text: 'Three', value: 'C' }
				],
				selected: '',
				dateTime: '',				//	判定把事件传给谁
				startTime: '',				//	开始时间
				endTime: '',				//	结束时间
				pickerValue: new Date()		//	初始化时间
			};
		},
		created () {
			this.$store.commit('changeTitle', '搜索');
		},
		methods: {
			openCalendar: function (type) {
				if (type === 'start') {
					this.dateTime = true;
				} else {
					this.dateTime = false;
				}
				this.$refs.picker.open();
			},
			change: function () {
				console.log(this.selected);
				console.log(this.visible);
			},
			handleConfirm: function (time) {
				console.log(time);
				if (this.dateTime) {
					this.startTime = time;
					console.log(this.startTime);
				} else {
					this.endTime = time;
				}
			}
		},
		mounted () {
			this.initSelect('#selectReport');
			this.initSelect('#selectWork');
		}
	};
</script>
