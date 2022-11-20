import { Pipe, PipeTransform } from '@angular/core';
import { Bike } from './components/bikes/table';
import { Bookbike } from './components/bookbike/bookbike';

@Pipe({
  name: 'book'
})
export class BookPipe implements PipeTransform {

  transform(table:Bike[],searchfield:string):Bike[] {
    if(!table || !searchfield){
      return table;
    }
    return table.filter(res=>
    res.bikename.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
    res.bikenum.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
    res.status.toLocaleUpperCase().includes(searchfield.toLocaleUpperCase()) 
    );
   }

}
