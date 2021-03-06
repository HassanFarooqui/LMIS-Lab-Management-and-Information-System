import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent } from './login/login.component';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InterpolationtestComponent } from './interpolationtest/interpolationtest.component';
import {HttpClientModule } from '@angular/common/http';
import {DashboardComponent } from './dashboard/dashboard.component';
import {AddPatientComponent } from './add-patient/add-patient.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {PatientComponent } from './patient/patient.component';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxSpinnerModule } from "ngx-spinner";
import {TestListComponent } from './test-list/test-list.component';
import { AddtestComponent } from './addtest/addtest.component';
import { PanellistComponent } from './panellist/panellist.component';
import { AddpanelComponent } from './addpanel/addpanel.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LabbookingComponent } from './labbooking/labbooking.component';
import { PackagelistComponent } from './packagelist/packagelist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterpolationtestComponent,
    DashboardComponent,
    AddPatientComponent,
    PatientComponent,
    TestListComponent,
    AddtestComponent,
    PanellistComponent,
    AddpanelComponent,
    AddpackageComponent,
    LabbookingComponent,
    PackagelistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
