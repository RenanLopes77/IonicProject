import { Component, ViewChild }             from '@angular/core';
import { NavController, NavParams, Select } from 'ionic-angular';
import { AlbumService }                     from '../../services/album.service';
import { UserService }                      from '../../services/user.service';
import { AlbumPage }                        from '../album/album';
import { Album }                            from '../../interfaces/foto';
import { UserAlbum }                        from '../../interfaces/user-album';
import { User }                             from '../../interfaces/user';

@Component({
    selector: 'albums-page',
    templateUrl: './albums.html'
})
export class AlbumsPage {

    albums: Album[];
    users: User[];
    userAlbums: UserAlbum[];
    albumId: number = 0;
    userId: number = 0;
    showSelect: boolean = true;
 
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        private _albumService: AlbumService,
        private _userService: UserService
    ) { }

    ngOnInit(): void {
        this.getUsers();
        this.userId = this.navParams.get('userId');

        if (this.userId == undefined){
            this.userId = 1;
        }
        this.getUserAlbums(this.userId);
        
    }

    getUsers(): void {
        this._userService.getUsers().subscribe(users => {
            this.users = users;
        });
    }

    getUserAlbums(userId: number): void {
        this._albumService.getUserAlbums(userId)
            .subscribe(userAlbums => this.userAlbums = userAlbums);
    }

    loadAlbum(albumId: number): void {
        this.navCtrl.push(AlbumPage, {
            albumId: albumId 
        });
    }
}