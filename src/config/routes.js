import Frame from '../frame/subroute.vue';
import userIndex from '../page/user/index.vue';
import userInfo from '../page/user/info.vue';
import userLove from '../page/user/love.vue';
// 引用主页
import index from '../page/index.vue';
import content from '../page/content.vue';

// CSR工作
import csr from '../page/csr/csr.vue';
import csrwork from '../page/csr/csrwork/csrwork.vue';
import appReport from '../page/csr/csrwork/app-report.vue';
import hisReport from '../page/csr/csrwork/history-report.vue';
// projectDevelop(项目发展)
import projectDevelop from '../page/projectDevelop/projectDevelop.vue';

// diffuseMessage(传播事务)
import diffuseMessage from '../page/diffuseMessage/diffuseMessage.vue';

// operation(品牌运营)
import operation from '../page/operation/operation.vue';

// shareStore(分享资源库)
import shareStore from '../page/shareStore/shareStore.vue';

// monitorData(数据监控)
import monitorData from '../page/monitorData/monitorData.vue';

// workMonitor(工作督办)
import workMonitor from '../page/workMonitor/workMonitor.vue';

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  //  csr工作
  {
    path: '/index/csr',
    name: 'csr',
    component: csr,
    children: [
        { path: '/index/csr/csrwork', name: 'csrwork', component: csrwork },
        { path: '/index/csr/appreport', name: 'appReport', component: appReport },
        { path: '/index/csr/hisreport', name: 'hisReport', component: hisReport }
    ]
  },
  //  项目发展
  {
    path: '/index/projectDevelop',
    name: 'projectDevelop',
    component: projectDevelop
  },
  //  传播事务
  {
    path: '/index/diffuseMessage',
    name: 'diffuseMessage',
    component: diffuseMessage
  },
  //  品牌运营
  {
    path: '/index/operation',
    name: 'operation',
    component: operation
  },
  //  共享资源库
  {
    path: '/index/shareStore',
    name: 'shareStore',
    component: shareStore
  },
  //  工作督办
  {
    path: '/index/workMonitor',
    name: 'workMonitor',
    component: workMonitor
  },
  //  数据监控
  {
    path: '/index/monitorData',
    name: 'monitorData',
    component: monitorData
  },
  {
    path: '/index/content/:id',
    component: content
  },
  {
	path: '/index/user',
    component: Frame,
    children: [
        { path: '/', component: userIndex },
        { path: 'info', component: userInfo },
        { path: 'love', component: userLove }
    ]
  }

];
