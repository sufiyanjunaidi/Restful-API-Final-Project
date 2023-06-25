import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  displayedColumns: string[] = ['title', 'director', 'genre', 'releaseYear', 'actions'];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  editMovie(movie: any): void {
    // To be implemented
  }

  deleteMovie(id: string): void {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.getMovies();
    });
  }
}
