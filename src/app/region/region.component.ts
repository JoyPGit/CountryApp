import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { CountryServService } from '../country-serv.service';
import { Router,RouterModule,RouterLink } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers:[CountryServService]
})
export class RegionComponent implements OnInit {
  z: any;
  g: number;
  l: any;
  y: any;
  countryDetail2: any;
  flag: any;
  public c :any;
  public regions:string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  public s:string="hello";
  public regions2:any[]=[];
  public countryDetail:any[];

  constructor(public service:CountryServService, public router:Router, public location:Location) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){ 

  }

  public getCountryList(c):any{
    console.log(c);
    this.service.getCountryFromRegion(c).subscribe((next)=>{
      this.regions2=next;
      console.log(this.regions2);//unless and until it is a property of class, ngFor won't work
      //console.log("testone==="+JSON.stringify(next)); //JSON.stringify
      let countryString=JSON.stringify(next);
     /* setTimeout(()=>{
        this.router.navigate(['/country']);
      },100)*/
    })
  }

  /*public getFlag:any=(c)=>{
    console.log(c);
    let v:string = c.toLowerCase();
    this.service.getFlagServ(v).subscribe(
      next=>{
        console.log(next);
        this.flag=next;
        console.log(this.flag);
      }
    )
  }*/

  public getDetails(r1):any{
    /*for(let b in r){
    this.countryDetail = Object.keys(r).map(i=>{
      this.countryDetail[i];
    });
    console.log(this.countryDetail);
    let y = this.countryDetail2.from(r);
    console.log(this.countryDetail2);
    return this.countryDetail2;      
    }*/
    console.log(r1);
    this.l = r1;
    console.log(this.l.name);
    this.g =Object.keys(this.l).length;
    console.log(this.g);//g has to be a component variable
    //this.router.navigate(['/country']);//use <a routerlink> for html
  }

  public goBack():any{
    this.location.back();
  }

  public getCurrency(code):any{
    let cur = code.toLowerCase();
    this.service.getCurrencyServ(cur).subscribe(next=>{
      this.z = next;
      console.log(this.z);
      console.log(this.z[0].name);
      
    })
    //this.router.navigate(['currency']);
  }
}
