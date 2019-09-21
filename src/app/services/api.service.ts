import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get(environment.baseURL + 'api/search');
  }

  getUserDetails(id) {
    return this.http.get(environment.baseURL + 'api/profiles?ids=' + id);
  }

}
