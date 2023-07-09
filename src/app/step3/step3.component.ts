import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.form = this.formBuilder.group({
      hairColor: ['', Validators.required]
    });
  }

  onNext() {
    if (this.form.valid) {
      // Get the form values
      const formData = this.dataService.getFormData();
      formData.hairColor = this.form.value.hairColor;

      // Save the updated form data to the data service
      this.dataService.setFormData(formData);

      // Navigate to the next step
      this.router.navigate(['/step4']);
    }
  }
}
