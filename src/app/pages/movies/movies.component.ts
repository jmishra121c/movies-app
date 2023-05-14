import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPageMovies(1);
      }
    });
  }
  getPageMovies(page: number) {
    this.movieService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  getMoviesByGenre(genreId: string, page: number) {
    this.movieService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  first: number = 0;

  rows: number = 20;

  onPageChange(event: { first: number; rows: number; page: 1 }) {
    this.first = event.first;
    this.rows = event.rows;
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.getPageMovies(pageNumber);
    }
  }
}
