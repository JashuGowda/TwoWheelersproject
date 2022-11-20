import { Pipe, PipeTransform } from '@angular/core';
import { Bookings } from './components/bookings/bookings';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(bookings:Bookings[],searchvalue:string):Bookings[] {
    if(!bookings || !searchvalue){
      return bookings;
    }
    return bookings.filter(res=>
    res.uname.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
    res.bikename.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
    res.bikenum.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
   }
   
}
