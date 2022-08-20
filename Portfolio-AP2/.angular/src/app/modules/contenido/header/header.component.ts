import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  faBars = faBars;
  usuario: boolean = false;

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Experiencia',
      router: []
    },
    {
      name: 'Educacion',
      router: []
    },

    {
      name: 'Habilidades',
      router: []
    },

    {
      name: 'Proyectos',
      router: []
    },

    {
      name: 'Contacto',
      router: []
    }


  ]
 
  showMenu(){
    let dropMenu = document.querySelector('.nav_items')
    if(dropMenu){
      if(dropMenu.classList.contains('show')){
        dropMenu.classList.remove('show')
      }
      else{
        dropMenu.className+=' show'
      }
    }
  } 
  


  getUser(){
    let isLoged = localStorage.getItem('auth_token');
    
    if(isLoged){
      this.usuario = true;
    }
  }

  cerrarSesion(){
    localStorage.removeItem('auth_token');
    this.usuario = false;
    this.router.navigate([''])
  }

}
