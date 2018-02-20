import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  humidity: number;
  avgTemp: number;
  highTemp: number;
  lowTemp: number;
  status: string;

  ngOnInit() {
    this.getSanJoseWeather();
  }

  getSanJoseWeather() {
    let observable = this._httpService.getWeather(5373327);
    observable.subscribe(data => {
      this.humidity = data.main.humidity;
      this.status = data.weather[0].description;
      this.highTemp = data.main.temp_max;
      this.lowTemp = data.main.temp_min;
      this.avgTemp = (this.highTemp + this.lowTemp)/2;
      console.log(data);
    })
  }

}
