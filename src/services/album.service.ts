import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album }      from '../interfaces/foto';
import { UserAlbum }  from '../interfaces/user-album';

@Injectable()
export class AlbumService {

    constructor (private http: Http){}
  
    getAlbum(albumId: number): Observable<Album[]>{
        const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId;        
        return new Observable<Album[]>( observer => {
            this.http.get(url).subscribe ( response => {
                observer.next(response.json() as Album[])
            })
        });
    }

    getUserAlbums(userId: number): Observable<UserAlbum[]>{
        const url = 'https://jsonplaceholder.typicode.com/albums?userId=' + userId;
        return new Observable<UserAlbum[]>( observer => {
            this.http.get(url).subscribe ( response => {
                observer.next(response.json() as UserAlbum[])
            })
        });
    }
}