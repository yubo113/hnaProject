import Frame from '../frame/subroute.vue';
// 引用主页
import index from '../page/index.vue';
import content from '../page/content.vue';

// CSR工作
import csr from '../page/csr/csr.vue';
import csrwork from '../page/csr/csrwork/csrwork.vue';
import appReport from '../page/csr/csrwork/app-report.vue';
import hisReport from '../page/csr/csrwork/history-report.vue';
import fileImg from '../components/fileImg.vue';
import newsSpokesmanTrain from '../page/csr/newsSpokesmanTrain/newsSpokesmanTrain.vue';
import newsSpokesmanReport from '../page/csr/newsSpokesmanTrain/app-report.vue';
import newsSpokesmanHisory from '../page/csr/newsSpokesmanTrain/history-report.vue';
import staffTrain from '../page/csr/staffTrain/staffTrain.vue';
import staffTrainReport from '../page/csr/staffTrain/app-report.vue';
import staffTrainHisory from '../page/csr/staffTrain/history-report.vue';
import topTenSelection from '../page/csr/topTenSelection/topTenSelection.vue';
import topTenReport from '../page/csr/topTenSelection/app-report.vue';
import topTenHisory from '../page/csr/topTenSelection/history-report.vue';
import weeklyObserve from '../page/csr/weeklyObserve/weeklyObserve.vue';
import weeklyReport from '../page/csr/weeklyObserve/app-report.vue';
import weeklyHisory from '../page/csr/weeklyObserve/history-report.vue';
import monthly from '../page/csr/monthly/monthly.vue';
import monthlyReport from '../page/csr/monthly/app-report.vue';
import monthlyHisory from '../page/csr/monthly/history-report.vue';
import openDay from '../page/csr/openDay/openDay.vue';
import openDayReport from '../page/csr/openDay/app-report.vue';
import openDayHisory from '../page/csr/openDay/history-report.vue';
import assessment from '../page/csr/assessment/assessment.vue';
import assessmentReport from '../page/csr/assessment/app-report.vue';
import assessmentHisory from '../page/csr/assessment/history-report.vue';
import award from '../page/csr/award/award.vue';
import awardReport from '../page/csr/award/app-report.vue';
import awardHisory from '../page/csr/award/history-report.vue';
import activity from '../page/csr/activity/activity.vue';
import activityReport from '../page/csr/activity/app-report.vue';
import activityHisory from '../page/csr/activity/history-report.vue';
import csrForum from '../page/csr/csrForum/csrForum.vue';
import csrForumReport from '../page/csr/csrForum/app-report.vue';
import csrForumHisory from '../page/csr/csrForum/history-report.vue';

// projectDevelop(项目发展)
import projectDevelop from '../page/projectDevelop/projectDevelop.vue';
import projectStatistics from '../page/projectDevelop/projectstatistics/project-statistics.vue';
import partnerSearch from '../page/projectDevelop/projectstatistics/partner-search.vue';
import projectSearch from '../page/projectDevelop/projectstatistics/project-search.vue';
import sourceSearch from '../page/projectDevelop/projectstatistics/source-search.vue';
import charitablePartner from '../page/projectDevelop/projectstatistics/charitable-partner.vue';
import joinHistory from '../page/projectDevelop/projectstatistics/join-history.vue';

// diffuseMessage(传播事务)
import diffuseMessage from '../page/diffuseMessage/diffuseMessage.vue';
import mediaInfo from '../page/diffuseMessage/mediaInfo/media-info.vue';
import mediaDetail from '../page/diffuseMessage/mediaInfo/media-detail.vue';
import newsReleaseList from '../page/diffuseMessage/newsRelease/news-release-list.vue';
import newsRelease from '../page/diffuseMessage/newsRelease/news-release.vue';

// operation(品牌运营)
import operation from '../page/operation/operation.vue';
import adSourceList from '../page/operation/adSource/ad-source-list.vue';
import adSource from '../page/operation/adSource/ad-source.vue';
import storeManageList from '../page/operation/storeManage/store-manage-list.vue';
import storeManage from '../page/operation/storeManage/store-manage.vue';
import giftStockList from '../page/operation/giftStock/gift-stock-list.vue';
import giftStock from '../page/operation/giftStock/gift-stock.vue';
import mediaManageList from '../page/operation/mediaManage/media-manage-list.vue';
import mediaManage from '../page/operation/mediaManage/media-manage.vue';

