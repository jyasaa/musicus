import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchArtists:Array<string> =["anirudh","thaman","devi"];
  public artistsanirudh:Array<any>=[]
  public artiststhaman:Array<any>=[]
  public artistsdevi:Array<any>=[]
  public searchArtist1='anirudh'
  public searchArtist2='thaman'
  public searchArtist3='devi'
  
  constructor(private ss:SpotifyService) { }

  ngOnInit(): void {
  
    
      this.ss.getAllArtists(this.searchArtist1).subscribe(
        data=>{
          this.artistsanirudh=(data.artists.items);
          console.log(this.artistsanirudh.length)
          this.artistsanirudh.length=1
        }
        
      )

      this.ss.getAllArtists(this.searchArtist2).subscribe(
        data=>{
          this.artiststhaman=(data.artists.items);
          console.log(this.artiststhaman.length)
          this.artiststhaman.length=1
        }
        
      )

      this.ss.getAllArtists(this.searchArtist3).subscribe(
        data=>{
          this.artistsdevi=(data.artists.items);
          console.log(this.artistsdevi.length)
          this.artistsdevi.length=1
        }
        
      )
      
   // console.log(this.artists.length)
  }

  
}
