import { Component, OnInit } from '@angular/core';
import { HabilidadService } from '../services/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  menu_hab: any = [];

  constructor(private habilidadService: HabilidadService) { }

  ngOnInit(): void {
    this.habilidadService.getHabilidad()
    .subscribe((response) => {

      this.menu_hab = response;
    })
  }

}
