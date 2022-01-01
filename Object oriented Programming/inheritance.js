//constructor
function Netflix(movie_name, actor_name, release_year ){
    this.movie_name = movie_name;
    this.actor_name = actor_name;
    this.release_year = release_year;
    
 }
 // get summary prototype
 Netflix.prototype.getsummary = function (){
        return `${this.actor_name} has played a lead role in the movie ${this.movie_name} which was released in the year of ${this.release_year}.`;
 };

 //Subscriber object

 function Netflix_Sub (movie_name, actor_name, release_year, account_validity){
    Netflix.call(this, movie_name, actor_name, release_year);

    this.account_validity = account_validity;
};

// inherit prototype

Netflix_Sub.prototype = Object.create(Netflix.prototype);

//Netflix_Sub constructor

Netflix_Sub.prototype.constructor = Netflix_Sub;

 // instatntiate the Netflix_Sub object
 const subscriber = new Netflix_Sub('KGF','Yash','2019','3-days');
 console.log(subscriber); 