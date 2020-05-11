// Angular Modules
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedInService {
  isLoginSubject = new BehaviorSubject<Boolean>(this.hasToken());
  
  isLoggedIn() {
    return this.isLoginSubject.asObservable();
  }

  constructor() {
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.isLoginSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  hasToken() {
    return Boolean(localStorage.getItem('token'));
  }

}