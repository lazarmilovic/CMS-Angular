import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsers } from 'src/app/models/users';
import { SingleUser } from 'src/app/services/singleUser.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  SingleUser!: IUsers;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private singleUser: SingleUser,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const result = this.singleUser.getSingleUser(id).subscribe({
      next: (user) => (this.SingleUser = user),
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/users']);
  }
}
