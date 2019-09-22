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
    // for using mock data
    // return this.http.get("/assets/mocks/user.json");

    // for using live data
    return this.http.get(environment.baseURL + 'api/search');
  }

  getUserDetails(id) {
    // for using mock data
    // return this.http.get("assets/mocks/userDetail.json");

    // for using live data
    return this.http.get(environment.baseURL + 'api/profiles?ids=' + id);
  }

}
