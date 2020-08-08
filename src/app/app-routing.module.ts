import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientComponent } from '../app/patient/patient.component';
import { TestListComponent } from '../app/test-list/test-list.component';
import { AddtestComponent} from '../app/addtest/addtest.component';
import { AddpackageComponent} from '../app/addpackage/addpackage.component';
import { LabbookingComponent} from '../app/labbooking/labbooking.component';
import { from } from 'rxjs';

const routes: Routes = [
  // { path : '', component: LoginComponent},
  // { path : 'dashboard', component: DashboardComponent},
  { path: 'addPatient/:id', component: AddPatientComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'Test', component: TestListComponent},
  { path: 'addTest', component: AddtestComponent},
  { path: 'Package', component: AddpackageComponent},
  { path: 'LabBooking', component: LabbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
