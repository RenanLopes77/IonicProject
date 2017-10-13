import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Foto }      from '../../interfaces/foto';

@Component({
    selector: 'foto-page',
    templateUrl: 'foto.html',
})
export class FotoPage {
    foto: Foto;

    constructor(
        public navParams: NavParams
    ) { }

    ngOnInit(): void{
        this.foto = this.navParams.get('foto');
    }
}