import { TestBed, async, inject } from '@angular/core/testing';
import { 
    HttpModule,
    Http,
    XHRBackend,
    Response,
    ResponseOptions
}                                  from '@angular/http';
import { MockBackend }             from '@angular/http/testing';
import { AlbumService }            from './album.service';
import { UserAlbum }               from '../interfaces/user-album';

describe('AlbumService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: URL, useValue:'http://example.com' },
                AlbumService,
                { provide: XHRBackend, useClass: MockBackend }
            ],
        });
    });

    describe('getAlbum()', () => {
        it('should return an Observable<Album[]>', () => {
            inject([AlbumService, XHRBackend], (albumService: AlbumService, mockBackend: MockBackend) => {

                const mockResponse = {
                    albumId: 34,
                    id: 43,
                    title: "Titulo do album 2",
                    url: "http://example2.com",
                    thumbnailUrl: "http://example2.com" 
                };

                mockBackend.connections.subscribe((connection: any) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                albumService.getAlbum(mockResponse.albumId).subscribe((album) => {
                    expect(album[0].albumId).toBe(34);
                });
            });
        });

        it('should return an Observable<UserAlbum[]>', () => {
            inject([AlbumService, XHRBackend], (albumService: AlbumService, mockBackend) => {
                
                const mockResponse = {
                    userId: 15,
                    albumId: 2,
                    albumTitle: 'Carolina'
                };

                mockBackend.connections.subscribe((connection: any) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                albumService.getUserAlbums(mockResponse.albumId).subscribe((userAlbum) => {
                    expect(userAlbum[0].albumId).toBe(2);
                });
            });
        });

    });
});