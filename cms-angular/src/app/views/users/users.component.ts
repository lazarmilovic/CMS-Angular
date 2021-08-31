import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUsers } from 'src/app/models/users';
import { Users } from '../services/users.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList: IUsers[] = [];
  errorMessage: string = '';
  //search = new FormControl('');
  search: string = '';

  filteredUsers: IUsers[] = [];
  constructor(private users: Users) {}

  get listFilter() {
    return this.search;
  }

  set listFilter(value: string) {
    this.search = value;
    console.log('value now is: ', value);
    this.filteredUsers = this.performFilter(value);
  }

  performFilter(filteredBy: string): any {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.filteredUsers.filter((user: any) => {
      user.name.toLocaleLowerCase().includes(filteredBy);
    });
  }
  ngOnInit(): void {
    const result = this.users.getUsers().subscribe({
      next: (usersList) => {
        this.usersList = usersList;
        this.filteredUsers = this.usersList;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
