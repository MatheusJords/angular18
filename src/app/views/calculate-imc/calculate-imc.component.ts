import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-imc',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './calculate-imc.component.html',
  styleUrl: './calculate-imc.component.css'
})
export class CalculateIMCComponent implements OnInit{
  imcForm = new FormGroup({
    height: new FormControl(''),
    weight: new FormControl('')
  })
  
  imcResult = 0;
  
  ngOnInit(){
    this.imcResult = 0;
  }

  calculateIMC(){
    this.imcResult = Number(this.imcForm.controls["weight"].value) / (Number(this.imcForm.controls["height"].value)^2)
  }
}
