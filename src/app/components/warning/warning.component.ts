import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
  ) { }

  ngOnInit() {
  }

  openModal(data){
    let obj: Object = {};
    if(!!data && data == "warning"){
      obj = {
        title: "Warning",
        text: "Please make sure you are going to hire me :)",
        button: "Got it"
      };
    }
    this.ngxSmartModalService.setModalData(obj, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }

  closeModal(){
    localStorage.setItem("showWarning", 'false');
    this.ngxSmartModalService.getModal('myModal').close()
  }

}
