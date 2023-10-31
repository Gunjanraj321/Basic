// var name = 'gunjan'
// var age = 23;
// var hobbies = "writing code"

// summary = (userName,userAge,userHobby) => {
//     return `name of the user ${userName} , having age ${userAge} & hobbies are ${userHobby}`
// }

// console.log(summary(name,age,hobbies))

// const person = {
//     name: 'gunjan',
//     age: 25,
//     hobbies: 'writing code',
    
//     greet: function() {
//         console.log(`hi i am ${this.name} and my hobbies ar ${this.hobbies}`)
//     }
// }

// console.log(person.greet())

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
// console.log(array.map(arr => {
//     if(arr===' '){
//         return 'empty string'
//     }
//     return arr;
// }))

console.log('a');
console.log('b');
const fetchdata = ()=>{
     return new Promise((res,rej)=>{
        setTimeout(()=> res('c'),3000)
    });   
}
const fetchdata2 =  ()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => res('d'), 0)
    });
}
async function fun(){
    try{
        const text=await fetchdata()
        console.log(text);

        const text2 = await fetchdata2()
        console.log(text2);

        console.log('e')
    }catch(err){
        console.log(err)
    }
}
fun();

    