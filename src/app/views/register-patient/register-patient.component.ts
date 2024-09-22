import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../../interfaces/patient';

@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-patient.component.html',
  styleUrl: './register-patient.component.css'
})
export class RegisterPatientComponent {
  patient : Patient = new Patient();
  patientForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  })

  save(){
    if(this.patientForm.controls["age"].value !== null){
      this.patient.age = Number(this.patientForm.controls["age"].value);
    }
    if(this.patientForm.controls["name"].value !== null){
      this.patient.name = this.patientForm.controls["name"].value;
    }
  }
}
