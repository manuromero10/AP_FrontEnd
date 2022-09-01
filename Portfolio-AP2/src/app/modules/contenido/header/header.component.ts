import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  usuario: boolean = false;


  constructor(private router:Router, private authService: AuthService) {

   }

  ngOnInit(): void {
   // this.isLogged();
  }

  menu: Array<{name:string, id: string}> = [
    {
      name: 'Home',
      id: "acercade"
    },
    {
      name: 'Experiencia',
      id: "experiencia"
    },
    {
      name: 'Educacion',
      id: "educacion"
    },

    {
      name: 'Habilidades',
      id: "habilidades"
    },

    {
      name: 'Proyectos',
      id: "proyectos"
    }
  ]
  showMenu(){
    let nav_items = document.querySelector('.nav_items')
    if (nav_items) {
      nav_items.classList.toggle('show')
    }
  }
  closeMenu(){
    let nav_items = document.querySelector('.nav_items')
    if (nav_items) {
      nav_items.classList.remove('show')
    } 
  }
  

/*
  isLogged(): void {
   this.authService.checkCookie();
   this.usuario = this.authService.admin 
  }
  */


  
}
