<template>
	<div class="return-top tc text-white bg-grey text-dark-grey"  v-on:click="returnTop" v-show="topshow">
		<span>Top</span>
	</div>
</template>
<script>
	import IScroll from 'Iscroll';
	export default {
		props: ['iscroll'],
		data () {
			return {
				topshow: true
			};
		},
		created () {
		},
		methods: {
			topShow: function () {
				const self = this;
				console.log(this.iscroll);
				this.iscroll.on('scroll', function () {
					if (this.y < 0) {
						self.topshow = true;
					} else {
						self.topshow = false;
					}
				});
			},
			returnTop: function () {
				console.log(this.iscroll);
				this.iscroll.scrollTo(0, 0, 1000, IScroll.utils.ease.elastic);
			}
		},
		mounted () {
			// this.topShow();
			console.log(this.iscroll);
		}
	};
</script>
