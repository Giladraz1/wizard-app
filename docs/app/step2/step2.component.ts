import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      birthday: ['', Validators.required]
    });
  }

  onNext() {
    if (this.form.valid) {
      // Get the form values
      const formData = this.dataService.getFormData();
      formData.birthday = this.form.value.birthday;

      // Save the updated form data to the data service
      this.dataService.setFormData(formData);

      // Navigate to the next step
      this.router.navigate(['/step3']);
    }
  }
}
