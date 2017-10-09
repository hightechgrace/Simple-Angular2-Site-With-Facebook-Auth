import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FBAuthGuardService } from 'app/Services/fbauth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  message: string;
  authMessageSubscription: any;

  constructor(private _router: Router, private _fBAuthGuardService: FBAuthGuardService) { }

  ngOnInit() {
    this._fBAuthGuardService.isLoggedInEvent.subscribe(data => {
      if(!data){
        this.message = "Login first please!";
      } else {
        this.message = "";
      }
    })
  }


}
