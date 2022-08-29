import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  menu_exp: any = [];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia()
    .subscribe((response) => {

      this.menu_exp = response;
    })
  }
}
