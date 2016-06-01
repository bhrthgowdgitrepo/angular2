var testing_1 = require("angular2/testing");
var http_1 = require("angular2/http");
var mock_backend_1 = require("angular2/src/http/backends/mock_backend");
var UserService_1 = require('./UserService');
var core_1 = require("angular2/core");
testing_1.beforeEachProviders(function () {
    return [
        http_1.HTTP_PROVIDERS, UserService_1.UserService,
        core_1.provide(http_1.XHRBackend, { useClass: mock_backend_1.MockBackend })
    ];
});
testing_1.describe('servce testing', function () {
    testing_1.it('test getData()', testing_1.inject([http_1.Http, http_1.XHRBackend], function (http, backend) {
        backend.connections.subscribe(function (connection) {
            var options = new http_1.ResponseOptions({
                body: [{ response: ["A", "B"] }]
            });
            console.log('sending response', response);
            var response = new http_1.Response(options);
            connection.mockRespond(response);
        });
        var service = new UserService_1.UserService(http);
        service.getData().subscribe(function (res) { return console.log(res); });
    }));
});
//# sourceMappingURL=UserService.spec.js.map