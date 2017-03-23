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
                <div class="pull-down" data-type="all">下拉刷新</div>
                <div class="clearfix index-con pb-30">
                    <div class="fl index-item tc textOverflow pt-10 pb-10" v-for="item in lists">
                        <div>
                        <!-- <router-link :to="'/index' + item.router"> -->
                            <router-link to="/index/csr">
                                <div>
                                    <img :src="item.imgurl">
                                </div>
                                <div>
                                    <span>{{ item.text }}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="clearfix index-list">
                    <div class="index-listTitle tc">
                        <span class="bg-white pl-10 pr-10 pt-5 pb-5"><i class="fa fa-file-text-o pr-10" aria-hidden="true"></i>待办事宜</span>
                    </div>
                    <ul class="newslist">
                        <li class="textOverflow in-20" v-for="(item , index) in newsLists"><router-link to="">{{index + 1}}.{{item.taskName}}</router-link></li>
                    </ul>
                </div>
                <div class="pull-up" data-type="all">上拉加载更多</div>
            </div>
        </div>
        <!-- <returntop :iscroll="indexIscroll"></returntop> -->
    </div>
</div>
</template>

<script>
import IScroll from 'Iscroll';
import $ from 'jquery';
// import returntop from '../components/returntop.vue';

export default {
    // components: { 'returntop': returntop },
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
        newsLists: [],
        item: {}
        };
    },
    beforeCreate () {
        this.$store.commit('loadingShow');
    },
    created () {
    // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
        //  注册并且触发获取数据
        this.login();
    },
    watch: {
    },
    methods: {
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
        getTitleList: function () {
            var self = this;
            this.$store.commit('loadingShow');
            this.$post({
                url: '/app/mainReq?reqUrl=/act/task/todoIndex'
            }).then(res => {
                if (res.result) {
                    self.newsLists = res.data;
                    this.$store.commit('loadingHide');
                }
                console.log(res);
            });
        },
        pullMore: function () {
            // this.newsLists.push({
            //     text: '全国人大常委会为何发怒常委会副秘书长？'
            // });
        },
        backDoudou: function () {
        // doudou.exitLightApp();
        }
    },
    updated () {
        //  刷新iscroll
        console.log(22222);
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
        document.querySelector('#wrapper').style.top = `${document.querySelector('.iscroll').offsetTop}px`;
        self.indexIscroll = new IScroll('#wrapper', {
            click: true,
            probeType: 2,
            bounceTime: 250,
            bounceEasing: 'quadratic',
            interactiveScrollbars: false,
            hideScrollbar: false
            });
            self.loadmore(self.indexIscroll, self.pullMore, self.pullMore);
        });
    },
    beforeDestroy () {
        console.log(111111);
        this.indexIscroll.destroy();
        this.indexIscroll = null;
    }
};
</script>
