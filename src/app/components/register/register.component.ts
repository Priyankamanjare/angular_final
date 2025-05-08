import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  // ✅ Corrected: comma added
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  address = '';
  contact = '';

  constructor(private router: Router) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      contact: this.contact
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');
    this.router.navigate(['/login']);
  }
}
