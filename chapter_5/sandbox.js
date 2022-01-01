const hobbi =  [
    
];

let portfolio = {
    name: 'shivakumar',
    age: 26,
    qualification: 'B.Tech',
    hobbies: [
        {title:'playing cricket', timeSpent: 3},
        {title:'reading novel', timeSpent: 4},
        {title:'cooking', timeSpent: 2}],
    
    login(){
        console.log('the user has logged in');
    },
    
    hobShow(){
      // console.log(this.hobbies);
      console.log(`${this.name} has following hobbies:`);
      this.hobbies.forEach(item => {
          console.log(item.title, item.timeSpent);
      });
      
        
    }
};

portfolio.hobShow();

//Math object
const random = Math.random();
console.log(random);
console.log(Math.round(random*100));


