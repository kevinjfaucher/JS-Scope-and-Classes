/*

A class in JavaScript is like a blueprint for creating objects. 
It can have properties (variables) and methods
(functions). 

*/

class Car {
    // The constructor function initializes the properties when a new object is created
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // A method to display car details
    getCarInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  

// Creating a new car object using the Car class
const myCar = new Car("Toyota", "Corolla", 2022);

// Accessing the car's information using the method
console.log(myCar.getCarInfo()); // Output: 2022 Toyota Corolla


/*
Breaking It Down:

    Class Definition (class Car):
        We defined a class called Car. This is like a template that describes 
        the properties (make, model, and year) and the method (getCarInfo) 
        that every car object will have.

    Constructor (constructor()):
        The constructor method is a special function that is called 
        automatically when a new object is created. It initializes the 
        object's properties (make, model, year) with the values passed when the 
        object is created.

    Properties (this.make, this.model, this.year):
        this refers to the current object. So when we do this.make = make, 
        we are assigning the value of the make parameter to the object's make property.

    Method (getCarInfo()):
        This is a function inside the class that can be called on any 
        object created from the class. It returns a string with the car's 
        year, make, and model.

    Creating an Object:
        We use const myCar = new Car("Toyota", "Corolla", 2022) to create a new 
        instance of the Car class. The new keyword calls the constructor and sets 
        up the object with the given values.
        The object myCar now has the properties make, model, and year, and 
        the method getCarInfo().

    Accessing Methods:
        We can call the getCarInfo() method on myCar to get the car's details.




*/