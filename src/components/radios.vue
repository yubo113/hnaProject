<template>
<div class="mint-radiolist" @change.stop.prevent="$emit('change', currentValue)">
	<label v-text="title"></label>
	<div v-for="option in options" class="check-wrap">
		<label class="mint-radiolist-label" slot="title">
			<span
				:class="{'is-right': align === 'right'}"
				class="mint-radio">
				<input
					class="mint-radio-input"
					type="radio"
					v-model="currentValue"
					:disabled="option.disabled"
					:value="option.userName || option">
				<span class="mint-radio-core"></span>
			</span>
			<span class="mint-radio-label" v-text="option.userName || option"></span>
		</label>
	</div>
</div>
</template>

<script>
/**
 * mt-radio
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mt-radio v-model="value" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
	props: {
		title: String,
		align: String,
		options: {
			type: Array,
			required: true
		},
	value: String
  },
  data () {
	return {
		currentValue: this.value
	};
  },
  watch: {
	value (val) {
		this.currentValue = val;
	},
	currentValue (val) {
		this.$emit('input', val);
	}
  }
};
</script>

<style lang="css">
.check-wrap {
	padding: 10px 0;
	border-bottom: 1px solid #E9ECEE;
}
@component-namespace mint {
	@component radiolist {
		@descendent label {
			display: block;
			padding: 0 10px;
		}
		@descendent title {
			font-size: 12px;
			margin: 8px;
			display: block;
			color: $radio-title-color;
		}
	}
	@component radio {
		@when right {
			float: right;
		}
		@descendent label {
			vertical-align: middle;
			margin-left: 6px;
		}
		@descendent input {
			display: none;
			&:checked {
				+ .mint-radio-core {
					background-color: $color-blue;
					border-color: $color-blue;
					&::after {
						background-color: $color-white;
						transform: scale(1);
					}
				}
			}
			&[disabled] + .mint-radio-core {
				background-color: $color-grey;
				border-color: #ccc;
			}
		}
		@descendent core {
			box-sizing: border-box;
			display: inline-block;
			background-color: $color-white;
			border-radius: 100%;
			border: 1px solid #ccc;
			position: relative;
			size: 20px;
			vertical-align: middle;
			&::after {
				content: " ";
				border-radius: 100%;
				position: absolute 5px * * 5px;
				size: 8px;
				transition: transform .2s;
				transform: scale(0);
			}
		}
	}
}
</style>
