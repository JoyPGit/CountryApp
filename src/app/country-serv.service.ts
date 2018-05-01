import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CountryServService {

  public url: any = 'https://restcountries.eu/rest/v2/regionalbloc/';
  public url2: any='https://restcountries.eu/data/'; 
  public currencyUrl = 'https://restcountries.eu/rest/v2/currency/';
  constructor(public http: HttpClient) { }

  public getCountryFromRegion(data):Observable<any> {
    console.log(data);
    let x = this.http.get(this.url + data); //use jquery
    console.log("tr=="+JSON.stringify(x));
    console.log(x);
    return x;
  }

  private listSource = new Subject<any>();
  list$=this.listSource.asObservable();
  
  changeList(list:any){
    this.listSource.next(list);
  }

  public getFlagServ(data):Observable<any>{
    let x =this.http.get(this.url2+data+'.svg')
    console.log(x);
    return x;
  }

  public getCurrencyServ(code):Observable<any>{
    return this.http.get(this.currencyUrl + code)
  }
}
