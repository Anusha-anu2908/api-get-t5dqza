import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  items:any;
  val:any;
  constructor(private dataService:DataService){

  }

  ngOnInit(){
    this.dataService.getData().subscribe(res => {
      if(res){
      this.items = JSON.parse(res['body']).result;
      }
    })
    

  }

}
