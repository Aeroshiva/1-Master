// console.log(navigator.appVersion)
// alert("hello buddy");
//Object Literals
const netflix = {
    movie_name: ["Raj", "Victory", "KGF"],
    actor_name: ["Punith", "Sharan", "Yash"],
    release_year: [2010, 2013, 2019],
    getSummary: function(){
        return `${this.actor_name} played a lead role in ${this.movie_name} and in the year ${this.release_year}`;
    }
};
//const movieBloke = new netflix.getSummary("Ranga SSLC","Sudeep", 2004); 
//console.log(netflix.getSummary());
console.log(Object.values(netflix));
console.log(Object.keys(netflix));