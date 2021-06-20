import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // newsapiurl
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf32c7611e046cbb209b52be76b66ea";

  // technewsapiurl
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fcf32c7611e046cbb209b52be76b66ea"
  
  // businessApiUrl
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fcf32c7611e046cbb209b52be76b66ea"
 
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }
}
