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
    this.isLogged();
  }

  menu: Array<{name:string, id: string}> = [
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

    //{
    //  name: 'Contacto',
    //  router: []
    // }


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
/*
  isLogged() {
    const cookieExists: boolean = this.cookieService.check('token_session');
    // console.log(cookieExists);
    this.usuario = this.cookieExists;
  }
*/

  isLogged(): void {
   this.authService.checkCookie();
   this.usuario = this.authService.admin 
  }


  cerrarSesion(): void {

    this.authService.logOut();
    this.usuario = false;
    this.router.navigate(['/home']);
    console.log('cerrar sesion');  }

  
}
