import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTvShows: Tv[] = [];

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((response) => {
      this.upcomingMovies = response;
    });
    this.moviesService.getMovies('top_rated').subscribe((response) => {
      this.topRatedMovies = response;
    });
    this.moviesService.getTvShows('popular').subscribe((response) => {
      this.popularTvShows = response;
    });
  }
}
