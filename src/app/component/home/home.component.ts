import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../service/album.service';
import {Album} from '../../model/album'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums : Album[];
  data : string;
  constructor(private albumService: AlbumService) {}
  ngOnInit() {
    this.getAllAlbums();
  }
  getAllAlbums(): void { 
    this.albumService.getAllAlbums().subscribe( albums => this.albums = albums);
  }
}
