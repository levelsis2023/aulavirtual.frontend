import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ToastGlobalService {

    toast: Subject<any> = new Subject<any>();

    constructor(

    ) {

    }

    add(val: any): void{
        this.toast.next(val);
    }

}
