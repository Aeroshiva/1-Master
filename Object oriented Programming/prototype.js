//constructor

function netflix(movie_name, actor_name, release_year ){
    this.movie_name = movie_name;
    this.actor_name = actor_name;
    this.release_year = release_year;
    
 }
 // prototype
 netflix.prototype.getsummary = function (){
        return `${this.actor_name} has played a lead role in the movie ${this.movie_name} which was released in the year of ${this.release_year}.`;
 };
// years ago released

netflix.prototype.getYear = function () {
    const years_ago = (new Date().getFullYear() - this.release_year);
    return `${this.movie_name} has been released ${years_ago} years ago`;
 
};

//revise release date

netflix.prototype.revise = function(newYear){
    this.release_year = newYear;
    this.revise = true; 
};

 //Instatiate an object
 const movieDetails1 = new netflix("3 Idiots", "Amir Khan", 2014);
 const movieDetails2 = new netflix("Pushpa", "Allu Arjun", 2021);
 
 console.log(movieDetails1);

 movieDetails1.revise(2011);

 console.log(movieDetails1)

