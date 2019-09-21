import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user;
  userDetails;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params['user']);
      this.userDetails = JSON.parse(params['userDetails']);
    });
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['']);
  }

}
