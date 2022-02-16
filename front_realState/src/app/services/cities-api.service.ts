import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityDataAPIService {

  constructor(private http: HttpClient) { }

  listCitiesAPI() {
    const urlAPICities = "http://localhost:5500/colombianCitys"
    return this.http.get(urlAPICities)
  }

}
