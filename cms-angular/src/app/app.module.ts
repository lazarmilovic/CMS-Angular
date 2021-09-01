import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { UsersModule } from './views/users/users.module';
import { UserDetailModule } from './views/userDetail/userDetail.module';
import { UserDetailComponent } from './views/userDetail/userDetail.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    UserDetailModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailComponent },
      { path: '', component: UsersComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
