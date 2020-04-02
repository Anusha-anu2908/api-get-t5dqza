import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService{    
    constructor(private http:HttpClient){
    }

    getData() {
         return this.http.get('https://7edb0id7zi.execute-api.us-west-2.amazonaws.com/showtickets')
        .pipe(map(response => {
            return response;
        }));
    }
    
}