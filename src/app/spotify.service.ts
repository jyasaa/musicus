import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private authKey='Bearer BQA6glGmvNrSfvTxz5fpDnjy4df0dHVYMWNd9jQDwuh7SEIudYT1_vQLydrKouFi7KSCZ8hyUSUSERgXnvIys_AuEIJ45GGvqodIrrfDUoAIV3rvkiQ8ycMHfj2LBdXuZNMaKtzh1kNE1sYYr2z-sMhutB6vHQU';
  
  private clientId='f905b5083d3d45d1ba85be30450610e9';

  private clientSecret='a8d1cdf7d31348ceb8950f463ffb5187';
 
  constructor(private ht:HttpClient) {  }



  private httpOptions={
    headers:new HttpHeaders({

      'Accept':'application.json',
      'Content-Type': 'application/json',
      'Authorization':this.authKey
    })
  }

  // getAuth(){
  //   let authUrl=`https://accounts.spotify.com/authorize?response_type=code&client_id=77e602fc63fa4b96acff255ed33428d3&redirect_uri=http%3A%2F%2Flocalhost&scope=user-follow-modify&state=e21392da45dbf4&code_challenge=KADwyz1X~HIdcAG20lnXitK6k51xBP4pEMEZHmCneHD1JhrcHjE1P3yU_NjhBz4TdhV6acGo16PCd10xLwMJJ4uCutQZHw&code_challenge_method=S256`;

  //   return this.ht.get<any>(authUrl,)
  // }
 
  
  getAllArtists(searchQuery):Observable<any>{
  //   const headers = {
  //     Authorization: 'Bearer ' + authToken,
  // };
    let url= `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=5`

    return this.ht.get<any>(url,this.httpOptions);

  }

  getArtist(artistId):Observable<any>{

    let artistURL = `https://api.spotify.com/v1/artists/${artistId}`;

    return this.ht.get<any>(artistURL,this.httpOptions);

  }

  //getting albums of artist
  getAllAlbums(artistId):Observable<any>{

    let albumURL= `https://api.spotify.com/v1/artists/${artistId}/albums`

    return this.ht.get<any>(albumURL,this.httpOptions)
  }

  //get album
  getAlbum(albumId):Observable<any>{
    let albmuURL= `https://api.spotify.com/v1/albums/${albumId}`;
    return this.ht.get<any>(albmuURL,this.httpOptions)
  }

  //get All tracks

  getTracks(albumId):Observable<any>{

    let tracksURL = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this.ht.get<any>(tracksURL,this.httpOptions)
  }
}
