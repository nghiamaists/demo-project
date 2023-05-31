import { Injectable } from '@angular/core';

console.log('TestTreeShakeService bundled');

@Injectable({
  providedIn: 'root'
})
export class TestTreeShakeService {
  constructor() {
    console.log('TestTreeShakeService init')
  }
}