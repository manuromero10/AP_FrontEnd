import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoModule } from '@modules/contenido/contenido.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { EditContRoutingModule } from './edit-cont-routing.module';
import { EditAcercadeComponent } from './edit-acercade/edit-acercade.component';
import { EditEducacionComponent } from './edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './edit-experiencia/edit-experiencia.component';
import { EditProyectosComponent } from './edit-proyectos/edit-proyectos.component';
import { EditHomeComponent } from './pages/edit-home/edit-home.component';
import { EditHabilidadesComponent } from './edit-habilidades/edit-habilidades.component';




@NgModule({
  declarations: [
    EditAcercadeComponent,
    EditHomeComponent,
    EditEducacionComponent,
    EditExperienciaComponent,
    EditProyectosComponent,
    EditHabilidadesComponent
  ],
  imports: [
    CommonModule,
    EditContRoutingModule,
    ContenidoModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class EditContModule { }
