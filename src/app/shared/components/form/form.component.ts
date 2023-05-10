import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const errorAnimation = trigger('errorAnimation', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void <=> *', animate('300ms ease-in-out')),
]);
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  name: any;
  email: any;
  phone: any;
  inn: any;
  city: any;
  message: any;
  service: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.customEmailValidator],
      ],
      phone: ['', [Validators.required]],
      inn: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$|^[0-9]{12}$')],
      ],
      city: ['', Validators.required],
      message: [''],
      service: [''],
    });
  }

  customEmailValidator(control: { value: string | string[] }) {
    if (control && control.value && !control.value.includes('@')) {
      return { invalidEmail: true };
    }
    return null;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted successfully!');
      console.log(this.contactForm.value);
    }
  }
}
