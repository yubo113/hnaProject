<template>
<div>
    <div class="page-head head">
        <div class="tc p-15">
            <span class="fl" @click="backDoudou"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
            <span>社会责任与品牌工作平台</span>
            <span class="fr"><i class="fa fa-bell-o" aria-hidden="true"></i></span>
        </div>
    </div>
    <div class="page-head head-instance">
        <div class="tc p-15">
            <span>兜兜平台</span>
        </div>
    </div>
    <div class="index-banner">
        <img class="span-10" :src="banner">
    </div>
    <div class="iscroll">
        <div id="wrapper">
            <div id="scroller">
                <div class="clearfix index-con pb-30">
                    <div class="fl index-item tc textOverflow pt-10 pb-10" v-for="item in lists">
                        <div @click="enterModule(item.router)">
                            <div>
                                <img :src="item.imgurl">
                            </div>
                            <div>
                                <span>{{ item.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix index-list">
                    <div class="index-listTitle tc">
                        <span class="bg-white pl-10 pr-10 pt-5 pb-5"><i class="fa fa-file-text-o pr-10" aria-hidden="true"></i>待办事宜</span>
                    </div>
                    <ul class="newslist">
                        <li class="textOverflow in-20" v-for="(item , index) in newsLists">{{index + 1}}.{{item.vars.map.title}}</li>
                    </ul>
                    <ul class="newslist">
                        <li class="textOverflow in-20" v-for="(item , index) in csrList" @click="enterCsr(item)">{{newsLists.length + index + 1}}.【CSR工作】{{item.projectName}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import IScroll from 'Iscroll';
import $ from 'jquery';
import returntop from '../components/returntop.vue';

export default {
    components: { 'returntop': returntop },
    data () {
    return {
        indexIscroll: '',
        banner: './static/img/index-banner.png',
        lists: [{
            text: 'CSR工作',
            imgurl: 'static/img/csr.png',
            router: '/csr'
        }, {
            text: '项目发展',
            imgurl: 'static/img/project.png',
            router: '/projectDevelop'
        }, {
            text: '传播事务',
            imgurl: 'static/img/diffuse.png',
            router: '/diffuseMessage'
        }, {
            text: '品牌运营',
            imgurl: 'static/img/operation.png',
            router: '/operation'
        }, {
            text: '共享资源库',
            imgurl: 'static/img/share.png',
            router: '/shareStore'
        }, {
            text: '工作督办',
            imgurl: 'static/img/work.png',
            router: '/workMonitor'
        }, {
            text: '核心数据监控',
            imgurl: 'static/img/monitor.png',
            router: '/monitorData'
        }],
        newsLists: [],                          //  act数据
        csrList: []                             //  csr工作列表
        };
    },
    beforeCreate () {
        this.$store.commit('loadingShow');
    },
    created () {
        //  注册并且触发获取数据
        this.login();
    },
    watch: {
    },
    methods: {
        //  注册并且触发获取数据
        login: function () {
            this.$post({
                url: '/a/login',
                params: {
                    loginStr: 'IM+0cm30TeY=',
                    mobileLogin: true
                }
            }).then(res => {
                if (res.result) {
                    this.getTitleList();
                }
            });
        },
        /*
         *  展示待办事项列表(按模块划分数组)
         */
        getTitleList: function () {
            this.$store.commit('loadingShow');
            this.$post({
                url: '/app/mainReq?reqUrl=/todo/list',
                params: {
                    mobileLogin: true
                }
            }).then(res => {
                if (res.result) {
                    console.log(res.data);
                    //  判断是否有act数据
                    if (res.data.act) {
                        this.newsLists = res.data.act;
                        // console.log(res.data);
                    } else {
                        this.newsLists = [];
                    }
                    //  判断是否有csr数据
                    if (res.data.csr) {
                        this.csrList = res.data.csr;
                    } else {
                        this.csrList = [];
                    }
                    this.$store.commit('loadingHide');
                }
            });
        },
        /*  点击图片进入大模块,并且设置菜单初始值,设置初始显示路由
         *  router: 路由
         */
        enterModule: function (router) {
            if (router === this.lists[0].router) {
                this.$store.commit('setCsrIndex', 0);
                this.$store.commit('setCsrFlow', '/index/csr/csrwork');
            }
            this.$router.push(`/index${router}`);
        },
        /*  进入相应的CSR工作列表中相应的审批步骤,并且设置相应的菜单样式
         *  item: 包含所有csr审批信息的对象
         */
        enterCsr: function (item) {
            console.log(item.secondMenuId);
            //  判断是否是第一个模块中
            if (item.fistMenuId !== '004363e60a3c47648f5155980d56feab') {
                return;
            }
            //  1.csr工作列表跳转设置
            if (item.secondMenuId === '100') {
                const params = {
                    menu: 0,
                    routerName: 'appreport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        projectName: item.projectName,
                        reportParticipantname: item.reportParticipantname
                    }
                };
                this.setRouterInof(params);
            }
            //  2.新闻发言人培训
            if (item.secondMenuId === '73dc2099fc31480f8107ed247a56822c') {
                const params = {
                    menu: 1,
                    routerName: 'newsSpokesmanReport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        projectName: item.projectName,
                        trainingStaffName: item.trainingStaffName
                    }
                };
                this.setRouterInof(params);
            }
            //  3.从业培训人员认证
            if (item.secondMenuId === '971a137ec5b54f58bbaee631d0790ad7') {
                const params = {
                    menu: 2,
                    routerName: 'staffTrainReport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        projectName: item.projectName,
                        trainingStaffName: item.trainingStaffName
                    }
                };
                this.setRouterInof(params);
            }
             //  4.十佳项目评选
            if (item.secondMenuId === 'b59d64272bc149c1809aba6fe337e978') {
                const params = {
                    menu: 3,
                    routerName: 'topTenReport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        projectName: item.projectName,
                        reportParticipantname: item.reportParticipantname
                    }
                };
                this.setRouterInof(params);
            }
            //  5.csr论坛
            //  6.每周责任观察
            if (item.secondMenuId === '873037a11fda4aad8f226ea7d1b8de29') {
                const params = {
                    menu: 5,
                    routerName: 'weeklyReport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        projectPen: item.projectPen,
                        orgPeopleName: item.orgPeopleName
                    }
                };
                this.setRouterInof(params);
            }
            //  7.csr公作专刊
            if (item.secondMenuId === '86e756e8a94e4ad28e5c1ca2b50cd546') {
                const params = {
                    menu: 6,
                    routerName: 'monthlyReport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        frequencyName: item.frequencyName,
                        orgPeopleName: item.orgPeopleName
                    }
                };
                this.setRouterInof(params);
            }
            //  8.海外开放日
            if (item.secondMenuId === '5cf897167e5b4091801cc8f3fcd7391b') {
                const params = {
                    menu: 7,
                    routerName: 'openDayReport',
                    paramOpt: {
                        id: item.id,
                        thisStep: item.thisStep,
                        proname: item.proname,
                        participantname: item.participantname
                    }
                };
                this.setRouterInof(params);
            }
            //  9.csr对外活动
            //  10.csr评估
            //  11.csr奖项申报
            this.$router.push('/index/csr');
        },
        /*  从待办事项跳转路由信息设置
         *  opt:信息集合对象  menu:菜单选择index; routerName:路由名字; paramOpt:跳转到审批的地址栏信息
         */
        setRouterInof: function (item) {
            this.$store.commit('setCsrIndex', item.menu);
                this.$store.commit('setCsrFlow', {
                    router: `/index/csr/${item.routerName}`,
                    params: item.paramOpt
                });
        },
        /*
         *  左上角返回键,退回到兜兜应用
         */
        backDoudou: function () {
            // doudou.exitLightApp();
        }
    },
    updated () {
        //  刷新iscroll
        this.indexIscroll.refresh();
    },
    mounted () {
        // 当图片加载完成时，执行iscroll
        const self = this;
        const defereds = [];
        $('img').each(function () {
            let dfd = $.Deferred();
            $(this).load(dfd.resolve);
            defereds.push(dfd);
        });
        $.when.apply(null, defereds).done(function () {
            self.initTop('#wrapper', '.iscroll');
            self.indexIscroll = self.initIscroll('#wrapper');
        });
    },
    beforeDestroy () {
        this.indexIscroll.destroy();
        this.indexIscroll = null;
    }
};
</script>
