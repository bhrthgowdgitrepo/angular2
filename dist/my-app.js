var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var user_form_1 = require('./user-form');
var subscription_form_1 = require('./subscription-form');
var http_1 = require('angular2/http');
var zippy_component_1 = require('./zippy.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>My Angular 2 App</h1>\n        <zippy>This is an accordion\n    <user-form></user-form>\n\n    </zippy>\n        ",
            directives: [user_form_1.UserForm, subscription_form_1.SubscriptionFormComponent, zippy_component_1.ZippyComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent, [
    http_1.HTTP_BINDINGS
]).catch(console.error);
;
//# sourceMappingURL=my-app.js.map