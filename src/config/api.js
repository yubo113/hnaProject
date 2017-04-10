import $ from 'jquery';
import IScroll from 'Iscroll';
const Highcharts = require('highcharts');
// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts);

var root = process.env.API_ROOT;

export default {
    get: function (opt) {
        return $.ajax({
            url: `${root}${opt.url}`,
            type: 'GET',
            data: opt.params || {},
            dataType: 'json',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // },
            xhrFields: {
                withCredentials: true,
                useDefaultXhrHeader: false
            },
            crossDomain: true
        }).then(res => {
            return {
                result: true,
                data: res
            };
        }, res => {
            return {
                result: false,
                data: res
            };
        });
    },
    post: function (opt) {
        return $.ajax({
            url: `${root}${opt.url}`,
            type: 'POST',
            data: opt.params || {},
            // dataType: 'json',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            // },
            xhrFields: {
                withCredentials: true,
                useDefaultXhrHeader: false
            },
            crossDomain: true
        }).then(res => {
            return {
                result: true,
                data: res
            };
        }, res => {
            return {
                result: false,
                data: res
            };
        });
    },
    put: function (opt) {
        return $.ajax({
            url: `${root}${opt.url}`,
            type: 'PUT',
            data: opt.params || {},
            xhrFields: {
                withCredentials: true,
                useDefaultXhrHeader: false
            },
            crossDomain: true
        }).then(res => {
            return {
                result: true,
                data: res
            };
        }, res => {
            return {
                result: false,
                data: res
            };
        });
    },
    delete: function (opt) {
        return $.ajax({
            url: `${root}${opt.url}`,
            type: 'DELETE',
            data: opt.params || {},
            xhrFields: {
                withCredentials: true,
                useDefaultXhrHeader: false
            },
            crossDomain: true
        }).then(res => {
            return {
                result: true,
                data: res
            };
        }, res => {
            return {
                result: false,
                data: res
            };
        });
    },
    /*  初始化iscroll高度
    *   eleId：jquery写法的元素; eleIscroll(包裹iscrol外层wrap): 元素名
    *   返回高度
    */
    initTop: function (eleId, eleIscroll) {
        const topNum = document.querySelector(eleIscroll).offsetTop;
        document.querySelector(eleId).style.top = `${topNum}px`;
        return topNum;
    },
    /*  初始化iscroll高度
    *   eleId：jquery写法的元素; eleIscroll(包裹iscrol外层wrap): 元素名; eleChart:包裹chart元素
    */
    initChartHeight: function (eleId, eleIscroll, eleChart) {
        const topNum = this.initTop(eleId, eleIscroll);
        const bodyHeight = document.querySelector('body').clientHeight;
        document.querySelector(eleChart).style.height = `${bodyHeight - topNum}px`;
    },
    /*  创建iscroll，
    *   iscrollContainer: 包含iscroll对象的容器元素
    *   返回iscroll实例
    */
    initIscroll: function (iscrollContainer) {
        const iscroll = new IScroll(iscrollContainer, {
                click: true,
                probeType: 2,
                bounceTime: 250,
                bounceEasing: 'quadratic',
                interactiveScrollbars: false,
                hideScrollbar: false
            });
        return iscroll;
    },
    /*  上拉加载，下拉刷新
    *   iscroll：iscroll对象;  refresFn: 刷新函数; loadFn: 加载函数
    */
    loadmore: function (iscroll, refresFn, loadFn) {
        var $pullUp = $('.pull-up');
        var $pullDown = $('.pull-down');
        var offset = $pullUp.height();
        var noData = '';
        var scroller = iscroll;
        var returnTop = $('.return-top');
        var upSafely = true;
        var downSafely = true;

        scroller.on('scroll', function () {
            if (this.y < 0) {
                // show returnTop component
                if (returnTop) {
                    returnTop.show();
                }
                if (!$pullUp.hasClass('show')) {
                    if (-this.y > -this.maxScrollY + offset) {
                        // $pullUp.text( '上拉加载更多' ).addClass( 'show' );
                        if (noData) {
                            $pullUp.text('没有更多信息').addClass('show');
                        } else {
                            $pullUp.text('上拉加载更多').addClass('show');
                        }
                    } else {
                        $pullUp.removeClass('show');
                    }
                } else {
                    if (-this.y > -this.maxScrollY + offset * 1.5) {
                        $pullUp.text('放开加载').addClass('loading');
                    }
                }

                if ($pullUp.hasClass('loading')) {
                    if (Math.abs(this.y) < Math.abs(this.maxScrollY) + offset * 1.5) {
                        //  $pullUp.text( '上拉加载更多' ).removeClass( 'loading' );
                        if (noData) {
                         $pullUp.text('没有更多信息').removeClass('loading');
                      } else {
                         $pullUp.text('上拉加载更多').removeClass('loading');
                      }
                    }
                }
            } else {
                /** Pull down */
                // hide returnTop component
                if (!$pullDown.hasClass('show')) {
                    if (this.y > 5) {
                        $pullDown.text('下拉刷新').addClass('show');
                    } else {
                        $pullDown.removeClass('show');
                    }
                } else {
                    if (this.y > 20) {
                        $pullDown.text('放开刷新').addClass('loading');
                    }
                }
            }
        });
        scroller.on('scrollEnd', function () {
            if (this.y > -1 && returnTop) {
                returnTop.hide();
            }
            if ($pullUp.hasClass('loading')) {
                $pullUp.text('加载中');
                //  当显示刷新(即有loading)，并且安全锁打开(即upSafely为true)
                //  此操作防止重复上拉重复发送请求
                if (upSafely) {
                    upSafely = false;
                    loadFn().then(res => {
                        //  根据返回的boolen判断执行显示，true为下次上拉准备，false为没有更多消息
                        if (res) {
                            $pullUp.text('没有更多信息').addClass('show loading');
                        } else {
                            $pullUp.text('上拉加载更多').removeClass('show loading');
                        }
                        upSafely = true;
                    });
                };
            } else {
                $pullUp.removeClass('show loading');
            }

            if ($pullDown.hasClass('loading')) {
                $pullDown.text('刷新中');
                //  当显示刷新(即有loading)，并且安全锁打开(即downSafely为true)
                //  此操作防止重复下拉重复发送请求
                if (downSafely) {
                    downSafely = false;
                    refresFn().then(res => {
                        downSafely = true;
                    }).always(function () {
                        $pullDown.text('下拉刷新').removeClass('show loading');
                    });
                }
            } else {
                $pullDown.removeClass('show loading');
            }
        });
    },
    /*  初始化图表
    *   eleId：jquery写法的元素;  parmas: 图表参数
    *   返回图表实例
    */
    initChart: function (eleId, parmas) {
        const charts = new Highcharts.Chart(eleId, parmas);
        return charts;
    },
    /*  加载select2
    *   eleId：jquery写法的元素;  parmas: 图表参数
    *   返回当前jquery元素
    */
    initSelect: function (eleId, options) {
        $(eleId).select2(options);
        $('.select2-container .select2-search--inline input').attr('readonly', 'readonly');
        // console.log($(eleId).val());
        return $(eleId);
    },
    /* 更改时间格式，输出yyyy-mm--dd字符串日期
    * time:传入的时间(日期对象类型)
    * 如：Mon Feb 06 2017 09:43:15 GMT+0800 (中国标准时间) --> 2017-02-06
    */
    timeStrFormat: function (time) {
        const seperator = '-';
        let month = time.getMonth() + 1;
        let strDate = time.getDate();
        if (month >= 1 && month <= 9) {
            month = `0${month}`;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = `0${strDate}`;
        }
        const currentdate = time.getFullYear() + seperator + month + seperator + strDate;
        return currentdate;
    },
    /* 更改时间格式，输出yyyy-mm--dd HH:MM:DD字符串日期
     * time:传入的时间(日期对象类型)
     */
    timeStrAllFormat: function (time) {
        const seperator = '-';
        const seperator1 = ':';
        let month = time.getMonth() + 1;
        let strDate = time.getDate();
        let strhour = time.getHours();
        let strminute = time.getMinutes();
        let second = time.getSeconds();
        if (month >= 1 && month <= 9) {
            month = `0${month}`;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = `0${strDate}`;
        }
        if (strhour >= 0 && strhour <= 9) {
            strhour = `0${strhour}`;
        }
        if (strminute >= 0 && strminute <= 9) {
            strminute = `0${strminute}`;
        }
        if (second >= 0 && second <= 9) {
            second = `0${second}`;
        }
        const currentdate = `${time.getFullYear()}${seperator}${month}${seperator}${strDate} ${strhour}${seperator1}${strminute}${seperator1}${second}`;
        return currentdate;
    }
};
