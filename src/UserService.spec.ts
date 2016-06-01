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
import {HTTP_PROVIDERS, Http, XHRBackend, ResponseOptions, BaseRequestOptions,
     Response, ConnectionBackend} from "angular2/http";
import {MockBackend, MockConnection} from "angular2/src/http/backends/mock_backend";
import { UserService } from './UserService';
import {Component, provide} from "angular2/core";

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,UserService,
            provide(XHRBackend, {useClass: MockBackend})
            // MyService
        ]
    });
describe('servce testing', function(){
   it('test getData()', inject([Http, XHRBackend], function(http ,backend){
       backend.connections.subscribe( (connection:MockConnection) => {
         var options = new ResponseOptions({
             body:[{response:["A", "B"]}]
        });
        console.log('sending response', response);
         var response = new Response(options);
         connection.mockRespond(response);
         
    });
       let service = new UserService(http);
        service.getData().subscribe(res=>console.log(res));
        
   })) 
});