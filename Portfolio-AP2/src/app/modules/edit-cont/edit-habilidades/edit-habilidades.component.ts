import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: Array<{nombre: string, style: string, porcentaje: number}> = [
    { 
      nombre: 'html',
      style: "70%",
      porcentaje: 70
    },
    { 
      nombre: 'css',
      style: 'style= "width: 50%"',
      porcentaje: 40
    },
    { 
      nombre: 'js',
      style: 'style= "width: 40%"',
      porcentaje: 50
    },
    { 
      nombre: 'angular',
      style: 'style= "width: 30%"',
      porcentaje: 30
    },
  ]


}
