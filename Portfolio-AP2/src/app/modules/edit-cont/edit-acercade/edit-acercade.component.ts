import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/persona';
import { PerAdminService } from '../services/per-admin.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {

  persona: any = [];
  
  personaObj: Persona = new Persona();
  idedit: number = 0;

  public formValuePer!: FormGroup;

  faPen = faPen;

  constructor(private peradminService : PerAdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllPersona();
    this.formValuePer = this.formBuilder.group({
      id:[''],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      fechaNac: ['',Validators.required],
      email: ['',Validators.required],
      ocupacion: ['',Validators.required],
      sobre_mi: ['',Validators.required],
      url_foto: ['',Validators.required]
    });
  }

  getAllPersona() {
    this.peradminService.getPersona()
    .subscribe((response) => {

      this.persona = response;
      
      console.log('--->',response)
    })
  }

  editarBoton(item: any) {

      this.personaObj.id = item.id;
      this.idedit = item.id;

      this.formValuePer.controls['nombre'].setValue(item.nombre);
      this.formValuePer.controls['apellido'].setValue(item.apellido);
      this.formValuePer.controls['fechaNac'].setValue(item.fechaNac);
      this.formValuePer.controls['email'].setValue(item.email);
      this.formValuePer.controls['ocupacion'].setValue(item.ocupacion);
      this.formValuePer.controls['sobre_mi'].setValue(item.sobre_mi);
      this.formValuePer.controls['url_foto'].setValue(item.url_foto);
      console.log(this.formValuePer)

  }

  editarAcercade() {

    this.personaObj = this.formValuePer.value;
    this.personaObj.id = this.idedit;
    this.peradminService.updatePersona(this.personaObj)
      .subscribe((a) => {


        alert('Se editó con exito');

        let cancel = document.getElementById('cancel');

        cancel?.click();
        this.formValuePer.reset();
        this.getAllPersona();
      });
    console.log(this.formValuePer.value)

  }

}
