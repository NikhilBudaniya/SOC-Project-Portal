import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessnewsComponent } from '../businessnews/businessnews.component';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) {}

newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=de729745f21444eeba48b5678df97efe";
techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=de729745f21444eeba48b5678df97efe";
businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=de729745f21444eeba48b5678df97efe"
topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}
techNews():Observable<any>{
  return this._http.get(this.techApiUrl)
}
businessNews():Observable<any>{
  return this._http.get(this.businessApiUrl)
}
}
