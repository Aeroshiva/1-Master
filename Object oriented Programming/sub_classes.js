class Netflix {
    constructor(movie_name, actor_name, released_year){
        this.movie_name = movie_name;
        this.actor_name = actor_name;
        this.released_year = released_year;
    }
    getSummary (){
        return `${this.actor_name} has played a lead role in the movie ${this.movie_name} which was released in the year of ${this.released_year}.`;

    }
}

//Netflix_Pro subclasses

class Netflix_Pro extends Netflix{
    constructor(movie_name, actor_name, released_year, validity){
        super(movie_name, actor_name, released_year);
        this.validity = validity;
    }

}

//instantiate the object

const Netflix_Subscriber = new Netflix_Pro('Bahubali', 'Prabhas', '2016', '5-days');
console.log(Netflix_Subscriber.getSummary());
console.log(Netflix_Subscriber)

