function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let favoriteNumber = 42;

const instructorFavoriteNumber = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

const dog = createAnimal("dog", "bark", "Woof");

dog.bark();
