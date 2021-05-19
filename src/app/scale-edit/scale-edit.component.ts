import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService, Scale } from '../services/rest.service';

@Component({
  selector: 'app-scale-edit',
  templateUrl: './scale-edit.component.html',
  styleUrls: ['./scale-edit.component.scss'],
})
export class ScaleEditComponent implements OnInit {

  scale: Scale = {id: 0, name: "", buildPrice: 0, paintPrice: 0};

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params.id
    this.getScale(id)
  }

  getScale(id:number){
    this.rest.getScale(id).subscribe(
      (response) => {
        this.scale = response
        console.log(this.scale)
      }
    )
  }

  editScale(){
    this.rest.editScale(this.scale).subscribe(
      (response) => {
        this.router.navigate(['/scales-manager'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
