import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { FilterUsersPipe } from '../../shared/filterUsers.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent, FilterUsersPipe],
  exports: [UsersComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, RouterModule],
  bootstrap: [UsersComponent],
})
export class UsersModule {}
