import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { FacebookService, InitParams, LoginResponse, LoginOptions } from "ngx-facebook";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  title = 'Angular site with Facebook Auth';
  name = "";
  isUser = false;

  constructor(private fb: FacebookService, private _ngZone: NgZone) {

    let initParams: InitParams = {
      appId: '', //put your appId here
      xfbml: true,
      version: 'v2.10',
      cookie: true
    };

    fb.init(initParams);

  }

  ngOnInit() {
    this.updateLoginStatus();
  }


  loginWithFacebook(): void {
    // login with options
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((response: LoginResponse) => {
        console.log('Logged in from Login fn', response);
        this.updateLoginStatus();
        location.reload();
      })
      .catch(e => console.error('Error logging in'));


  }

  logOutWithFacebook(): void {
    this.fb.logout().then(() => {
      location.reload();
      console.log('Logged out!');
    });

  }

  updateLoginStatus() {
    var self = this;
    this.fb.getLoginStatus()
      .then((response: LoginResponse) => {
        console.log('updateLoginStatus', response);
        if (response.authResponse) {
          this.isUser = true;

          FB.api('/me', function (response) {
            self._ngZone.run(() => {
              self.name = response.name;
            });
          });
        } else {
          self._ngZone.run(() => {
            self.isUser = false;
          });
        }
      })
      .catch(e => console.error('Error logging in'));
  }


}