// shareStore(分享资源库)
import shareStore from '../page/shareStore/shareStore.vue';
import storeShare from '../page/shareStore/storeShare/store-share.vue';
import detailedInfo from '../page/shareStore/storeShare/detailed-info.vue';
import recordList from '../page/shareStore/recordShare/record-list.vue';
import recordForm from '../page/shareStore/recordShare/record-form.vue';
import hnabresList from '../page/shareStore/hnabresShare/hnabres-List.vue';
import hnabresForm from '../page/shareStore/hnabresShare/hnabres-form.vue';

// monitorData(数据监控)
import monitorData from '../page/monitorData/monitorData.vue';
import brandSource from '../page/monitorData/brandSource/brand-source.vue';
import brandSourceDetail from '../page/monitorData/brandSource/brand-source-detail.vue';

// workMonitor(工作督办)
import workMonitor from '../page/workMonitor/workMonitor.vue';
import workOrder from '../page/workMonitor/workOrder/work-order.vue';
import workOrderDetail from '../page/workMonitor/workOrder/work-order-detail.vue';

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
        { path: '/index/csr/hisreport', name: 'hisReport', component: hisReport },
        { path: '/index/csr/fileImg', name: 'fileImg', component: fileImg },
        { path: '/index/csr/newsSpokesmanTrain', name: 'newsSpokesmanTrain', component: newsSpokesmanTrain },
        { path: '/index/csr/newsSpokesmanReport', name: 'newsSpokesmanReport', component: newsSpokesmanReport },
        { path: '/index/csr/newsSpokesmanHisory', name: 'newsSpokesmanHisory', component: newsSpokesmanHisory },
        { path: '/index/csr/staffTrain', name: 'staffTrain', component: staffTrain },
        { path: '/index/csr/staffTrainReport', name: 'staffTrainReport', component: staffTrainReport },
        { path: '/index/csr/staffTrainHisory', name: 'staffTrainHisory', component: staffTrainHisory },
        { path: '/index/csr/topTenSelection', name: 'topTenSelection', component: topTenSelection },
        { path: '/index/csr/topTenReport', name: 'topTenReport', component: topTenReport },
        { path: '/index/csr/topTenHisory', name: 'topTenHisory', component: topTenHisory },
        { path: '/index/csr/weeklyObserve', name: 'weeklyObserve', component: weeklyObserve },
        { path: '/index/csr/weeklyReport', name: 'weeklyReport', component: weeklyReport },
        { path: '/index/csr/weeklyHisory', name: 'weeklyHisory', component: weeklyHisory },
        { path: '/index/csr/monthly', name: 'monthly', component: monthly },
        { path: '/index/csr/monthlyReport', name: 'monthlyReport', component: monthlyReport },
        { path: '/index/csr/monthlyHisory', name: 'monthlyHisory', component: monthlyHisory },
        { path: '/index/csr/openDay', name: 'openDay', component: openDay },
        { path: '/index/csr/openDayReport', name: 'openDayReport', component: openDayReport },
        { path: '/index/csr/openDayHisory', name: 'openDayHisory', component: openDayHisory },
        { path: '/index/csr/assessment', name: 'assessment', component: assessment },
        { path: '/index/csr/assessmentReport', name: 'assessmentReport', component: assessmentReport },
        { path: '/index/csr/assessmentHisory', name: 'assessmentHisory', component: assessmentHisory },
        { path: '/index/csr/award', name: 'award', component: award },
        { path: '/index/csr/awardReport', name: 'awardReport', component: awardReport },
        { path: '/index/csr/awardHisory', name: 'awardHisory', component: awardHisory },
        { path: '/index/csr/activity', name: 'activity', component: activity },
        { path: '/index/csr/activityReport', name: 'activityReport', component: activityReport },
        { path: '/index/csr/activityHisory', name: 'activityHisory', component: activityHisory },
        { path: '/index/csr/csrForum', name: 'csrForum', component: csrForum },
        { path: '/index/csr/csrForumReport', name: 'csrForumReport', component: csrForumReport },
        { path: '/index/csr/csrForumHisory', name: 'csrForumHisory', component: csrForumHisory }
    ]
  },
  //  项目发展
  {
    path: '/index/projectDevelop',
    name: 'projectDevelop',
    component: projectDevelop,
    children: [
      { path: '/index/projectDevelop/projectStatistics', name: 'projectStatistics', component: projectStatistics },
      { path: '/index/projectDevelop/partnerSearch', name: 'partnerSearch', component: partnerSearch },
      { path: '/index/projectDevelop/projectSearch', name: 'projectSearch', component: projectSearch },
      { path: '/index/projectDevelop/sourceSearch', name: 'sourceSearch', component: sourceSearch },
      { path: '/index/projectDevelop/charitablePartner', name: 'charitablepartner', component: charitablePartner },
      { path: '/index/projectDevelop/joinHistory', name: 'joinHistory', component: joinHistory }
    ]
  },
  //  传播事务
  {
    path: '/index/diffuseMessage',
    name: 'diffuseMessage',
    component: diffuseMessage,
    children: [
      { path: '/index/diffuseMessage/mediaInfo', name: 'mediaInfo', component: mediaInfo },
      { path: '/index/diffuseMessage/mediaDetail', name: 'mediaDetail', component: mediaDetail },
      { path: '/index/diffuseMessage/newsReleaseList', name: 'newsReleaseList', component: newsReleaseList },
      { path: '/index/diffuseMessage/newsRelease', name: 'newsRelease', component: newsRelease },
      { path: '/index/diffuseMessage/diffuseFileImg', name: 'diffuseFileImg', component: fileImg }
    ]
  },
  //  品牌运营
  {
    path: '/index/operation',
    name: 'operation',
    component: operation,
    children: [
      { path: '/index/operation/adSourceList', name: 'adSourceList', component: adSourceList },
      { path: '/index/operation/adSource', name: 'adSource', component: adSource },
      { path: '/index/operation/storeManageList', name: 'storeManageList', component: storeManageList },
      { path: '/index/operation/storeManage', name: 'storeManage', component: storeManage },
      { path: '/index/operation/giftStockList', name: 'giftStockList', component: giftStockList },
      { path: '/index/operation/giftStock', name: 'giftStock', component: giftStock },
      { path: '/index/operation/mediaManageList', name: 'mediaManageList', component: mediaManageList },
      { path: '/index/operation/mediaManage', name: 'mediaManage', component: mediaManage }
    ]
  },
  //  共享资源库
  {
    path: '/index/shareStore',
    name: 'shareStore',
    component: shareStore,
    children: [
      { path: '/index/shareStore/storeShare', name: 'storeShare', component: storeShare },
      { path: '/index/shareStore/detailedInfo', name: 'detailedInfo', component: detailedInfo },
      { path: '/index/shareStore/recordList', name: 'recordList', component: recordList },
      { path: '/index/shareStore/recordForm', name: 'recordForm', component: recordForm },
      { path: '/index/shareStore/hnabresList', name: 'hnabresList', component: hnabresList },
      { path: '/index/shareStore/hnabresForm', name: 'hnabresForm', component: hnabresForm },
      { path: '/index/shareStore/fileImg', name: 'hnabresFileImg', component: fileImg }
    ]
  },
  //  工作督办
  {
    path: '/index/workMonitor',
    name: 'workMonitor',
    component: workMonitor,
    children: [
      { path: '/index/workMonitor/workOrder', name: 'workOrder', component: workOrder },
      { path: '/index/workMonitor/workOrderDetail', name: 'workOrderDetail', component: workOrderDetail }
    ]
  },
  //  数据监控
  {
    path: '/index/monitorData',
    name: 'monitorData',
    component: monitorData,
    children: [
      { path: '/index/monitorData/brandSource', name: 'brandSource', component: brandSource },
      { path: '/index/monitorData/brandSourceDetail', name: 'brandSourceDetail', component: brandSourceDetail }
    ]
  },
  {
    path: '/index/content/:id',
    component: content
  },
  {
    path: '/index/user',
    component: Frame
  }
];
