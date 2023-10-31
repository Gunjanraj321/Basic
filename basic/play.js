var name = 'gunjan'
var age = 23;
var hobbies = "writing code"

summary = (userName,userAge,userHobby) => {
    return `name of the user ${userName} , having age ${userAge} & hobbies are ${userHobby}`
}

console.log(summary(name,age,hobbies))