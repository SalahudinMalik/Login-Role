import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import {Plot} from './models/plot.model';
import {MemberInst} from './models/memberInst';

@Injectable()
export class DataService {


  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  fullurl:any = '';
  constructor(
    private global:Globals ,
    private http: HttpClient

  ) { }
  //(res) => this.extractData(res)
  getAllAgent():Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'agent/getAgent' ;
    // this.fullurl = this.global.weburl + "auth/login";
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
  }
  getAllPlots():Observable<Plot[]>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'plotD/plots' ;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
        .map((res : Response) => res)
        .catch(this.errorHandler);
     
  }
  // saveData(data:any): Observable<any> {
  //   this.fullurl = this.global.weburl + 'plotD/saveAP';
  //     this.res = this.http.post<any>(this.fullurl, data  , this._options)
  //         .map((result: Response) => result)
  //         .catch(this.errorHandler);
  //   return this.res;
  // }
  getLineChart():Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'charts/lineChart';
    
      return  this.http.get(this.fullurl)
      .map(result => result)
      .catch(this.errorHandler);
     
    
  }
  getPieChart():Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'charts/PieChart';
    
      return  this.http.get(this.fullurl)
      .map(result => result)
      .catch(this.errorHandler);
     
    
  }
  getMemberData(data:any):Observable<MemberInst[]>{
    this.fullurl = '';
    //this.fullurl = this.global.weburl + 'charts/MemberData/'+memberCode+'/'+ dateCriteria+'/';
    this.fullurl = this.global.weburl + 'charts/MemberData';
      return this.http.post<any>(this.fullurl, data  , this._options)
          .map((result: Response) => result)
          .catch(this.errorHandler);
    
      // return  this.http.get(this.fullurl)
      //   .map((res : Response) => res)
      //   .catch(this.errorHandler);
     
  }
//   private extractData(res: Response) {
//     if (res.status < 200 || res.status >= 300) {
//           throw new Error('Bad response status: ' + res.status);
//         }
//     let body = res.json();
//     return body || { };
//  }
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
