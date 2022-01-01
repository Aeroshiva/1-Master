class Netflix {
    constructor(movie_name, actor_name, released_year){
        this.movie_name = movie_name;
        this.actor_name = actor_name;
        this.released_year = released_year;
    }
    getSummary (){
        return `${this.actor_name} has played a lead role in the movie ${this.movie_name} which was released in the year of ${this.released_year}.`;

    }
    getYear () {
        const years_ago = (new Date().getFullYear() - this.released_year);
    return `${this.movie_name} has been released ${years_ago} years ago`;
    }
    
    revise(newYear){
        this.released_year = newYear;
        this.revise = true;
    }
}

//instantiate the object

const movie_details = new Netflix('Julai', 'Allu Arjun', '2013');
console.log(movie_details.getSummary());
console.log(movie_details.getYear());
console.log(movie_details);
movie_details.revise('2015');
console.log(movie_details.getSummary())
