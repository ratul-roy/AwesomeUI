import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';
import { PubSubService} from './pubsub.service';

@Injectable()
export class HttpObservableService {
  	// private _successMsg;
  	// private _errorMsg;
  	//private httpRequestType;
    private _callCount = 0;
    constructor(private _httpService: HttpService, 
    			private _configService: ConfigService, 
    			private _pubSubService: PubSubService
    ) {}

    getObservable(url) {
       //let urltempArray = url.split("/");
       //let msg = "Getting Data from " + urltempArray[urltempArray.length-1];
       //this._flashLoadingMessage("");
       return this._createObservable(this._httpService.get(url));
        		
    }
    postObservable(url, params) {
        
    	return this._createObservable(this._httpService.post(url, params));
        		
    }
    // _flashLoadingMessage(msg){
        
    //         this._pubSubService.broadcast(this._configService.MESSAGES.FLASH, {text: msg, type: this._configService.MESSAGES.LOADING, autodestroy: false  });
        
    // }

    // _flashSuccessMessage(msg){
    // 	if(msg){
    // 		this._pubSubService.broadcast(this._configService.MESSAGES.FLASH, {text: msg, type: this._configService.MESSAGES.SUCCESS, autodestroy: true });
    // 	}
    // }

    // _flashErrorMessage(msg){
    // 	if(msg){
    // 		this._pubSubService.broadcast(this._configService.MESSAGES.FLASH, {text: msg, type: this._configService.MESSAGES.ERROR, autodestroy: true });
    // 	}
    // }
    _createObservable(serviceObj){
        this._callCount++;
        //this._pubSubService.broadcast(this._configService.MESSAGES.FLASH, {text: "", type: this._configService.MESSAGES.LOADING, autodestroy: false  });
    	return Observable.create(observer => {
    			serviceObj.subscribe(
	        		result => {
			            observer.next(result);
			            //call complete if you want to close this stream (like a promise)
                        this._callCount--;
                        if(this._callCount == 0){
                            //debugger;
                            //this._pubSubService.broadcast(this._configService.MESSAGES.FLASH_CLOSE);
                          }
                        //this._flashSuccessMessage(msgObject.successText);
			            observer.complete();
			        },
		        	error => {
                        this._callCount--;
		        		//this._flashErrorMessage(msgObject.errorText);
                        

                      } 

	        	);
    		});
    }
   
}
