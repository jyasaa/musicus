import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistId:string;
  artist :any;
  albums:any;

  constructor(private ar:ActivatedRoute, private ss : SpotifyService) { }

  ngOnInit(): void {

    //getting artist id from url
    this.artistId=this.ar.snapshot.params.id;

    //get aritst info from service
    this.ss.getArtist(this.artistId).subscribe(
      data=>{
        this.artist=data;
      }
    )

    //get albums
    this.ss.getAllAlbums(this.artistId).subscribe(
      data=>{
        this.albums=data.items;
      }
    )


  }

}
