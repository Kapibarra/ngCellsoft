import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
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
  policyAgreement: any;
  message: any;
  service: any;
  successMessage: string | undefined;
  errorMessage: string | undefined;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

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
      policyAgreement: ['', Validators.requiredTrue],
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
      const formData = new FormData();
      formData.append('name', this.contactForm?.get('name')?.value);
      formData.append('email', this.contactForm?.get('email')?.value);
      formData.append('message', this.contactForm?.get('message')?.value);
      formData.append('service', this.contactForm?.get('service')?.value);
      formData.append('city', this.contactForm?.get('city')?.value);
      formData.append('inn', this.contactForm?.get('inn')?.value);
      formData.append('phone', this.contactForm?.get('phone')?.value);
      this.http.post('assets/handler.php', formData).subscribe(
        (response) => {
          console.log('Форма успешно отправлена!');
          console.log(response);
          this.contactForm.reset();
          // здесь можно добавить логику для вывода сообщения об успешной отправке формы
          this.successMessage = 'Сообщение отправлено!';
        },
        (error) => {
          console.error('Упс... Что то пошло не так...');
          console.error(error);
          this.errorMessage = 'Упс... Что то пошло не так...';
          // здесь можно добавить логику для вывода сообщения об ошибке при отправке формы
        }
      );
      console.log('Form submitted successfully!');
      console.log(this.contactForm.value);
    }
  }
}
