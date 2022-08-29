import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from '../services/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  menu_edu: any = [];

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion()
    .subscribe((response) => {

      this.menu_edu = response;
    })
  }

}
