import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
}                                 from '@angular/http';
import { MockBackend }            from '@angular/http/testing';
import { UserService }            from './user.service';

describe('UserService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [ 
                { provide: URL, useValue: 'http://example.com' },
                UserService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    describe('getUsers()', () => {

        it('should return an Observable<Users[]>', () => {
            inject([UserService, XHRBackend], (userService: UserService, mockBackend: MockBackend) => {

                const mockResponse = {
                    data: [
                        { 
                            id: 1,
                            name: "Leanne Graham",
                            username: "Bret",
                            email: "Sincere@april.biz",
                            address: {
                                street: "Kulas Light",
                                suite: "Apt. 556",
                                city: "Gwenborough",
                                zipcode: 92998-3874,
                                geo: {
                                    lat: -37.3159,
                                    lng: 81.1496 
                                },
                            }
                        },
                    ]
                };

                mockBackend.connections.subscribe((connection: any) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                userService.getUsers().subscribe((users) => {
                    expect(users.length).toBe(1);
                    expect(users[0].name).toEqual('Leanne Graham');
                });
            });
        });
    });
});