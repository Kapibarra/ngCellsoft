import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerspage',
  templateUrl: './partnerspage.component.html',
  styleUrls: ['./partnerspage.component.scss']
})
export class PartnerspageComponent implements OnInit {
  username: string = '';
  password: string = '';
  showErrorMessage = false;
  errorMessage = '';
  ngOnInit(): void { }
  onSubmit(form: { resetForm: () => void; }) {
    if (this.username === 'admin' && this.password === 'password') {
      // successful login logic
      console.log('Logged in successfully!');
      form.resetForm(); // clear the form
    } else {
      form.resetForm();
      // incorrect login logic
      this.showErrorMessage = true;
      this.errorMessage = 'Неверный логин или пароль.';
    }
  }
}
