import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getPageMovies(1);
  }
  getPageMovies(page: number) {
    this.movieService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  first: number = 0;

  rows: number = 20;

  onPageChange(event: { first: number; rows: number; page: 1 }) {
    this.first = event.first;
    this.rows = event.rows;
    this.getPageMovies(event.page + 1);
  }
}
