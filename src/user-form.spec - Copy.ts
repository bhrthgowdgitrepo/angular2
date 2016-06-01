/// <reference path="../typings/main/ambient/jasmine/jasmine.d.ts" />
import {
it, xit,
describe,
expect,
TestComponentBuilder,
inject, injectAsync,
setBaseTestProviders,
beforeEachProviders,
} from "angular2/testing";
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} 
from "angular2/platform/testing/browser";
// import {HTTP_PROVIDERS, Http, XHRBackend, ResponseOptions, BaseRequestOptions,
    //  Response, ConnectionBackend} from "angular2/http";


import { UserForm } from './user-form';
import { UserModel } from './UserModel';
describe('testing userform-',
    function() {
        setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, 
        TEST_BROWSER_APPLICATION_PROVIDERS);


        it('testing delete', injectAsync([TestComponentBuilder], function(tcb) {
            return tcb.createAsync(UserForm).then(function(fixture) {
                let form1: UserForm = fixture.componentInstance;
                form1.users.push(new UserModel());// 'user1',12,"male",['A'], '2', true));
                form1.delete(0);
                expect(form1.users.length).toEqual(0);
            })
        }));
          it('template', injectAsync([TestComponentBuilder], function(tcb) {
            return tcb.createAsync(UserForm).then(function(fixture) {
                let form1: UserForm = fixture.componentInstance;
               
            })
        }));
         it('testing save', injectAsync([TestComponentBuilder], function(tcb) {
            return tcb.createAsync(UserForm).then(function(fixture) {
                let form1: UserForm = fixture.componentInstance;
                form1.save();
                expect(form1.users.length).toEqual(1);
            })
        }));
         it('testing drawcheckboxes', injectAsync([TestComponentBuilder], function(tcb) {
            return tcb.createAsync(UserForm).then(function(fixture) {
                let form1: UserForm = fixture.componentInstance;
                let input = {
                    target:{
                        selectedOptions:[{index:1}]
                    }
                }
                form1.drawCheckBoxes(input);
                expect(form1.days.length).toEqual(1);
            })
        }));
         it('testing drawcheckboxes', injectAsync([TestComponentBuilder], function(tcb) {
            return tcb.createAsync(UserForm).then(function(fixture) {
                let form1: UserForm = fixture.componentInstance;
                let input = {
                    target:{
                        selectedOptions:[{index:2}]
                    }
                }
                form1.drawCheckBoxes(input);
                expect(form1.days.length).toEqual(7);
            })
        }));
})
