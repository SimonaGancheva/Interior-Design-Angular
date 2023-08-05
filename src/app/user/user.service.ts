import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private user$$ = new BehaviorSubject<User | undefined>(undefined);
  // public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = 'userId';

  public get isLogged(): boolean {
    return !!this.user;
  }

  // subscription: Subscription;

  constructor(private http: HttpClient, private cookie: CookieService) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }

    // this.subscription = this.user$.subscribe((user) => {
    //   this.user = user;
    // });
  }

  register(
    email: string,
    username: string,
    password: string,
    rePassword: string
  ) {
    const { appUrl } = environment;

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

    return this.http
      .post<User>(`${appUrl}api/register`, {
        email,
        username,
        password,
        rePassword,
      })
      .subscribe(
        (response) => {
          console.log(response);
          this.login(email, password);
        },
        (error) => console.log(error.message)
      );
    //   .pipe(tap((user: User | undefined) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    const { appUrl } = environment;
    this.user = {
      email,
      password,
      username: '',
      _id: '',
    };

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

    return this.http
      .post<User>(`${appUrl}api/login`, { email, password })
      .subscribe(
        (response) => {
          localStorage.setItem(this.USER_KEY, JSON.stringify(response._id));
        },
        (error) => {
          console.log(error.message);
        }
      );
    //   .pipe(tap((user: User | undefined) => this.user$$.next(user)));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);

    return this.http.post<User>('/api/logout', {});
    // .pipe(tap(() => this.user$$.next(undefined)));
  }
}
