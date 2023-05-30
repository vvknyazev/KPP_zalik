import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CircleAndPoints} from "../class/circleAndPoints";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertController} from "@ionic/angular";
import {fieldValidator} from "../service/fieldValidator";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnInit {
  circleAndPointsForm!: FormGroup;
  circleAndPoints!: CircleAndPoints;
  @Output() circleAndPointsAdd: EventEmitter<CircleAndPoints> = new EventEmitter<CircleAndPoints>();
  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.circleAndPointsForm = this.fb.group({
      N: [0, [fieldValidator()]],
      R: [0, [fieldValidator()]],
    })
  }

  onSubmit() {
    let N = this.circleAndPointsForm.value.N;
    let R = this.circleAndPointsForm.value.R;
    this.circleAndPoints = new CircleAndPoints(N, R);
    this.circleAndPointsAdd.emit(this.circleAndPoints);
    console.log(this.circleAndPoints);
    console.log("Submit");
  }
  ngOnInit() {}

}
