import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: any = [];


  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona()
    .subscribe((response) => {

      this.persona = response;
      
      console.log('--->',response)
    })
  }

}
