import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../models/users';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {
  transform(Users: IUsers[], SearchFilter: string): IUsers[] {
    SearchFilter.toLocaleLowerCase();
    return Users.filter((user) =>
      user.name.toLocaleLowerCase().includes(SearchFilter)
    );
  }
}
