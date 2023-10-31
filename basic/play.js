// var name = 'gunjan'
// var age = 23;
// var hobbies = "writing code"

// summary = (userName,userAge,userHobby) => {
//     return `name of the user ${userName} , having age ${userAge} & hobbies are ${userHobby}`
// }

// console.log(summary(name,age,hobbies))

const person = {
    name: 'gunjan',
    age: 25,
    hobbies: 'writing code',
    
    greet: function() {
        console.log(`hi i am ${this.name} and my hobbies ar ${this.hobbies}`)
    }
}

console.log(person.greet())