import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// Shared
import { INFINITE_SCROLL } from 'src/app/shared/definitions/units';

// Definitions
import { User } from './models/user';
import { UserDetails } from './models/userDetails';

const API_URL_DETAIL = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers({
    page = INFINITE_SCROLL.page,
    limit = INFINITE_SCROLL.limit,
  }): Observable<User[]> {
    // TODO: get the endpoint for page and limit
    // return this.http.get<User[]>(
    //   `https://jsonplaceholder.typicode.com/users=${page}&per_page=${limit}`
    // );
    return this.http.get<User[]>(API_URL_DETAIL);
  }

  getUserById(id: number): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(`${API_URL_DETAIL}${id}`);
  }
}
