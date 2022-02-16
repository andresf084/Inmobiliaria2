import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.services';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  readonly URL_API = this.config.getConfig().backend.url

  constructor(
    private config: ConfigService,
    private http: HttpClient) { }

  createProperties(data:any){
      return this.http.post(this.URL_API+'/propertyMaster', data)
  }

  updateProperties(data:any){
      return this.http.put(this.URL_API+'/propertyMaster', data)
  }

  deleteProperties(id:string){
      return this.http.delete(this.URL_API+'/propertyMaster/' + id)
  }

  listProperties(){
      return this.http.get(this.URL_API+'/propertyMaster')
  }

  activeProperties(data:any){
      return this.http.put(this.URL_API+'/propertyMaster/active', data)
  }

  searchProperties(data:any){
      return this.http.post(this.URL_API+'/propertyMaster/search', data)
  }
}
