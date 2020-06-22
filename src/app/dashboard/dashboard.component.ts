import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appService: AppServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  PatientInfo() {
            this.router.navigate(['add-patient']);
  }
}
