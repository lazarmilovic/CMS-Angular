import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsers } from 'src/app/models/users';
import { SingleUser } from 'src/app/services/singleUser.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  errorMessage: string;

  user$: Observable<IUsers | null> = this.singleUser.getSingleUser(Number(this.route.snapshot.paramMap.get('id'))).pipe(
    catchError(e=> {
      this.errorMessage = e
      return of(null)
    })
  )

  constructor(
    private route: ActivatedRoute,
    private singleUser: SingleUser,
  ) {}

  ngOnInit() {
  }
}
