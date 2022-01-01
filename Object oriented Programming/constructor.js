//constructor

function netflix(movie_name, actor_name, release_year ){
   this.movie_name = movie_name;
   this.actor_name = actor_name;
   this.release_year = release_year;
   this.getsummary = function () {
    return `${this.actor_name} has played a lead role in the movie ${this.movie_name} which was released in the year of ${this.release_year}.`;
   };

}
//Instatiate an object
const movieDetails1 = new netflix("3 Idiots", "Amir Khan", "2014");
const movieDetails2 = new netflix("Pushpa", "Allu Arjun", "2021");

console.log(movieDetails2.getsummary())