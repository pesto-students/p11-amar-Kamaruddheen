class Person {
    constructor(name, age, gender, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }

    introduce() {
        return "My name is " + this.name + ", I am " + this.age + " years old, I am " + this.gender + ", and I am " + this.nationality + "."
    }
}

const john = new Person("John", 25, "male", "American");
const jane = new Person("Jane", 30, "female", "Canadian");
const bob = new Person("Bob", 20, "male", "Australian");

// OUTPUT: Person instance
console.log("Person instance 1: ", john.introduce());
console.log("Person instance 2: ", jane.introduce());
console.log("Person instance 3: ", bob.introduce());

class Student extends Person {
    constructor(subject) {
        super()
        this.subject = subject
    }

    study() {
        return "I am studying " + this.subject
    }
}

const student = new Student("Computer Science.")
student.name = "Sarah"
student.age = 18
student.gender = "female"
student.nationality = "British"

// OUTPUT: Inherited instance (student)
console.log("Student instance 1: ", student.introduce(), student.study());