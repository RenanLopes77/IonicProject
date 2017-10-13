import { async, ComponentFixture, TestBed }      from '@angular/core/testing';
import { FormsModule }                           from '@angular/forms';
import { DebugElement }                          from '@angular/core';
import { By }                                    from '@angular/platform-browser';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { AlbumPage }                             from './album';
import { Foto }                                  from '../../interfaces/foto';
import { AlbumService }                          from '../../services/album.service';
import { Observable }                            from 'rxjs/Observable';
import                                           'rxjs/add/observable/of';

describe('AlbumPage', () => {

    let comp: AlbumPage;
    let fixture: ComponentFixture<AlbumPage>;
    let de: DebugElement;
    let el: HTMLElement;

    let album: Foto[] = [ 
        {
            albumId: 69,
            id: 96,
            title: "Titulo do album 1",
            url: "http://example1.com",
            thumbnailUrl: "http://example1.com"
        }
    ];

    class NavParamsMock {
        static returnParam = null;
        public get(key): any {
            if (NavParamsMock.returnParam) {
                return NavParamsMock.returnParam;
            }
            return 'default';
        }
        static setParams(value){
            NavParamsMock.returnParam = value;
        }
    }

    class AlbumServiceMock {
        getAlbum(): Observable<Foto[]>{
            return new Observable<Foto[]>( observer => {
                observer.next(album);
            });
        }
    }
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AlbumService, useClass: AlbumServiceMock },
                { provide: NavParams,    useClass: NavParamsMock },
                NavController,
            ],
            declarations: [
                AlbumPage
            ],
            imports: [
                FormsModule,
                IonicModule.forRoot(AlbumPage),
            ],
        }).compileComponents();
    })); 

    beforeEach(async(() => {
        fixture = TestBed.createComponent(AlbumPage);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should display album id and title', () => {
        expect(fixture.debugElement.query(By.css('ion-col')).nativeElement.innerText).toContain('96');
        expect(fixture.debugElement.query(By.css('ion-col')).nativeElement.innerText).toContain('Titulo do album 1');
    });
});