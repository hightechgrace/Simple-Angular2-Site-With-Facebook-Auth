import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { FacebookService, LoginResponse } from "ngx-facebook";

@Injectable()
export class FBAuthGuardService {
  isLoggedInEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(private fb: FacebookService, private _router: Router) {

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let promise = new Promise((resolve, reject) => {
      this.fb.getLoginStatus().then((response: LoginResponse) => {
        if (response.authResponse) {
          this.isLoggedInEvent.emit(true);
          resolve(true);
        } else {
          reject(false);
        }
      }).catch(e => {
        reject(false);
      });
    }).then((resolved) => {
      return true;
    }).catch((reject) => {
      this.isLoggedInEvent.emit(false);
      this._router.navigate(["/"]);
      return false;
    });
    return promise;

  }
}
