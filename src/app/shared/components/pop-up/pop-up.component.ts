import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('popupAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PopUpComponent implements OnInit {
  contactForm!: FormGroup;
  name: any;
  email: any;
  inn: any;
  city: any;
  phone: any;
  isActive: boolean = false;
  successMessage: string | undefined;
  errorMessage: string | undefined;
  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  get isActive$() {
    return this.dialogService.isActive;
  }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.customEmailValidator],
      ],
      phone: ['', [Validators.required]],
    });
  }

  closeDialog() {
    this.dialogService.closeDialog();
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
