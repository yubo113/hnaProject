<template>
	<div class="iscroll">
		<div id="wrapper">
			<div id="scroller">
				<div class="pl-40 pr-10 pt-10 pb-10 bg-white" v-for="(item, index) in fileList" :key="index" @click="enterFileDetail(item)">
					<div class="inblock file-img bg-grey tc">
						<span class="file-icon font3">
							<i class="fa fa-file-text-o" aria-hidden="true"></i>
						</span>
					</div>
					<div class="file-text inblock ml-10">
						<span class="inline span-10">
							{{ item.fileTitle }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
import eking from 'Eking';
	export default {
		data () {
			return {
				fileIscroll: '',
				fileList: [],
				message: '用于展示附件预览',
				code: ''							//	保存base64码容器
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', '附件列表');
			this.getFileImg();
		},
		methods: {
			/*
			 *	获取文件base64码
			 */
			getFileImg: function () {
				console.log(this.$store.state.filelist.fileList);
				const self = this;
				this.$post({
					url: '/app/mainReq?reqUrl=/mobile/appUtil/getFiles',
					params: {
						fileName: self.$store.state.filelist.fileList
					}
				}).then(res => {
					if (res.result && res.data.files && res.data.files.length > 0) {
						self.fileList = res.data.files;
						console.log(res.data);
						self.$store.commit('loadingHide');
					}
				}, res => {
					console.log(res);
				});
			},
			/*	点击进入文件展示
			 *	file: 文件对象
			 *	开始检查文件存在与否
			 */
			enterFileDetail: function (file) {
				this.code = file.fileCode;
				// console.log(file.returnCode);
				const fileName = file.fileTitle;
				const typeStr = fileName.substr(fileName.lastIndexOf('.') + 1);
				const fileObj = {
					name: fileName,
					type: typeStr
				};
				if (file.returnCode === '00') {
					this.fileCheck(fileObj);
				} else if (file.returnCode === '01') {
					eking.alert(`${file.name}文件不存在`);
				} else {
					eking.alert(`不支持${file.name}预览`);
				}
			},
			/*	检查本地文件是否存在
			 *	opt: 对象(name: 文件名字; type: 文件后缀)
			 *	存在直接展示;不存在开始下载文件
			 */
			fileCheck: function (opt) {
				const self = this;
				eking.ifFileExist(opt.name, opt.type, function (res) {
					if (res === 0) {
						self.$store.commit('loadingShow');
						self.fileSave(opt);
					} else {
						self.fileOpen(opt);
					}
				});
			},
			/*	保存本地文件
			 *	code: 文件base64码
			 *	保存成功调用展示
			 */
			fileSave: function (opt) {
				const docxBase64String = this.code || '';
				const self = this;
				eking.saveFile(opt.name, opt.type, docxBase64String, function (res) {
					if (res === 1) {
						self.fileOpen(opt);
					} else {
						self.$store.commit('loadingHide');
						eking.alert(`保存${opt.name}失败`);
					}
				});
			},
			/*	展示本地文件
			 *	opt: 对象(name: 文件名字; type: 文件后缀)
			 *	展示文件
			 */
			fileOpen: function (opt) {
				this.$store.commit('loadingHide');
				eking.openFile(opt.name, opt.type, '文件', '#ffffff', '#d80c18');
			}
		},
		updated () {
			//	刷新iscroll
			if (this.fileIscroll) {
				this.fileIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.fileIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.fileIscroll.destroy();
			this.fileIscroll = null;
		}
	};
</script>
