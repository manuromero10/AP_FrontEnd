import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from './guards/validate-session.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path:'home',
    loadChildren:() => import('@modules/contenido/contenido.module').then((m) => m.ContenidoModule),
  },
  {
    path:'admin',
    loadChildren:() => import('@modules/edit-cont/edit-cont.module').then((m) => m.EditContModule),
    canActivate:[ValidateSessionGuard]
  },
  {
    path:'**',
    redirectTo:'/home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled',
  anchorScrolling: 'enabled',
scrollOffset: [0,80]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
