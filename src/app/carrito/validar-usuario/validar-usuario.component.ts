import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.component.html',
  styleUrls: ['./validar-usuario.component.css']
})
export class ValidarUsuarioComponent implements OnInit {
  formValidarUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm(){
    this.formValidarUsuario = this.formBuilder.group({
      correo:['',Validators.required]
    });
  } 

  ngOnInit() {
  }

  displayFieldCss(field: string) {
    if (this.formValidarUsuario.get(field).touched){
      return {
        'is-invalid': this.isFieldValid(field),
        'is-valid': !this.isFieldValid(field)
      };      
    }
  }  

  isFieldValid(field: string) {
    return !this.formValidarUsuario.get(field).valid && this.formValidarUsuario.get(field).touched;
  }    

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
    
  continuarComoInvitado(){
    if (this.formValidarUsuario.valid) {
      alert("todo ok");
    }else {
      this.validateAllFormFields(this.formValidarUsuario);
    }
  }

}
