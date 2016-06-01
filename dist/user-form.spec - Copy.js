var testing_1 = require("angular2/testing");
var browser_1 = require("angular2/platform/testing/browser");
var user_form_1 = require('./user-form');
var UserModel_1 = require('./UserModel');
testing_1.describe('testing userform-', function () {
    testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
    testing_1.it('testing delete', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(user_form_1.UserForm).then(function (fixture) {
            var form1 = fixture.componentInstance;
            form1.users.push(new UserModel_1.UserModel());
            form1.delete(0);
            testing_1.expect(form1.users.length).toEqual(0);
        });
    }));
    testing_1.it('template', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(user_form_1.UserForm).then(function (fixture) {
            var form1 = fixture.componentInstance;
        });
    }));
    testing_1.it('testing save', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(user_form_1.UserForm).then(function (fixture) {
            var form1 = fixture.componentInstance;
            form1.save();
            testing_1.expect(form1.users.length).toEqual(1);
        });
    }));
    testing_1.it('testing drawcheckboxes', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(user_form_1.UserForm).then(function (fixture) {
            var form1 = fixture.componentInstance;
            var input = {
                target: {
                    selectedOptions: [{ index: 1 }]
                }
            };
            form1.drawCheckBoxes(input);
            testing_1.expect(form1.days.length).toEqual(1);
        });
    }));
    testing_1.it('testing drawcheckboxes', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(user_form_1.UserForm).then(function (fixture) {
            var form1 = fixture.componentInstance;
            var input = {
                target: {
                    selectedOptions: [{ index: 2 }]
                }
            };
            form1.drawCheckBoxes(input);
            testing_1.expect(form1.days.length).toEqual(7);
        });
    }));
});
//# sourceMappingURL=user-form.spec - Copy.js.map