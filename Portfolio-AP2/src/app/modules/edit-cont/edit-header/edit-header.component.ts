import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {

  faBars = faBars;

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
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

  cerrarSesion(): void {

    this.authService.logOut();
    this.router.navigate(['/home']);
   }

}
