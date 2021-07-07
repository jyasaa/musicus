import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'home/:id',component:ArtistComponent},
  {path:'albums/:id',component:AlbumComponent},
  {path:'search',component:SearchComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
