import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent  implements OnInit {
  @Input() name: string="Робота";
  constructor() { }

  ngOnInit() {}

}
