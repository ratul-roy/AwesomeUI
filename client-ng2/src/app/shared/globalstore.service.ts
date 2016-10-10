import { Injectable } from '@angular/core';

@Injectable()
export class GlobalStoreService {
    private _store = {};
    constructor() { 
    	
    }
    setValue(key, value) {
       this._store[key] = value;
        
    }
    getValue(key) {
      return this._store[key];
        
    }
   
}