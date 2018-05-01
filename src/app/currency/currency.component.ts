import { Component, OnInit, Input } from '@angular/core';
import { CountryServService } from '../country-serv.service';
import { RegionComponent } from '../region/region.component';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Input() currencyCountries:any;

  constructor() { }

  ngOnInit() {
    
  }
  //console.log(this.currencyCountries);
  

}
