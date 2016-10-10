import { Injectable } from '@angular/core';
declare var apiBase: any;
@Injectable()
export class ConfigService {

    constructor(){
    }
    getUrl(url){
        return apiBase + url;
        
    }
   
}