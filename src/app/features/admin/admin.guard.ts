import { CanMatch, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanMatch{

  constructor(private userService:UserService) {
  }

  canMatch( route: Route, segments: UrlSegment[] ): Observable<boolean>|boolean {
    return this.userService.isAdmin();
  }
}
