<template>
<div>
  <div @click="change">user info page</div>
  <div>我的年龄{{age}}</div>
</div>
</template>
<script>
	export default {
		props: ['age'],
		data () {
			return {};
		},
		methods: {
			change: function () {
				this.$router.go(-1);
			}
		}
	};
</script>
