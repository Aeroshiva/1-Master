// object create
 const netflix_Silver = {
    getSummary: function(){
        return `${this.actor_name} has played a lead role in the movie ${this.movie_name} which was released in the year of ${this.release_year}.`;
    },

    getYear: function () {
        const years_ago = (new Date().getFullYear() - this.release_year);
        return `${this.movie_name} movie has been released ${years_ago} years ago.`;
     
    }  
 };

 //create object

    //  const movieDetails = Object.create(netflix_Silver);
    //  movieDetails.movie_name = 'Swadesh';
    //  movieDetails.actor_name = 'Sharuk Khan';
    //  movieDetails.release_year = '2003';

    const movieDetails = Object.create(netflix_Silver, {
        movie_name: {value: 'GangaJal'},
        actor_name: {value: 'Ajay Devgan'},
        release_year: {value: '2006'}
    });

 console.log(movieDetails.getSummary());
 console.log(movieDetails.getYear());
 console.log(movieDetails)
