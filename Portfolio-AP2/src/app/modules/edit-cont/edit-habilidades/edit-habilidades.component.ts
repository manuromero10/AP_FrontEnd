import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/models/habilidad';
import { HabAdminService } from '../services/hab-admin.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {

  public menu_hab: any = [];

  habilidadObj: Habilidad = new Habilidad();
  idedit: number = 0;
  iddelete: number = 0;

  public formValueHab!: FormGroup;

  faPlus = faPlus;
  faPen = faPen;
  faTrash = faTrash;

  showAgregar!: boolean;
  showEditar!: boolean;
  showEliminar!: boolean;
  showTituloAgregar!: boolean;
  showTituloEditar!: boolean;
  showTituloEliminar!: boolean;

  constructor( private habadminService: HabAdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllHabilidad();

    this.formValueHab = this.formBuilder.group({
      id:[''],
      nombre: ['',Validators.required],
      porcentaje: ['',Validators.required]
    });
  }

  getAllHabilidad() {
    this.habadminService.getHabilidad()
  .subscribe((response) => {
    this.menu_hab = response;
  });
  }

  agregarBoton() {
    this.formValueHab.reset();
  
    this.showEliminar = false;
    this.showEditar = false;
    this.showAgregar = true;
  
    this.showTituloEliminar = false;
    this.showTituloEditar = false;
    this.showTituloAgregar = true;
  }

  agregarHab(): any {
    console.log(this.formValueHab.value);
    this.habilidadObj = this.formValueHab.value;
  
    let cancel = document.getElementById('cancel');
    this.habadminService.saveHabilidad(this.habilidadObj).subscribe((a) =>
    {alert('Se agregó con exito');
      cancel?.click();
      this.formValueHab.reset();
      this.getAllHabilidad();
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
    this.habilidadObj.id = item.id;
    this.idedit = item.id;
    this.formValueHab.controls['nombre'].setValue(item.nombre);
    this.formValueHab.controls['porcentaje'].setValue(item.porcentaje);
    
}

editarHab() {
    
  this.habilidadObj = this.formValueHab.value;
  this.habilidadObj.id = this.idedit;
  this.habadminService.updateHabilidad(this.habilidadObj)
    .subscribe((a) => {


      alert('Se editó con exito');

      let cancel = document.getElementById('cancel');

      cancel?.click();
      this.formValueHab.reset();
      this.getAllHabilidad();
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

eliminarHab() {
  this.habadminService.deleteHabilidad(this.iddelete).subscribe((a) =>
  {alert('Se eliminó con exito');
    this.getAllHabilidad();
  });

}


}
