<template>
	<div class="tc" style="height:100%">
		<span>{{message}}</span>
		<div id="fileDiv"></div>
		<div v-html="datas" style="height:100%"></div>
		<div>
			<iframe id="ss" src="http://192.168.5.106:8080/hnaBrank/userfiles/8f8a806b579946efac59cce813575f9a/files/dynrap/hnabCsrDynrAp/step3/2017/03/WebOffice7_0%E6%A0%87%E5%87%86%E7%89%88-%E5%BC%80%E5%8F%91%E6%8E%A5%E5%8F%A3SDK.html" width="100%" style="overflow:hidden" scrolling="auto" frameborder="0"></iframe> 
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
	export default {
		data () {
			return {
				message: '用于展示附件预览',
				datas: '<p class="text-red">this is html</p>'
			};
		},
		activated () {
			this.$store.commit('changeTitle', '附件预览');
			this.getFileImg();
		},
		methods: {
			getFileImg: function () {
				const self = this;
				this.$post({
					url: '/app/mainReq?reqUrl=/mobile/appUtil/getFiles',
					params: {
						fileName: '|/hnabrand/userfiles/8f8a806b579946efac59cce813575f9a/files/dynrap/hnabCsrDynrAp/step3/2017/03/WebOffice7_0%E6%A0%87%E5%87%86%E7%89%88-%E5%BC%80%E5%8F%91%E6%8E%A5%E5%8F%A3SDK.doc'
					}
				}).then(res => {
					if (res.result) {
						console.log(res.data);
						var files = res.data.files;
						for (var i = 0; i < files.length; i++) {
							$('#fileDiv').append(`<a target='_blank' href='http://192.168.7.201:8080/hnabrand${files[i].filePic}'>${files[i].fileTitle}</a>`);
							self.datas = `<a target='_blank' href='http://192.168.5.106:8080/hnaBrank${files[i].filePic}'>${files[i].fileTitle}</a>`;
							// $('#fileDiv').append("<a target='_blank' href='http://192.168.7.201:8080/hnabrand" + files[i].filePic + "'>" + files[i].fileTitle + "</a>");
						}
					}
				}, res => {
					console.log(res);
				});
				// window.open('http://192.168.5.106:8080/hnaBrank/userfiles/8f8a806b579946efac59cce813575f9a/files/dynrap/hnabCsrDynrAp/step3/2017/03/WebOffice7_0%E6%A0%87%E5%87%86%E7%89%88-%E5%BC%80%E5%8F%91%E6%8E%A5%E5%8F%A3SDK.html', '_blank', 'width=600,height=400,top=100px,left=0px');
			}
		},
		mounted () {
			// var iframes = document.querySelector('#ss');
			// iframes.style.height = $(document.body).height() + 'px';
			// console.log(iframes.style.height);
			// // iframes.style.width = '100%';
			// iframes.style.border = '0';
			console.log($('#ss').contents().find('body'));
			var ifm = document.getElementById('ss');
			ifm.height = document.documentElement.clientHeight;
		}
	};
</script>
