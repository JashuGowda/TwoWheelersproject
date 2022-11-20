import { Pipe, PipeTransform } from '@angular/core';
import { Bike } from './components/bikes/table';

@Pipe({
  name: 'searchbike'
})
export class SearchbikePipe implements PipeTransform {

  transform(table:Bike[],searchfield:string):Bike[] {
    if(!table || !searchfield){
      return table;
    }
    return table.filter(res=>
    res.status.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
    res.bikename.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
    res.bikenum.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    );
   }
}
