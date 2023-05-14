import { Component } from '@angular/core';
import { Genre } from '../../models/genres';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
genres: Genre[]=[];
constructor(private moviesServices : MoviesService){}

ngOnInit(): void{
this.moviesServices.getGenres().subscribe((movieGenreData)=>{
  this.genres = movieGenreData;
})
}
}
