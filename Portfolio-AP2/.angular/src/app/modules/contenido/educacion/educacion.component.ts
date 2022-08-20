import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  menu_edu: Array<{src:string, titulo:string, periodo:string, lugar:string}> = [
    {
      src:"../../../../assets/images/logo_normal.jpg",
      titulo: 'Secundario completo',
      periodo:'2008-2013',
      lugar: 'Escuela Normal Superior Nº 5 General Don "Martín Miguel de Güemes"'
    },
    {
      src:"../../../../assets/images/logo_cam.png",
      titulo: 'Certificación Ingles B2 First',
      periodo:'2014',
      lugar: 'Cambridge Assessment English'
    },
    {
      src:"../../../../assets/images/logo_utn.png",
      titulo: 'Lic. en Sistemas de información',
      periodo:'En curso -',
      lugar: 'Universidad Tecnologica Nacional'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
