import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IUsers } from 'src/app/models/users';
import { Users } from '../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList: Observable<IUsers[]> = this.users.getUsers();
  errorMessage: string = '';
  search: string = '';

  constructor(private users: Users) {}

  ngOnInit(): void {
  }
}
