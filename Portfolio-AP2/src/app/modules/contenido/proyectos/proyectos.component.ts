import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  menu_proy: any = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto()
    .subscribe((response) => {

      this.menu_proy = response;

      console.log('--->',response)
    })
  }

}
