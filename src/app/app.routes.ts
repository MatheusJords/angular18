import { Routes } from '@angular/router';
import { CalculateIMCComponent } from './views/calculate-imc/calculate-imc.component';
import { RegisterPatientComponent } from './views/register-patient/register-patient.component';

export const routes: Routes = [
    {path:'', component:CalculateIMCComponent},
    {path:'register-patient', component:RegisterPatientComponent}
];
