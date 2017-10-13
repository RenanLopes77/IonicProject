import { Component }                from '@angular/core';
import { NavController }            from 'ionic-angular';
import { AboutPage }                from '../about/about';
import { HomePage }                 from '../home/home';
import { UsersPage }                from '../users/users';
import { AlbumsPage }               from '../albums/albums';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = AlbumsPage;
    tab4Root = UsersPage;   

    constructor(private nav: NavController) {}

    emptyStack() {
        this.nav.setRoot(UsersPage);
    }
}
