import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SettingsService } from '../app/Services/settings.service';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  baseUrl: string;
  constructor(private http: HttpClient, private setting: SettingsService) {
    this.baseUrl = this.setting.getSettings.baseUrl;
  }

  login(userName: any, Password: any): any {
    let url = this.baseUrl + 'Home/Login?Email=' + userName + '&Password=' + Password;
    return this.http.get(url);
  }

  listOfPatient() : any{
    let url = this.baseUrl+'Home/GetPatientList';
    return this.http.get(url);
  }

  listOfReferralType(): any{
    let url = this.baseUrl + 'Home/GetPatientreferrelTypeId';
    return this.http.get(url);
  }

  listOfPartners(): any{
    let url = this.baseUrl + 'Home/GetPartnerName';
    return this.http.get(url);
  }

  listOfPanels(): any{
    let url = this.baseUrl + 'Panel/GetPanelName';
    return this.http.get(url);
  }

  listOfGender(): any{
    let url = this.baseUrl + 'Home/GetGenderName';
    return this.http.get(url);
  }

  addPatient(firstName : any, lastName : any, guardian : any, age : any, gender : any, mobileNumber : any, cnic : any, address: any, diabetes: any, tB:any, hepatitis: any, fever: any, ohter: any, departmentName: any, empRefNo: any, referredTypeId : any, partnerName: any, panelName: any, status: any ){
    let url = this.baseUrl+'Patient/AddPatient';
    let pt = {
      FirstName: firstName,
      LastName: lastName,
      Age: age,
      MobileNo: mobileNumber,
      Address: address,
      CNIC: cnic,
      IsActive: status,
      ReferredTypeId: referredTypeId,
      ReferringPartnerID: partnerName,
      GenderID: gender,
      DepartmentName: departmentName,
      EmpReferrenceNo: empRefNo

    };
    let payload = new HttpParams()
    .set('FirstName', firstName)
    .set('FirstName', lastName)
    .set('Age', age)
    .set('MobileNo', mobileNumber)
    .set('Address', address)
    .set('CNIC', cnic)
    .set('IsActive', status)
    .set('ReferredTypeId', referredTypeId)
    .set('ReferringPartnerID', partnerName)
    .set('GenderID', gender)
    .set('DepartmentName', departmentName)
    .set('EmpReferrenceNo', empRefNo)
    // .set('GenderID', gender)

  return this.http.post(url, payload);
    
  return this.http.post(url,pt)

  }


}


