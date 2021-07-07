import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumId:string;

  album:any;
  tracks:any;

  constructor(private ar:ActivatedRoute, private ss :SpotifyService) { }

  ngOnInit(): void {

    //getting album id from url
     this.albumId = this.ar.snapshot.params.id;

    //get an album
    this.ss.getAlbum(this.albumId).subscribe(
      data=>{
        this.album=data;
        console.log(this.album)
      }
    )
     

    //get all tracks of this album
    this.ss.getTracks(this.albumId).subscribe(
      data=>{
        this.tracks=data.items;
      }
    )

  }

}
