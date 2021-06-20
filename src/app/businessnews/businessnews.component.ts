import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
businessNewsDisplay:any=[];
  constructor(private _service:NewsapiservicesService) { }

  ngOnInit(): void {
  this._service.businessNews().subscribe((result)=>{
    console.log(result);
    this.businessNewsDisplay=result.articles;
  })
  }

}
