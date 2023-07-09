import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  randomMovie: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchRandomMovie();
  }

fetchRandomMovie() {
  const apiKey = '9d730788';
  const movieName = 'Avengers'; // Replace with the desired movie name
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieName)}`;

  this.http.get(apiUrl).subscribe(
    (response: any) => {
      this.randomMovie = response;
      console.log(this.randomMovie); // Add this line
    },
    (error) => {
      console.error(error);
    }
  );
}
  generateRandomId() {
    // Generate a random ID for testing purposes
    // Replace this with your logic to generate a random ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 10; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  }
}
