import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsBelongService {

  N: number = 0;
  R: number = 0;
  points = new Array();
  constructor(N: number, R: number) {
    this.N = N;
    this.R = R;
  }

  solve(){
    for (let i = 0; i < this.N; i++){
      this.points.push(i);
    }
  }
}
