<template>
	<div class="return-top tc text-white text-dark-grey"  v-on:click="returnTop">
		<span><i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i></span>
	</div>
</template>
<script>
	import IScroll from 'Iscroll';
	import $ from 'jquery';
	export default {
		props: ['iscroll'],
		methods: {
			returnTop: function () {
				this.iscroll.scrollTo(0, 0, 1000, IScroll.utils.ease.quadratic);
				$('.return-top').hide();
			}
		}
	};
</script>
