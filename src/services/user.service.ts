import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User }       from '../interfaces/user';

@Injectable()
export class UserService {

    private usersUrl = 'https://jsonplaceholder.typicode.com/users';
    constructor (private http: Http){}

    getUsers(): Observable<User[]>{
        return new Observable<User[]>( observer => {
            this.http.get(this.usersUrl).subscribe(response => {
                observer.next(response.json() as User[])
            }, error => observer.error(error))
        });
    }
}