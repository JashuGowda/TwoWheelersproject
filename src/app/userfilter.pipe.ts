import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './tables/user';


@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {
  transform(users:Users[],searchvalue:string):Users[] {
    if(!users || !searchvalue){
      return users;
    }
    return users.filter(res=>
    res.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
    res.gmail.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
    res.pnumber.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
   }
}
