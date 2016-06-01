import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {UserForm} from './user-form';
import { SubscriptionFormComponent } from './subscription-form';
import {HTTP_BINDINGS} from 'angular2/http';
import { ZippyComponent } from './zippy.component';
@Component({ //component decorator+class
    selector: 'my-app',
    template: `
    <h1>My Angular 2 App</h1>
        <zippy>This is an accordion
    <user-form></user-form>

    </zippy>
        `,
    directives: [UserForm, SubscriptionFormComponent, ZippyComponent],
})

    // <subscription-form></subscription-form>

export class AppComponent { }
bootstrap(AppComponent, [
    HTTP_BINDINGS
]).catch(console.error);;