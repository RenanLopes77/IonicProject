import { ComponentFixture, TestBed, async }      from "@angular/core/testing";
import { DebugElement }                          from '@angular/core';
import { FormsModule }                           from '@angular/forms';
import { By }                                    from '@angular/platform-browser';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { UsersPage }                             from './users';
import { User }                                  from '../../interfaces/user';
import { UserService }                           from "../../services/user.service";
import { Observable }                            from "rxjs/Observable";
import                                           "rxjs/add/observable/of";

describe('UserPage', () => {

    let comp: UsersPage;
    let fixture: ComponentFixture<UsersPage>;
    let de: DebugElement;
    let el: HTMLElement;

    let users: User[] = [
        {
        id: 1,
        name: "Japa",
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
        
    class UserServiceMock {
        getUsers(): Observable<User[]> {
            return new Observable<User[]>( observer => {
                observer.next(users);
            });
        }
    }

    beforeEach(() => {
        NavParamsMock.setParams(null);
        TestBed.configureTestingModule({
            providers: [
                NavController,
                {provide: NavParams, useClass: NavParamsMock},
                { provide: UserService, useClass: UserServiceMock }
            ],
            declarations: [
                UsersPage
            ],
            imports: [
                FormsModule,
                IonicModule.forRoot(UsersPage),
            ]
        }).compileComponents();
    });

    beforeEach( async(() => {
        fixture = TestBed.createComponent(UsersPage);
        comp = fixture.componentInstance;  
        fixture.detectChanges(); 
    }));

    it('should display userName', () => {
        expect(document.getElementsByClassName('user')[0].innerHTML).toContain('Japa');
    });
});