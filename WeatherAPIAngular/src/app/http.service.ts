import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

constructor(private _http: HttpClient) {}

  getWeather(cityId){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=4962fc54aec5032850c7b1201bbe3e4b`);
  }

}
