<template>
	<div class="return-top tc text-white bg-grey text-dark-grey"  v-on:click="returnTop">
		<span>Top</span>
	</div>
</template>
<script>
	import IScroll from 'Iscroll';
	export default {
		props: ['iscroll'],
		data () {
			return {};
		},
		methods: {
			returnTop: function () {
				this.iscroll.scrollTo(0, 0, 1000, IScroll.utils.ease.elastic);
			}
		}
	};
</script>
