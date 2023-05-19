// Constructor Function
function Car(make, model, year, range) {
  this.make = make;
  this.model = model;
  this.year = year;
  // Add range for electricCar
  this.range = range;
}

// Method for getDescription
Car.prototype.getDescription = function () {
  console.log(`${this.make}: ${this.model}, ${this.year}`);
};

// Method for electricCar
Car.prototype.electricCar = function () {
  console.log(`${this.make}: ${this.model}, ${this.year}, ${this.range}`);
};

// List of Cars
const dogdeChallenger = new Car("Dodge", "Hellcat", 2023);
const fordMustange = new Car("Ford", "Mustang", 2023);
const chevyCamaro = new Car("Chevy", "Camaro", 2023);
const nissanGtr = new Car("Nissan", "GT - R", 2023);
const teslaModelS = new Car("Tesla", "Model S", 2019, 300 + " Miles");

// Call functions
// .getDescription();
// .electricCar();

// Call List
dogdeChallenger.getDescription();
fordMustange.getDescription();
chevyCamaro.getDescription();
nissanGtr.getDescription();
teslaModelS.electricCar();
