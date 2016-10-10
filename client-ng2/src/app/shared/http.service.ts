import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalStoreService} from '../shared/globalstore.service';

@Injectable()
export class HttpService {
    
    constructor(private _http: Http, private _globalStoreService:GlobalStoreService) { }

    get(url) {
      return this._http.get(url)
        .map(function (res) { 
          
          let response = res.json();
          if(response.error){
            response.error.type  = "warning";
            return Observable.throw(response.error);
          }
          return response.data; 
        })
        .catch(this.handleError);
        
    }

    post(url, params) {
      let body = JSON.stringify(params);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this._http.post(url, body, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
        
    }
    private handleError(error: Response) {
      console.log(error);
      let errorText =  error.json().error || "Serever  Error.";
      return Observable.throw({text: errorText});
    }
  
}