import { Component, OnInit } from '@angular/core';
import { EduAdminService } from '../services/edu-admin.service';
import { Educacion } from 'src/app/models/educacion';
import {faCheck,faPen,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  public menu_edu: any = [];

  educacionObj: Educacion = new Educacion();
  idedit: number = 0;
  iddelete: number = 0;

  public formValueEdu!: FormGroup;

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

  constructor(private eduadminService: EduAdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.getAllEducacion();

    this.formValueEdu = this.formBuilder.group({
      id:[''],
      titulo: ['',Validators.required],
      inicio: ['',Validators.required],
      fin: ['',Validators.required],
      lugar: ['',Validators.required],
      url_logo: ['',Validators.required]
    });
  }

  getAllEducacion() {
    this.eduadminService.getEducacion()
  .subscribe((response) => {
    this.menu_edu = response;
  });
  }


 agregarBoton() {
  this.formValueEdu.reset();

  this.showEliminar = false;
  this.showEditar = false;
  this.showAgregar = true;

  this.showTituloEliminar = false;
  this.showTituloEditar = false;
  this.showTituloAgregar = true;
}

agregarEdu(): any {
  console.log(this.formValueEdu.value);
  this.educacionObj = this.formValueEdu.value;

  let cancel = document.getElementById('cancel');
  this.eduadminService.saveEducacion(this.educacionObj).subscribe((a) =>
  {alert('Se agregó con exito');
    cancel?.click();
    this.formValueEdu.reset();
    this.getAllEducacion();
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
      this.educacionObj.id = item.id;
      this.idedit = item.id;
      this.formValueEdu.controls['titulo'].setValue(item.titulo);
      this.formValueEdu.controls['inicio'].setValue(item.inicio);
      this.formValueEdu.controls['fin'].setValue(item.fin);
      this.formValueEdu.controls['lugar'].setValue(item.lugar);
      this.formValueEdu.controls['url_logo'].setValue(item.url_logo);
      
  }

  editarEdu() {
    
    this.educacionObj = this.formValueEdu.value;
    this.educacionObj.id = this.idedit;
    this.eduadminService.updateEducacion(this.educacionObj)
      .subscribe((a) => {


        alert('Se editó con exito');

        let cancel = document.getElementById('cancel');

        cancel?.click();
        this.formValueEdu.reset();
        this.getAllEducacion();
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
  eliminarEdu() {
    this.eduadminService.deleteEducacion(this.iddelete).subscribe((a) =>
    {alert('Se eliminó con exito');
      this.getAllEducacion();
    });

  }


}
