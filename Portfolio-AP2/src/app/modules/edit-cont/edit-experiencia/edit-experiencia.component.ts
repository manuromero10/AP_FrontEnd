import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/models/experiencia';
import { ExpAdminService } from '../services/exp-admin.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  public menu_exp: any = [];

  experienciaObj: Experiencia = new Experiencia();
  idedit: number = 0;
  iddelete: number = 0;

  public formValueExp!: FormGroup;

  faPlus = faPlus;
  faPen = faPen;
  faTrash = faTrash;

  showAgregar!: boolean;
  showEditar!: boolean;
  showEliminar!: boolean;
  showTituloAgregar!: boolean;
  showTituloEditar!: boolean;
  showTituloEliminar!: boolean;

  constructor(private expadminService: ExpAdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getAllExperiencia();

    this.formValueExp = this.formBuilder.group({
      id:[''],
      puesto: ['',Validators.required],
      inicio: ['',Validators.required],
      fin: ['',Validators.required],
      nombre_emp_lugar: ['',Validators.required],
      url_logo: ['',Validators.required]
    });
  }

  getAllExperiencia() {
    this.expadminService.getExperiencia()
  .subscribe((response) => {
    this.menu_exp = response;
  });
  }

  agregarBoton() {
    this.formValueExp.reset();
  
    this.showEliminar = false;
    this.showEditar = false;
    this.showAgregar = true;
  
    this.showTituloEliminar = false;
    this.showTituloEditar = false;
    this.showTituloAgregar = true;
  }
  
  agregarExp(): any {
    console.log(this.formValueExp.value);
    this.experienciaObj = this.formValueExp.value;
  
    let cancel = document.getElementById('cancel');
    this.expadminService.saveExperiencia(this.experienciaObj).subscribe((a) =>
    {alert('Se agregó con exito');
      cancel?.click();
      this.formValueExp.reset();
      this.getAllExperiencia();
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
      this.experienciaObj.id = item.id;
      this.idedit = item.id;
      this.formValueExp.controls['puesto'].setValue(item.puesto);
      this.formValueExp.controls['inicio'].setValue(item.inicio);
      this.formValueExp.controls['fin'].setValue(item.fin);
      this.formValueExp.controls['nombre_emp_lugar'].setValue(item.nombre_emp_lugar);
      this.formValueExp.controls['url_logo'].setValue(item.url_logo);
      
  }

  editarExp() {
    
    this.experienciaObj = this.formValueExp.value;
    this.experienciaObj.id = this.idedit;
    this.expadminService.updateExperiencia(this.experienciaObj)
      .subscribe((a) => {


        alert('Se editó con exito');

        let cancel = document.getElementById('cancel');

        cancel?.click();
        this.formValueExp.reset();
        this.getAllExperiencia();
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

  eliminarExp() {
    this.expadminService.deleteExperiencia(this.iddelete).subscribe((a) =>
    {alert('Se eliminó con exito');
      this.getAllExperiencia();
    });

  }

}

