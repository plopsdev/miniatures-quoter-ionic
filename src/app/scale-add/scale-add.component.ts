import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService, Scale } from '../services/rest.service';

@Component({
  selector: 'app-scale-add',
  templateUrl: './scale-add.component.html',
  styleUrls: ['./scale-add.component.scss'],
})
export class ScaleAddComponent implements OnInit {

  scale: Scale = {id: 0, name: "", buildPrice: 0, paintPrice: 0};

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {}

  addScale(){
    this.rest.addScale(this.scale).subscribe(
      (response) => {
        this.router.navigate(['/scales-manager'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
