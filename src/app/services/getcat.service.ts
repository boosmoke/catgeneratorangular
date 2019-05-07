import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetcatService {
  catsUrl:string = 'http://aws.random.cat/meow';
  constructor(private http:HttpClient) { }
//get cats
  getCat():Observable<any>{
    return this.http.get<any>(`${this.catsUrl}`); 
  }

}
