import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'khn-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining =false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
