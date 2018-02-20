import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  humidity: number;
  avgTemp: number;
  highTemp: number;
  lowTemp: number;
  status: string;

  ngOnInit() {
    this.getDallasWeather();
  }

  getDallasWeather() {
    let observable = this._httpService.getWeather(4684888);
    observable.subscribe(data => {
      this.humidity = data.main.humidity;
      this.status = data.weather[0].description;
      this.highTemp = data.main.temp_max;
      this.lowTemp = data.main.temp_min;
      this.avgTemp = Math.ceil((this.highTemp + this.lowTemp)/2);
      console.log(data);
    })
  }
}
