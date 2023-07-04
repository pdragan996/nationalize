import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'probabilityPercentage',
  standalone: true
})
export class ProbabilityPercentagePipe implements PipeTransform {
  transform(probability: number): string {
    const percentValue: string = (probability * 100).toFixed(2);
    return `${percentValue}%`;
  }
}
