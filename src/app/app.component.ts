import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WelcomeButtonComponent } from './components/welcome-button/welcome-button.component';
import { Imc } from './interfaces/imc';
import { CalculateImcButtonComponent } from './components/calculate-imc-button/calculate-imc-button.component';
import { RegisterPatientButtonComponent } from './components/register-patient-button/register-patient-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeButtonComponent,
    CalculateImcButtonComponent,
    RegisterPatientButtonComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //@Input() imc!:Imc;

  imc:Imc = {
    height:1.72,
    weight:71
  }

  title = 'jordanshospital';
  usuario = 'Matheus';
}
