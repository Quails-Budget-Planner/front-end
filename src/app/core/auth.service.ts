import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // ...
  public isAuthenticated(): boolean {
    console.log('auth service');
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return Boolean(token);
  }
}
