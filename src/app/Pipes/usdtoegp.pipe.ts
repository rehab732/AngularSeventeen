import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDTOEGP',
  standalone: true
})
export class USDTOEGPPipe implements PipeTransform {

  transform(value:number): number {
    return value*40;
  }

}
