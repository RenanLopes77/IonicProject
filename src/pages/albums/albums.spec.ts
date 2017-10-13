import { async, ComponentFixture, TestBed }      from "@angular/core/testing";
import { FormsModule }                           from '@angular/forms';
import { DebugElement }                          from '@angular/core';
import { By }                                    from '@angular/platform-browser';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { AlbumsPage }                            from './albums';
import { Album }                                 from '../../interfaces/foto';
import { User }                                  from '../../interfaces/user';
import { AlbumService }                          from '../../services/album.service';
import { UserService }                           from '../../services/user.service';
import { Observable }                            from 'rxjs/Observable';
import                                           'rxjs/add/observable/of';

describe('AlbumsPage', () => {

    let comp: AlbumsPage;
    let fixture: ComponentFixture<AlbumsPage>;
    let de: DebugElement;
    let userEl: DebugElement;
    let el: HTMLElement;

    let albums: Album[] = [
        {
            albumId: 69,
            id: 96,
            title: "Titulo do album 1",
            url: "http://example1.com",
            thumbnailUrl: "http://example1.com"
        },
        {
            albumId: 34,
            id: 43,
            title: "Titulo do album 2",
            url: "http://example2.com",
            thumbnailUrl: "http://example2.com"
        },
    ];

    let users: User[] = [
        {
            id: 1,
            name: "Eduardo",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: -37.3159,
                    lng: 81.1496
                }
            },
            phone: "17707368031",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
                },
        }
    ];

    class NavParamsMock {
        static returnParam = null;
        public get(key): any {
            if (NavParamsMock.returnParam) {
                return NavParamsMock.returnParam
            }
            return 'default';
        }
        static setParams(value){
            NavParamsMock.returnParam = value;
        }
    }

    class AlbumServiceMock {
        getUserAlbums(): Observable<Album[]> {
            return new Observable<Album[]>(observer => {
                observer.next(albums)
            });
        }
    }

    class UserServiceMock {
        getUsers(): Observable<User[]>{
            return new Observable<User[]>(observer => {
                observer.next(users)
            });
        } 
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AlbumService, useClass: AlbumServiceMock },
                { provide: UserService, useClass:  UserServiceMock},
                { provide: NavParams, useClass: NavParamsMock },
                NavController,
            ],
            declarations: [
                AlbumsPage
            ],
            imports: [
                FormsModule,
                IonicModule.forRoot(AlbumsPage),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlbumsPage);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display AlbumId', () => {
        expect(fixture.debugElement.query(By.css('.texto2')).nativeElement.innerText).toContain('Album 96');
    });

    it('should display UserName', () => {
        expect(fixture.debugElement.query(By.css('.user')).nativeElement.innerText).toContain('Eduardo');
    });
});