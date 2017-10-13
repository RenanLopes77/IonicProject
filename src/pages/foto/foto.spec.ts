import { FormsModule }                           from '@angular/forms';
import { ComponentFixture, TestBed, async }      from "@angular/core/testing";
import { DebugElement }                          from "@angular/core";
import { By }                                    from "@angular/platform-browser";
import { IonicModule, NavParams, NavController } from 'ionic-angular';
import { Foto }                                  from '../../interfaces/foto';
import { FotoPage }                              from './foto';

describe('FotoPage', () => {

    let comp: FotoPage;
    let fixture: ComponentFixture<FotoPage>;
    let de: DebugElement;
    let el: HTMLElement;

    let foto: Foto = 
    {
        albumId: 69,
        id: 96,
        title: "Titulo da foto",
        url: "http://example.com",
        thumbnailUrl: "http://example.com"
    };
  
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

    beforeEach(() => {
        NavParamsMock.setParams(null);
        TestBed.configureTestingModule({
            providers: [
                NavController,
                {provide: NavParams, useClass: NavParamsMock}
            ],
            declarations: [
                FotoPage
            ],
            imports: [
                FormsModule,
                IonicModule.forRoot(FotoPage),
            ],
        }).compileComponents();
        
        fixture = TestBed.createComponent(FotoPage);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should show a link of a photo', () => {
        comp.foto = foto;
        fixture.detectChanges();       
        expect(fixture.debugElement.query(By.css('ion-title')).nativeElement.innerText).toContain('Imagem 96');
    });
});