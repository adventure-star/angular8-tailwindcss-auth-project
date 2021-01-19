import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {

    let token: string = localStorage.getItem("token");

    console.log(url)

    if (token != null && !this.tokenExpired(token)) {
      if (url === "/login") {
        this.router.navigate(['/home']);
      }
      else
        return true;
    } else {
      return this.router.parseUrl('/login');
    }

  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}
