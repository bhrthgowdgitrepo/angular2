import {PipeTransform, Pipe} from 'angular2/core';

@Pipe({name: 'ellipsis'})
export class EllipsisPipe implements PipeTransform {
    constructor() {
    }

    transform(text:string, config:any[]):any {
        let limit=6;
        let character ='.';
        if(config && config[0]  ){
            limit = config[0];
         }
         if(config && config[1]  ){
            character = config[1];
         }
        if(text && text.length>limit){
                return text.substr(0,limit)+character+character+character;
        }
        else
            return text;
    }
}
