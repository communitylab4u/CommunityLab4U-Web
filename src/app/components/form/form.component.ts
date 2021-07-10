import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  contacto: FormGroup;
  submitted = false;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contacto = this.FormBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  get f() { return this.contacto.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.contacto.invalid) {
      return
    }
    alert('Mensaje enviado!')
    this.contacto.reset()
  }

}

