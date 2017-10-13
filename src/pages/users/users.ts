import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService }              from '../../services/user.service';
import { User }                     from '../../interfaces/user';
import { AlbumsPage }               from '../albums/albums';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage{

    users: User[];
    user: User;
    showPhone: boolean = false;
    showEmail: boolean = false;
    showSite: boolean = false;
    showAdress: boolean = false;
    showGeoLocation: boolean = false;
    showCompany: boolean = false;
    click: boolean = false;
    b: boolean[];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public userService: UserService
    ) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers()
            .subscribe(users => this.users = users);
    }

    clickUser(): void {
        if (this.showPhone && this.showEmail &&
            this.showSite && this.showAdress &&
            this.showGeoLocation && this.showCompany
        ) {
            this.showPhone = !this.showPhone;
            this.showEmail = !this.showEmail;
            this.showSite = !this.showSite;
            this.showAdress = !this.showAdress;
            this.showGeoLocation = !this.showGeoLocation;
            this.showCompany = !this.showCompany;
            this.click = !this.click;
        } else {
            this.showPhone = true;
            this.showEmail = true;
            this.showSite = true;
            this.showAdress = true;
            this.showGeoLocation = true;
            this.showCompany = true;
            this.click = true;
        } 
    }

    loadAlbums(userId: number): void {
        this.clickUser();
        this.navCtrl.push(AlbumsPage, {
            userId: userId
        });
    }
}