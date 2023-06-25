import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  @Input() movie: any;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  movieForm!: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.initForm();
    if (this.movie) {
      this.movieForm.patchValue(this.movie);
    }
  }

  initForm(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      if (this.movie) {
        this.movieService.updateMovie(this.movie._id, this.movieForm.value).subscribe(() => {
          this.formSubmitted.emit();
        });
      } else {
        this.movieService.createMovie(this.movieForm.value).subscribe(() => {
          this.formSubmitted.emit();
        });
      }
    }
  }
}
