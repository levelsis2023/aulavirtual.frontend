import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    private router: Router
  ) { 
    
  }

  getUserData() {
    if (localStorage.getItem('user')) {
      const userData = localStorage.getItem('user');
      if (userData) {
        return JSON.parse(userData);
      }
      return null;
    }
    return null;
  }
  checkIsUserLogged() {
    if (!localStorage.getItem('user')) {
      return false;
    }
    return true;
  }
  getDominioId() {
    if (localStorage.getItem('user')) {
     const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.domain_id;
      }
      return 1
    }
    return 1
  }
}
