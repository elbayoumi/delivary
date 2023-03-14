import { Component, OnInit } from '@angular/core';
import { DelevaryInfo } from '../shared/interfaces/delevary-info';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/services/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  dataUpdate!: FormGroup;

  public boolChangeData: boolean = false;
  message: any = ''
  private id: any = ''
  public delevaryGuyInfo: DelevaryInfo = {
    companyId: 0,
    created_at: '',
    email: '',
    id: 0,
    motorCycleNumber: '',
    name: '',
    nationalId: '',
    password: '',
    phone: '',
    salary: '',
    status: '',
    updated_at: '',
    userName: ''
  }

  // delevaryGuyInfo=JSON.parse({})
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getDataInfo()
    this.dataUpdate = this.fb.group({
      email: ["", Validators.required],
      motorCycleNumber: ["", Validators.required],
      password: ["", Validators.required],
      phone: ["", Validators.required],
      userName: ["", Validators.required],

    })
  }

  getDataInfo(): void {
    this.authService.inf().subscribe((res: any) => {
      this.delevaryGuyInfo = res.data
      this.id = res.data.id
    }, (err) => {
      this.message = err.error.message
      console.log(err.error.message)
    })
  }
  changeData() {
    this.boolChangeData = true
  }

  save(): void {
    const dataUpdateValue = this.dataUpdate.value
    console.log(dataUpdateValue)
    this.authService.deliveryUpdateData(dataUpdateValue.email, dataUpdateValue.motorCycleNumber, dataUpdateValue.password, dataUpdateValue.phone, dataUpdateValue.userName, this.id).subscribe(res => {
      console.log(res)
      this.boolChangeData = false
    }, err => console.log(err))

  }

}
