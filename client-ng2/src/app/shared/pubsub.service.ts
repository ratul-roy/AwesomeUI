// import {Injectable} from 'angular2/core';
// //import {BehaviorSubject} from 'rxjs/subject';
// import * as Rx from 'rxjs/Rx';

// @Injectable()
// export class PubSubService {   
    
//     private _msgSource;
//     private _msgSource$;
    
//     constructor(subject){
//         // Observable navItem source
//         this._msgSource = new Rx.BehaviorSubject(subject);
//         // Observable navItem stream
//         this._msgSource$ = this._msgSource.asObservable();
//     }
//     broadcast(msgData) {
//         this._msgSource.next(msgData);
//     }

//     subscribe(callback) {
//         return this._msgSource$.subscribe(msgData => callback(msgData));
//     }

// }

import {Injectable} from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class PubSubService {
    private _listeners;
    private __eventsSubject;
    private _events;
    
    constructor() {
        this._listeners = {};
        this.__eventsSubject = new Rx.Subject();
        
        this._events = Rx.Observable.from(this.__eventsSubject);

        this._events.subscribe(
            ({name, args}) => {
                if (this._listeners[name]) {
                    for (let listener of this._listeners[name]) {
                        listener(...args);
                    }
                }
            });
    }

    on(name, listener) {
        if (!this._listeners[name]) {
            this._listeners[name] = [];
        }

        this._listeners[name].push(listener);
    }

    broadcast(name, ...args) {
        this.__eventsSubject.next({
            name,
            args
        });
    }
}