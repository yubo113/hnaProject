<template>
	<div class="tc" style="height:100%">
		<span>{{message}}</span>
		<!-- <div id="fileDiv"></div> -->
		<!-- <div v-html="datas" style="height:100%"></div> -->
		<div class="text-red" @click="test">
			检查是否有文件
		</div>
		<div @click="save">
			下载文件
		</div>
		<div @click="open">
			代开文件
		</div>
		<!-- <div>
			<iframe id="ss" src="http://192.168.5.106:8080/hnaBrank//userfiles/8f8a806b579946efac59cce813575f9a/files/dynrap/hnabCsrDynrAp/step1/2017/03/%E6%B5%B7%E8%88%AA%E9%9B%86%E5%9B%A2%E7%BB%9F%E4%B8%80%E7%99%BB%E5%BD%95%E5%B9%B3%E5%8F%B0%E5%AF%B9%E6%8E%A5%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%831_0.html" width="100%" style="width:100%;font-size:0.2rem;overflow:hidden" scrolling="auto" frameborder="0"></iframe> 
		</div> -->
	</div>
</template>

<script>
import $ from 'jquery';
import eking from 'Eking';
	export default {
		data () {
			return {
				message: '用于展示附件预览',
				datas: '<p class="text-red">this is html</p>',
				code: ''
			};
		},
		created () {
			this.getFileImg();
			// this.testFile();
			// this.save();
		},
		methods: {
			save: function () {
				var docxBase64String = '';
				eking.saveFile('fileName', 'doc', docxBase64String, function (res) {
					if (res === 1) {
						eking.alert('保存docx文件结果', '成功！');
					} else {
						eking.alert('保存docx文件结果', '失败！');
					}
				});
			},
			test: function () {
				eking.ifFileExist('fileName', 'doc', function (res) {
					var ifExist = (res === 0) ? '不存在' : '存在';
					eking.alert('fileName' + '.docx检查文件', ifExist);
				});
			},
			open: function () {
				eking.openFile('fileName', 'doc');
			},
			getFileImg: function () {
				// const self = this;
				this.$post({
					url: '/app/mainReq?reqUrl=/mobile/appUtil/getFiles',
					params: {
						fileName: '|/hnabrand/userfiles/8f8a806b579946efac59cce813575f9a/files/dynrap/hnabCsrDynrAp/step3/2017/03/WebOffice7_0%E6%A0%87%E5%87%86%E7%89%88-%E5%BC%80%E5%8F%91%E6%8E%A5%E5%8F%A3SDK.doc'
					}
				}).then(res => {
					if (res.result) {
						console.log(res.data);
						this.code = res.data.files[0].fileCode;
						this.save();
						// this.test();
						// console.log(this.code);
						// var files = res.data.files;
						// for (var i = 0; i < files.length; i++) {
						// 	self.datas = `<a target='_blank' href='http://192.168.5.106:8080/hnaBrank${files[i].filePic}'>${files[i].fileTitle}</a>`;
						// }
					}
				}, res => {
					console.log(res);
				});
			},
			testFile: function () {
				var ifm = document.getElementById('ss');
				console.log($('#ss body'));
				console.log(document.documentElement.clientHeight);
				ifm.height = document.documentElement.clientHeight;
				$('#ss body').css('background', 'blue');
			// $('#ss html').width('100%');
			// $('#ss body').width('100%');
			// $(function() {
			// var r = $('#ss body').width() / $('#ss').width();
			// $('#ss body').css('-webkit-transform', 'scale(' + r + ')');
			// $('#ss body').css('background-color', 'blue');
			// console.log($('#ss body'));
			}
		},
		mounted () {
			// this.testFile();
		}
	};
</script>
