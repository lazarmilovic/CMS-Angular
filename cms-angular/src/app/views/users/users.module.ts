import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { FilterUsersPipe } from '../../shared/filterUsers.pipe';
import { UserDetailComponent } from './userDetail/userDetail.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersComponent, FilterUsersPipe, UserDetailComponent],
  imports: [FormsModule, UsersRoutingModule, CommonModule],
})
export class UsersModule {}
