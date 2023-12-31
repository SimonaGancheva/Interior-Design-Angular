import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  appUrl = environment.appUrl;
  USER_KEY = '[user]';
  // currId = localStorage.getItem(this.USER_KEY);
  userId: string | undefined;

  subscription: Subscription;

  constructor(private http: HttpClient, private cookie: CookieService) {
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || '';
    //   this.user = JSON.parse(lsUser);
    // } catch (error) {
    //   this.user = undefined;
    // }

    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  public get isLogged(): boolean {
    const lsUser = localStorage.getItem(this.USER_KEY);
    if (lsUser == undefined) {
      return false;
    } else {
      return true;
    }

    // if (this.user == undefined) {
    //   return false;
    // } else {
    //   return true;
    // }
    // return !!this.user;
  }

  register(
    email: string,
    username: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<User>(`${this.appUrl}api/register`, {
        email,
        username,
        password,
        rePassword,
      })
      .pipe(
        tap((user: User | undefined) => {
          this.user$$.next(user);
          this.userId = user?._id;
          this.cookie.set('userId', `${this.userId}`);
          this.cookie.set('username', `${user?.username}`);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`${this.appUrl}api/login`, { email, password })
      .pipe(
        tap((user: User | undefined) => {
          this.user$$.next(user);
          this.userId = user?._id;
          this.cookie.set('userId', `${this.userId}`);
          this.cookie.set('username', `${user?.username}`);
        })
      );
  }

  logout() {
    // this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
    this.cookie.delete('userId');
    this.cookie.delete('username');

    return this.http
      .post<User>(`${this.appUrl}api/logout`, {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

 get getToken(): boolean {
  return !!this.cookie.get('auth-cookie');
 }
}
