import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUsers } from 'src/app/models/users';
import { Users } from '../../services/users.service';

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
