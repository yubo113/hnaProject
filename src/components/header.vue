<template>
	<div>
		<div class="page-head head">
	      	<div class="tc p-15">
		        <span class="fl" v-on:click="backDoudou"><i class="fa fa-list" aria-hidden="true"></i></span>
		        <span>{{ title }}</span>
		        <span class="fr"><i class="fa fa-bell-o" aria-hidden="true"></i></span>
	      	</div>
	    </div>
	    <div class="page-head head-instance">
		    <div class="tc p-15">
		        <span>兜兜平台</span>
		    </div>
	    </div>
	</div>
	
</template>

<script>
	export default {
		props: ['title'],
		data () {
			return {
				// title : '兜兜开发平台'
			};
		},
		methods: {
			backDoudou: function () {
			}
		}
	};
</script>
