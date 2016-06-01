import { Http,Headers, RequestOptions }    from 'angular2/http';
import {Injectable} from 'angular2/core';
import{ } from 'angular2/common';
import  'rxjs/add/operator/map';
import  {Observable} from 'rxjs/Observable';
@Injectable()
export class UserService{
    constructor(private _http:Http){
        
    }
    getData():Observable<any>{
        console.log('service call');
         return this._http.get('data/frequency.json')
            .map(res =>   res.json());
    }
}