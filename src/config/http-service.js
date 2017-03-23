class HttpService {
	constructor($http) {
		this.$http = $http;
	}
    // sendRequest(req) {
    //     req.headers = req.headers || {};
    //     angular.extend(req.headers, {
    //         'Accept': 'application/json',
    //         'role-auth': localStorage.userrole,
    //         'x-api-no-challenge': true,
    //         'X-Requested-With': 'XMLHttpRequest',
    //         'x-api-csrf': this.$cookies.get('CSRF')
    //     });
    //     return this.$http(req);
    // }

    sendRequestPost(req) {
        req.headers = {
          // 'Accept': 'text/plain',
          // 'x-api-no-challenge': true,
          // 'X-Requested-With': 'XMLHttpRequest',
          // 'x-api-csrf': this.$cookies.get('CSRF'),
          // 'Content-Type':'application/x-www-form-urlencoded'
        };
        return this.$http(req);
    }

    // sendRequestPostPic(req) {
    //     req.headers = {
    //       'Accept': 'application/json;',
    //       'x-api-no-challenge': true,
    //       'X-Requested-With': 'XMLHttpRequest',
    //       'x-api-csrf': this.$cookies.get('CSRF'),
    //       'Content-Type':undefined,
    //       'transformRequest': angular.identity
    //     };
    //     return this.$http(req);
    // }
}

export default HttpService;
