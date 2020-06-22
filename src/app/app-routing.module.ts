import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientComponent } from '../app/patient/patient.component';


const routes: Routes = [
  // { path : '', component: LoginComponent},
  // { path : 'dashboard', component: DashboardComponent},
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'patient', component: PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
