import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyAdminService } from '../services/proy-admin.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  menu_proy: any = [];

  proyectoObj: Proyecto = new Proyecto();
  idedit: number = 0;
  iddelete: number = 0;

  public formValueProy!: FormGroup;

  faPlusEdu = faPlus;
  faCheckEdu = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  showAgregar!: boolean;
  showEditar!: boolean;
  showEliminar!: boolean;
  showTituloAgregar!: boolean;
  showTituloEditar!: boolean;
  showTituloEliminar!: boolean;

  constructor(private proyadminService: ProyAdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getAllProyecto(); 

    this.formValueProy = this.formBuilder.group({
      id:[''],
      nombre: ['',Validators.required],
      fecha: ['',Validators.required],
      descripcion: ['',Validators.required],
      url_imagen: ['',Validators.required],
      url_proyecto: ['',Validators.required]
    });

    
  }

  getAllProyecto() {
    this.proyadminService.getProyecto()
    .subscribe((response) => {

      this.menu_proy = response;
    });
  }

  agregarBoton() {
    this.formValueProy.reset();
  
    this.showEliminar = false;
    this.showEditar = false;
    this.showAgregar = true;
  
    this.showTituloEliminar = false;
    this.showTituloEditar = false;
    this.showTituloAgregar = true;
  }
  
  agregarProy(): any {
    this.proyectoObj = this.formValueProy.value;
  
    let cancel = document.getElementById('cancel');
    this.proyadminService.saveProyecto(this.proyectoObj).subscribe((a) =>
    {alert('Se agregó con exito');
      cancel?.click();
      this.formValueProy.reset();
      this.getAllProyecto();
    }
    )  
  }

  editarBoton(item: any){
    this.showAgregar = false;
    this.showEliminar = false;
    this.showEditar = true;

    this.showTituloAgregar = false;
    this.showTituloEliminar = false;
    this.showTituloEditar = true;
    this.proyectoObj.id = item.id;
    this.idedit = item.id;
    this.formValueProy.controls['nombre'].setValue(item.nombre);
    this.formValueProy.controls['fecha'].setValue(item.fecha);
    this.formValueProy.controls['fin'].setValue(item.fin);
    this.formValueProy.controls['descripcion'].setValue(item.descripcion);
    this.formValueProy.controls['url_imagen'].setValue(item.url_imagen);
    this.formValueProy.controls['url_proyecto'].setValue(item.url_proyecto);
    
}

editarProy() {
  
  this.proyectoObj = this.formValueProy.value;
  this.proyectoObj.id = this.idedit;
  this.proyadminService.updateProyecto(this.proyectoObj)
    .subscribe((a) => {


      alert('Se editó con exito');

      let cancel = document.getElementById('cancel');

      cancel?.click();
      this.formValueProy.reset();
      this.getAllProyecto();
    });
}

eliminarBoton(item:any) {
  this.showAgregar = false;
  this.showEditar = false;
  this.showEliminar = true;

  this.showTituloAgregar = false;
  this.showTituloEditar = false;
  this.showTituloEliminar = true;

  this.iddelete = item.id
}
eliminarProy() {
  this.proyadminService.deleteProyecto(this.iddelete).subscribe((a) =>
  {alert('Se eliminó con exito');
    this.getAllProyecto();
  });

}

}
