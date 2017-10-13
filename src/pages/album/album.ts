import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlbumService }             from '../../services/album.service';
import { FotoPage }                 from '../foto/foto';
import { Foto }                     from '../../interfaces/foto';

@Component ({
    selector: 'album-page',
    templateUrl: './album.html'
})
export class AlbumPage {
    
    album: Foto[];
    foto: Foto;
    albumId: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _albumService: AlbumService
    ) { }

    ngOnInit(): void {
        this.getAlbum(this.navParams.get('albumId'));        
    }

    getAlbum(albumId: number): void {
        this.albumId = albumId;
        this._albumService.getAlbum(albumId)
            .subscribe(album => this.album = album);
    }

    loadFoto(foto: Foto): void {
        this.foto = foto;
        this.navCtrl.push(FotoPage, {
            foto: this.foto
        });
    }
}