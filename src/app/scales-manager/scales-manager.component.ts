import { Component, OnInit } from '@angular/core';
import { RestService, Scale } from '../services/rest.service';

@Component({
  selector: 'app-scales-manager',
  templateUrl: './scales-manager.component.html',
  styleUrls: ['./scales-manager.component.scss'],
})
export class ScalesManagerComponent implements OnInit {

  scales: Scale[]
  scale: Scale
  show: boolean = false

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getScales()
  }

  getScales() {
    this.rest.getScales().subscribe(
      (response) => {
        this.scales = response
      }
    )
  }

  showScaleDetails(scale){
    this.scale = scale;
    this.show = true;
  }

  deleteScale(id){
    this.rest.deleteScale(id).subscribe(
      (response) => {
        this.getScales()
      }
    )
  }
  
}
