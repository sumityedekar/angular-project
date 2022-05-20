import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  // Create restaurent using post method
  postRestaurent(data: any) {
    return this._http.post<any>("http://localhost:3000/posts/", data).pipe(map((res: any) => {
      return res;
    }))
  }

  // Get restaurent data using get method
  getRestaurent() {
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res: any) => {
      return res;
    }))
  }

  // Update restaurent data using put method
  updateRestaurent(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  // Delete restaurent data using delete method
  deleteRestaurent(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }

}
