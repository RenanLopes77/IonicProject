import { NgModule, ErrorHandler}                    from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';
import { HttpModule }                               from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen }                             from '@ionic-native/splash-screen';
import { StatusBar }                                from '@ionic-native/status-bar';
import { MyApp }                                    from './app.component';

import { AboutPage }                                from '../pages/about/about';
import { AlbumPage }                                from '../pages/album/album';
import { HomePage }                                 from '../pages/home/home';
import { TabsPage }                                 from '../pages/tabs/tabs';
import { UsersPage }                                from '../pages/users/users';
import { FotoPage }                                 from '../pages/foto/foto';
import { AlbumsPage }                               from '../pages/albums/albums';
import { AlbumService }                             from '../services/album.service';
import { UserService }                              from '../services/user.service';

AlbumService

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        AlbumPage,
        HomePage,
        TabsPage,
        UsersPage,
        AlbumsPage,
        FotoPage,
        
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        HomePage,
        TabsPage,
        UsersPage,
        AlbumsPage,
        AlbumPage,
        FotoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AlbumService, 
        UserService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    ]
})
export class AppModule { }
