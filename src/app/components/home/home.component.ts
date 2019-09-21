import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WarningComponent } from '../warning/warning.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [WarningComponent]
})
export class HomeComponent implements OnInit {

  users;
  usersDetails;

  constructor(
    private apiService: ApiService,
    private warningComponent: WarningComponent,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("showWarning") != "false"){
      this.warningComponent.openModal("warning");
    }

    this.apiService.getAllUsers().toPromise().then(response=>{
      this.users = response;
      let userDetails = [];
      this.users['items'].forEach(eachUserElement => {
        this.apiService.getUserDetails(eachUserElement.id).toPromise().then(responseDetails=>{
          userDetails.push(responseDetails);
          this.usersDetails = userDetails;
        })
      });
    });
  }

  viewUser(user, userDetails){
    this.router.navigate(['view'], { queryParams: { user: JSON.stringify(user), userDetails: JSON.stringify(userDetails)} });
  }

}
