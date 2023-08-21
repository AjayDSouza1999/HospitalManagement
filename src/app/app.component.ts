import { Component, OnInit } from '@angular/core';
//import { DoctorInfoService } from './doctor-info.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  //search variables
  nameKeyword: string = "";
  statusKeyword: string = "";
  specialtyKeyword: string = "";
  //form variables
  docName: string = "";
  specialty: string = "";
  Education: string = "";
  AvailabilityWeekdaysDay: string = "";
  AvailabilityWeekendsDay: string = "";
  AvailabilityWeekdaysTime: string = "";
  AvailabilityWeekendsTime: string = "";
  Status: string = "";
  Email: string = "";
  Gender: string = "";
  PhoneNumber: string = "";
  Address: string = "";
  CreatedBy: string = "";
  ModifiedBy: string = "";
  NumberOfAppointments: Number = 0;
  docId: string = "";
  docArray: any[] = [];
  bulkUpdateArray: any[] = [];
  updatedStatus: any = "";
  //flags
  showForm: boolean = false;
  showEmptyCard: boolean = false;
  isBulkUpdate: boolean = false;
  form: FormGroup;
//constructor(private http: HttpClient, private service: DoctorInfoService,private fb:FormBuilder) {
  constructor(private http: HttpClient,private fb:FormBuilder) {
    this.getAll();
    this.form = this.fb.group({
      docName: ['', Validators.required],});
      

  }
  ngOnInit(): void {
  }
 emailIsValid(): boolean {
    const pattern = /[a-zA-Z0-9._%+-]+@gmail\.com/;
    return pattern.test(this.Email);
  }
  get nameField() {
    return this.form.get('docName');
  }
  //get all records from Database
  getAll() {
//     this.service.get().subscribe((resultData: any) => {
//       this.docArray = resultData.data;
//       if (this.docArray.length == 0) {
//         this.showEmptyCard = true;
//       }
//     })
  }
  //create a new record in the data base
  addInfo() {
    let bodyData = {
      "docName": this.docName,
      "specialty": this.specialty,
      "Education": this.Education,
      "AvailabilityWeekdaysDay": this.AvailabilityWeekdaysDay,
      "AvailabilityWeekdaysTime": this.AvailabilityWeekdaysTime,
      "AvailabilityWeekendsDay": this.AvailabilityWeekendsDay,
      "AvailabilityWeekendsTime": this.AvailabilityWeekendsTime,
      "Status": this.Status,
      "Email": this.Email,
      "Gender": this.Gender,
      "Address": this.Address,
      "PhoneNumber": this.PhoneNumber,
      "CreatedBy": this.CreatedBy,
      "ModifiedBy": this.ModifiedBy,
      "NumberOfAppointments": this.NumberOfAppointments
    };
//If the status is set to removed, the record will be deleted permanently
    if (this.Status == "Removed") {
      alert("This record will not be added since the status of doctor is Removed")
      this.docId = '';
      this.getAll();
      this.clearForm();
    } else {
//       this.service.create(bodyData).subscribe((resultData: any) => {
//         alert("Doctor added successfully")
//         this.getAll();
//         this.clearForm();
//       })
    }
  }
  showAddForm() {
    this.showForm = true;
  }
  clearForm() {
    this.docName = "";
    this.specialty = "";
    this.Education = "";
    this.AvailabilityWeekdaysDay = "";
    this.AvailabilityWeekdaysTime = "";
    this.AvailabilityWeekendsDay = "";
    this.AvailabilityWeekendsTime = "";
    this.Email = "";
    this.Status = "";
    this.Gender = "";
    this.CreatedBy = "";
    this.Address = "";
    this.PhoneNumber = "";
    this.ModifiedBy = "";
    this.NumberOfAppointments = 0;
  }
  clearFilter() {
    this.specialtyKeyword = "";
    this.statusKeyword = "";
    this.nameKeyword = "";
    this.showEmptyCard = false;
    this.getAll();
  }
  //On clicking the delete button -> set status to relieved and update the record
  Delete(data: any) {
    alert("This record will be permanently deleted since the status of the doctor is removed")
    this.docId=data._id;
      this.delete(this.docId);
      this.docId = '';
      this.getAll();
      this.clearForm();
  }
  //On clicking update, populate the values in editor
  setUpdate(data: any) {
    this.docName = data.docName;
    this.specialty = data.specialty;
    this.Education = data.Education;
    this.AvailabilityWeekdaysDay = data.AvailabilityWeekdaysDay;
    this.AvailabilityWeekdaysTime = data.AvailabilityWeekdaysTime;
    this.AvailabilityWeekendsDay = data.AvailabilityWeekendsDay;
    this.AvailabilityWeekendsTime = data.AvailabilityWeekendsTime;
    this.Email = data.Email;
    this.Status = data.Status;
    this.Gender = data.Gender;
    this.CreatedBy = data.CreatedBy;
    this.Address = data.Address;
    this.PhoneNumber = data.PhoneNumber;
    this.ModifiedBy = data.ModifiedBy;
    this.NumberOfAppointments = data.NumberOfAppointments;
    this.docId = data._id;
    this.showForm = true;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
update(docId: any) {
    let body = {
      "docName": this.docName,
      "specialty": this.specialty,
      "Education": this.Education,
      "AvailabilityWeekdaysDay": this.AvailabilityWeekdaysDay,
      "AvailabilityWeekdaysTime": this.AvailabilityWeekdaysTime,
      "AvailabilityWeekendsDay": this.AvailabilityWeekendsDay,
      "AvailabilityWeekendsTime": this.AvailabilityWeekendsTime,
      "Status": this.Status,
      "Email": this.Email,
      "Gender": this.Gender,
      "PhoneNumber": this.PhoneNumber,
      "Address": this.Address,
      "CreatedBy": this.CreatedBy,
      "ModifiedBy": this.ModifiedBy,
      "NumberOfAppointments": this.NumberOfAppointments
    };
//       this.service.update(docId, body).subscribe((resultData: any) => {
//         alert("Doctor Information Updated Successfully")
//         this.docId = '';
//         this.getAll();
//         this.clearForm();
//       })
  }
  //clicking submit on editor form
  submit() {
    if (this.docId == '') {
      this.addInfo();
    } else {
      this.update(this.docId);
    }
    this.showForm = false;
  }
  //clicking cancel on editor form 
  onCancel() {
    this.showForm = false;
    this.clearForm();
  }
  //delete record from database
  delete(id: any) {
//     this.service.delete(id).subscribe((resultData: any) => {
//       console.log(id);
//       console.log(resultData);
//       alert("Doctor record deleted");
//       this.getAll();
//     })
  }
}
