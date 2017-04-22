<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="detail.length > 0">
				    <div class="project-detail row bg-white project-status-failed"  v-for="(item,index) in detail" :key="index">
				    	<div class="fl project-text pt-10 pb-10">
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">合作方名称</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">{{ item.externalPartner }}</span></span>
				    		</div>
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">初次接触</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">
				    			({{ item.firstContactConsuming? item.firstContactConsuming : 0.0 }}h)
				    			</span></span>
				    		</div>				    		
				    		<div>
				    			<span class="text-light-grey span-3 inline tr">达成合作意向</span>
				    			<span class="span-6 textOverflow inline">:<span class="pl-10">
								({{ item.reachCoopIntenConsuming? item.reachCoopIntenConsuming : 0.0 }}h)</span></span>
				    		</div>
				    		<div  v-if="item.submitCoopProFile && item.submitCoopProFile !== 'null'">
				    			<span class="text-light-grey span-3 inline tr">提交合作方案</span>
				    			<span>:<span class="pl-10">
				    			({{ item.submitCoopProConsuming? item.submitCoopProConsuming : 0.0 }}h)</span></span>
								<span class="text-red pl-10 pr-10" @click="enterFileImg(item.submitCoopProFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
								<span class="text-dark-grey">({{ item.submitCoopProFile | filesNum }}个)</span>
				    		</div>
				    	</div>
				    	<div class="fr project-index tc text-white">
				    		{{ index + 1 }}
				    	</div>
				    </div>
			    </div>

				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {
			};
		},
		methods: {
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
