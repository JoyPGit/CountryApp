import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryServService } from '../country-serv.service';
import { RegionComponent } from '../region/region.component';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit,OnChanges {
  
  public f:any;
  @Input()country:string;
  @Input()d:any;
  @Input() countrySingle:any;
  @Input()countryS:any;

  constructor() {
    }

  ngOnInit() {
    //console.log(this.country);
    //console.log(this.d);
    this.f = this.countrySingle;
    console.log(this.countryS);
  }
  
  ngOnChanges(changes:SimpleChanges){
    this.countrySingle = changes.countrySingle;
    this.f = this.countrySingle;
    //console.log(this.countrySingle);
    //console.log(this.f);
  }
}
