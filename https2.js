Class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  

    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  

  

  // b) 
  class movie {
      constructor(title, studio, rating){
          this.title = title;
          this.studio = studio;
          this.rating = "PG";
      }
  }
  

  // d) 

  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");

3.
class person{
  constructor(firstname,lastname,age,education,salary){
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.education = education;
      this.salary = salary;
      
  }
  

}

const Person = new person("jon","doe","20 ","b.tech","16000 ");

console.dir("Chair Prototype", person);
console.log("Chair Object", Person);

4.
function counter(distance) {
distance = distance * 1000;
let totalCost = 0;
if (distance > 500) {
  totalCost += (distance - 500) * 10;
  distance = 500;
}
if (distance > 100) {
  totalCost += (distance - 100) * 50;
  distance = 100;
}
if(distance>0)
 totalCost += distance * 100;

return totalCost;
}

console.log(counter(.1))
console.log(counter(.01))
