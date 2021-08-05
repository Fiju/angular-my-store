import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = new User();

  constructor() {}

  save(user: User) {
    this.user = user;
  }

  get(): User {
    return this.user;
  }

  clear(): void {
    this.user = new User();
  }
}
