
import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/config.service';
import { HttpObservableService } from '../shared/httpobservable.service';


@Injectable()
export class HomeService {
    constructor(private _httpObservableService:HttpObservableService, private _configService: ConfigService) {}


    getUserData() {
        let url = this._configService.getUrl("getUserData");
        
        return this._httpObservableService.getObservable(url);
       
    }
}


