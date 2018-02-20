import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  humidity: number;
  avgTemp: number;
  highTemp: number;
  lowTemp: number;
  status: string;

  ngOnInit() {
    this.getWashingtonDcWeather();
  }

  getWashingtonDcWeather() {
    let observable = this._httpService.getWeather(4350878);
    observable.subscribe(data => {
      this.humidity = data.main.humidity;
      this.status = data.weather[0].description;
      this.highTemp = data.main.temp_max;
      this.lowTemp = data.main.temp_min;
      this.avgTemp = Math.round((this.highTemp + this.lowTemp)/2);
      console.log(data);
    })
  }

}
