import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNamesService {
  names: string[] = [];

  constructor() {}

  addNameToList(name: string): void {
    this.names.push(name);
  }

  removeFromList(name: string): void {
    const index = this.names.indexOf(name);
    if (index !== -1) {
      this.names.splice(index, 1);
    }
  }

  getNames(): string[] {
    return this.names;
  }
}
