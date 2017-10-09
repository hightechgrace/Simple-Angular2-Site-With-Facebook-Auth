import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MainComponent } from './Components/main/main.component';
import { PageNotFoundComponentComponent } from './Components/page-not-found-component/page-not-found-component.component';
import { FacebookModule } from 'ngx-facebook';
import { FBAuthGuardService } from "app/Services/fbauth-guard.service";

const appRoutes: Routes = [


  { path: 'dashboard', component: DashboardComponent, canActivate: [FBAuthGuardService] },
  { path: '', component: MainComponent },
  { path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [FBAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
