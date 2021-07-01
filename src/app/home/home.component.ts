import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchArtist : string;
  public artists

  constructor(private ss: SpotifyService) { }

  ngOnInit(): void {
    // this.ss.getAuth().subscribe(
    //   data=>{
    //     console.log(data)
    //   }
    // )
  }

  searchArtists(){
    this.ss.getAllArtists(this.searchArtist).subscribe(
      data=>{
        this.artists=data.artists.items;
         console.log(this.artists)
      }
    )
  }

  clearInput(){
    this.searchArtist=' '
  }

}
