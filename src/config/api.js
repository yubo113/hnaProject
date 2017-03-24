import $ from 'jquery';

var root = process.env.API_ROOT;

export default {
    get: function (opt) {
        console.log(`${root}${opt.url}`);
        return $.ajax({
            url: `${root}${opt.url}`,
            type: 'GET',
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
    post: function (opt) {
        return $.ajax({
            url: `${root}${opt.url}`,
            type: 'POST',
            data: opt.params || {},
            dataType: 'json',
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
    loadmore: function (iscroll, refresFn, loadFn) {
        var $pullUp = $('.pull-up');
        var $pullDown = $('.pull-down');
        var offset = $pullUp.height();
        var noData = '';
        // var refreshSet = null;
        var loadSet = null;
        var scroller = iscroll;
        var returnTop = $('.return-top');

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
                if (returnTop) {
                    returnTop.hide();
                }
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
            if ($pullUp.hasClass('loading')) {
                $pullUp.text('加载中');
                clearTimeout(loadSet);
                loadSet = setTimeout(function () {
                  loadFn();
                  $pullUp.text('没有更多信息').addClass('show loading');
                }, 1000);
                if (typeof loadData === 'function') {
                    // loadData ($pullUp)
                    // .always( function (data) {
                    //     //  $pullUp.text( '下载加载更多' ).removeClass( 'show loading' );
                    //     if ($('#voteList1').hasClass('disappear')) {
                    //          if ($('#voteList ul li').length == data.respInfo.countTotal) {
                    //             noData = true;
                    //             $pullUp.text('没有更多信息').addClass('show loading');
                    //         } else {
                    //             $pullUp.text('上拉加载更多').removeClass('show loading');
                    //         }
                    //     } else {
                    //         if ($('#voteList1 ul li').length == data.respInfo.countTotal) {
                    //             noData = true;
                    //             $pullUp.text('没有更多信息').addClass('show loading');
                    //         } else {
                    //             $pullUp.text('上拉加载更多').removeClass('show loading');
                    //         }
                    //     }
                    //     setTimeout(function () { scroller.refresh(); });
                    // });
                }
            } else {
                $pullUp.removeClass('show loading');
            }

            if ($pullDown.hasClass('loading')) {
                $pullDown.text('刷新中');
                refresFn().always(function () {
                    $pullDown.text('下拉刷新').removeClass('show loading');
                });
            } else {
                $pullDown.removeClass('show loading');
            }
        });
    }
};

// // 配置API接口地址
// var root = 'https://cnodejs.org/api/v1';
// // 引用superagent
// var request = require('superagent');
// // 自定义判断元素类型JS
// function toType(obj) {
//   return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }
// // 参数过滤函数
// function filter_null(o) {
//   for (var key in o) {
//     if (o[key] == null) {
//       delete o[key]
//     }
//     if (toType(o[key]) == 'string') {
//       o[key] = o[key].trim()
//       if (o[key].length == 0) {
//         delete o[key]
//       }
//     }
//   }
//   return o
// }
// /*
//   接口处理函数
//   这个函数每个项目都是不一样的，我现在调整的是适用于
//   https://cnodejs.org/api/v1 的接口，如果是其他接口
//   需要根据接口的参数进行调整。参考说明文档地址：
//   https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
// */
// function _api_base(method, url, params, success, failure) {
//   var r = request(method, url).type('text/plain')
//   if (params) {
//     params = filter_null(params);
//     if (method === 'POST' || method === 'PUT') {
//       if (toType(params) == 'object') {
//         params = JSON.stringify(params);
//       }
//       r = r.send(params)
//     } else if (method == 'GET' || method === 'DELETE') {
//       r = r.query(params)
//     }
//   }
//   r.end(function(err, res) {
//     if (err) {
//       alert('api error, HTTP CODE: ' + res.status);
//       return;
//     };
//     if (res.body.success == true) {
//       if (success) {
//         success(res.body);
//       }
//     } else {
//       if (failure) {
//         failure(res.body);
//       } else {
//         alert('error: ' + JSON.stringify(res.body));
//       }
//     }
//   });
// };
// // 返回在vue模板中的调用接口
// export default {
//   get: function(url, params, success, failure) {
//     return _api_base('GET', root + '/' + url, params, success, failure)
//   },
//   post: function(url, params, success, failure) {
//     return _api_base('POST', root + '/' + url, params, success, failure)
//   },
//   put: function(url, params, success, failure) {
//     return _api_base('PUT', root + '/' + url, params, success, failure)
//   },
//   delete: function(url, params, success, failure) {
//     return _api_base('DELETE', root + '/' + url, params, success, failure)
//   },
// }
