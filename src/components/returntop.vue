<template>
	<div class="return-top tc text-white bg-grey text-dark-grey"  v-on:click="returnTop">
		<span>Top</span>
	</div>
</template>
<script>
	import IScroll from 'Iscroll';
	import $ from 'jquery';
	export default {
		props: ['iscroll', 'test'],
		methods: {
			returnTop: function () {
				this.iscroll.scrollTo(0, 0, 1000, IScroll.utils.ease.elastic);
				$('.return-top').hide();
			}
		}
	};
</script>
