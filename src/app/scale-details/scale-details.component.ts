import { Component, Input, OnInit } from '@angular/core';
import { Scale } from '../services/rest.service';

@Component({
  selector: 'app-scale-details',
  templateUrl: './scale-details.component.html',
  styleUrls: ['./scale-details.component.scss'],
})
export class ScaleDetailsComponent implements OnInit {

  @Input() scale: Scale

  constructor() { }

  ngOnInit() {}

}
