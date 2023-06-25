import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-library-app';

  onFormSubmitted(): void {
    // You can handle this event to refresh the movie list or navigate to another page
  }
}
