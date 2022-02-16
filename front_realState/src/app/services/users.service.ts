import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.services';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly URL_API = this.config.getConfig().backend.url

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  createAdvisers(data:any){
    return this.http.post(this.URL_API+'/adviserMaster', data)
  }

  updateAdvisers(data:any){
      return this.http.put(this.URL_API+'/adviserMaster', data)
  }

  deleteAdvisers(id:string){
      return this.http.delete(this.URL_API+'/adviserMaster/' + id)
  }

  listAdvisers(){
      return this.http.get(this.URL_API+'/adviserMaster')
  }

  activeAdvisers(data:any){
      return this.http.put(this.URL_API+'/adviserMaster/active', data)
  }

  searchAdvisers(data:any){
      return this.http.post(this.URL_API+'/adviserMaster/search', data)
  }

}
