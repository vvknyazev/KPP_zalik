import { Component, OnInit } from '@angular/core';
import {CircleAndPoints} from "../class/circleAndPoints";

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss'],
})
export class ViewFormComponent  implements OnInit {

  show_update: boolean = false;
  data: CircleAndPoints[] = [];
  constructor() { }
  ngOnInit() {}

  addCircleAndPoints(event: any){
    if (event as CircleAndPoints){
      let circleAndPoints: CircleAndPoints = event;
      this.data.push(circleAndPoints);
      console.log(this.data);
    } else{
      throw new Error("Error of type");
    }
  }

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

}
