import { CanActivateFn, CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const adminAsFunctionGuard: CanMatchFn = (route, state) => {
  const userService = inject(UserService);
  return userService.isAdmin();
};
