import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { DataService } from '../data.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component {
  formGroup: FormGroup;
  formData: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dataService: DataService
  ) {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', Validators.required],
      birthday: ['', Validators.required],
      hairColor: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.setFormData();
  }

  setFormData() {
    this.formData = this.dataService.getFormData();
    if (!this.formData) {
      // Handle the case where formData is undefined or null
      // For example, you can redirect to a previous step or display an error message
    } else {
      this.formGroup.setValue(this.formData);
    }
  }

  getFormDataValue(controlName: string) {
    return this.formGroup.get(controlName)?.value;
  }

  onNext() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      this.dataService.setFormData(formData);
      this.saveDataAsJson(formData);
      this.router.navigate(['/step1']); // Replace 'step1' with the desired destination after saving the form data
    }
  }

  saveDataAsJson(data: any) {
    this.http.post(`${environment.apiBaseUrl}/senddata`, data)
      .subscribe(
        () => {
          console.log('Data saved successfully.');
        },
        (error) => {
          console.error('Error occurred while saving data:', error);
        }
      );
  }
}
