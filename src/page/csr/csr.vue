<template>
	<div class="csr">
		<sidebar></sidebar>
		<div class="page-head head">
	      	<div class="tc p-15">
	        	<span class="fl" @click="backindex"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
		        <span>{{ title }}</span>
		        <span class="fr" @click="siderShow"><i class="fa fa-list" aria-hidden="true"></i></span>
	      	</div>
	    </div>
	    <div class="page-head head-instance">
		    <div class="tc p-15">
		        <span>兜兜平台</span>
		    </div>
	    </div>
	    <!--自路由加载-->
	    <div id="csr-detail">
	    	<keep-alive>	
	    	<router-view></router-view>
	    	</keep-alive>
	    </div>
	</div>
</template>

<script>
	import sidebar from '../../components/sidebar.vue';
	// import loadmore from '../../components/loadmore/src/loadmore.vue'

	export default {
		components: { 'sidebar': sidebar },
		data () {
			return {
			};
		},
		created () {
			this.$router.replace('/index/csr/csrwork');
			this.$store.commit('changeTitle', 'CSR工作');
		},
		computed: {
			title: function () {
				return this.$store.state.titlename.titleName;
			}
		},
		methods: {
			backindex: function () {
				// console.log(this.$router.path);
				this.$router.go(-1);
			},
			siderShow: function () {
				this.$store.commit('sideStatus');
				//	阻止默认行为
				document.querySelector('.layer').addEventListener('touchmove', function (e) {
                    e.preventDefault();
                });
			}
		},
		activated () {
	      console.log(3);
	    },
	    deactivated () {
	      console.log(4);
	    }
	};
</script>
