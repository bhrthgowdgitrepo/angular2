import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
export declare class UserService {
    private _http;
    constructor(_http: Http);
    getData(): Observable<any>;
}
