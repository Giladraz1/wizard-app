import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private formData: any = {};

  constructor() {}

  setFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  getFormData(): any {
    return this.formData;
  }
}
