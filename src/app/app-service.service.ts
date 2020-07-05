import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SettingsService } from '../app/Services/settings.service';
import { TestBed } from '@angular/core/testing';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  baseUrl: string;
  private header = new HttpHeaders({ 'content-type': 'application/json', 'Host': 'localhost:65305', 'Content-Length': '512' });
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Host': 'localhost:65305', 'Content-Length': '512'
    })
  };
 



  constructor(private http: HttpClient, private setting: SettingsService) {
    this.baseUrl = this.setting.getSettings.baseUrl;
  }

  login(userName: any, Password: any): any {
    let url = this.baseUrl + 'Home/Login?Email=' + userName + '&Password=' + Password;
    return this.http.get(url);
  }

  listOfPatient(): any {
    let url = this.baseUrl + 'Patient/GetPatientList';
    return this.http.get(url);
  }

  listOfReferralType(): any {
    let url = this.baseUrl + 'Home/GetPatientreferrelTypeId';
    return this.http.get(url);
  }

  listOfPartners(): any {
    let url = this.baseUrl + 'Home/GetPartnerName';
    return this.http.get(url);
  }

  listOfPanels(): any {
    let url = this.baseUrl + 'Panel/GetPanelName';
    return this.http.get(url);
  }

  listOfGender(): any {
    let url = this.baseUrl + 'Home/GetGenderName';
    return this.http.get(url);
  }

  addOrEditPatient(Id: any, firstName: any, lastName: any, guardian: any, age: any, gender: any, mobileNumber: any, cnic: any, address: any, diabetes: any, tB: any, hepatitis: any, fever: any, other: any, departmentName: any, empRefNo: any, referredTypeId: any, partnerName: any, panelName: any, status: any): any {
    let url: string;
    if (Id == 0)
      url = this.baseUrl + 'Patient/AddPatient';
    else
      url = this.baseUrl + 'Patient/EditPatientRec';

    let payload = new HttpParams()
      .set('Id', Id)
      .set('FirstName', firstName)
      .set('LastName', lastName)
      .set('GuardianName', guardian)
      .set('Age', age)
      .set('MobileNo', mobileNumber)
      .set('Address', address)
      .set('CNIC', cnic)
      .set('IsActive', status)
      .set('ReferredTypeId', referredTypeId)
      .set('ReferringPartnerID', partnerName)
      .set('PanelId', panelName)
      .set('GenderID', gender)
      .set('DepartmentName', departmentName)
      .set('EmpReferrenceNo', empRefNo)
      .set('Diabetes', diabetes)
      .set('TB', tB)
      .set('Hepatitis', hepatitis)
      .set('Fever', fever)
      .set('Other', other)

    return this.http.post(url, payload);
  }

  getPatientRecbyId(PatientId: any): any {
    let url = this.baseUrl + 'Patient/GetPatientRecordByID?ID=' + PatientId;
    return this.http.get(url);

  }

  listOfTest(): any {
    let url = this.baseUrl + 'Test/GetTestList'
    return this.http.get(url);
  }

  addOrEditTest(TestId: any, TestName: any, TestCharges: any, TestDiscPerc: any, TestDiscAmount: any, TestNetCharges: any, status: any): any {
    let url: string;
    if (TestId == 0)
      url = this.baseUrl + 'Test/AddTest';
    else
      url = this.baseUrl + 'Test/EditPatientRec';

    let payload = new HttpParams()
      .set('TestId', TestId)
      .set('TestName', TestName)
      .set('TestCharges', TestCharges)
      .set('TestDiscPerc', TestDiscPerc)
      .set('TestDiscAmount', TestDiscAmount)
      .set('NetCharges', TestNetCharges)
      .set('IsActive', status)
    return this.http.post(url, payload);
  }

  addOrEditPackage(PackageMasterID: any, PackageName: any, Incentive: any, Active: any, IsPartial: any, CreditLimit: any, Totaldiscount: any, GrandTotal: any, TestTableDataSource: any): any {
    let url: string;
    url = this.baseUrl + 'Test/PackgeAddKardo';
    let obj: any = {
      PackageMasterId: PackageMasterID,
      PackageName: PackageName,
      IsIncentiveAllowed: Incentive,
      IsActive: Active,
      IsPartialPackageBookingAllowed: IsPartial,
      CreaditLimit: CreditLimit,
      TotalDiscount: Totaldiscount,
      GrandTotal: GrandTotal
    }
    // let PackageObj = new HttpParams()
    // .set('PackageMasterId', PackageMasterID)
    // .set('PackageName', PackageName)
    // .set('IsIncentiveAllowed', Incentive)
    // .set('IsActive', Active)
    // .set('IsPartialPackageBookingAllowed', IsPartial)
    // .set('CreaditLimit', CreditLimit)
    // .set('TotalDiscount',Totaldiscount)
    // .set('GrandTotal', GrandTotal)

    var data = {
      pkg: obj,
      ListOfTestPackage: TestTableDataSource,
      PackageName: "Test"
    }
    return this.http.post(url, data, this.httpOptions)
  }


  addOrEditPackagedetail(TestTableDataSource: any): any {
    let url = this.baseUrl + 'Test/AddPackageDetail';
    var payload: any = [];
    // TestTableDataSource.forEach(element => {
    //   let PackageDetailObj = new HttpParams()
    //     .set('PackageDetailID', element.PackageDetailID)
    //     .set('TestRegID', element.TestId)
    //     .set('TestCharges', element.TestCharges)
    //     .set('DiscountPerc', element.TestDiscPerc)
    //     .set('DiscountAmount', element.TestDiscAmount)
    //     .set('NetCharges', element.NetCharges)
    //   payload.push(PackageDetailObj);  

    // });
    let data = {
      packageDetail: TestTableDataSource,
      PackageMasterID: '1'
    }
    // let New = new HttpParams()
    // .set('packageDetail',TestTableDataSource )
    // .set('PackageMasterID','1')
    return this.http.post(url, data, { headers: this.header }).toPromise();

  }
}


