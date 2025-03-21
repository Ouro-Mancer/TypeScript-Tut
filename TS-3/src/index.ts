
/*
interface User {
    name: string,
    age: number,
}

function sum(user1: User, user2: User) {
    return user1.age + user2.age;
}

const result = sum({ name: "Mayank", age: 21 }, { name: "Harry", age: 22 })


console.log(result);
*/

/*<====================== PICK ======================>*/

interface User {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string,
}

type UpdatedUser = Pick<User, "name" | "password" | "age">  //denotes which value we need to update so rather than making another interface we created a type and using pick api we picked those properties only which we nee dto chnage from the existing interface or centralised interface or data

function updateUser(user: UpdatedUser) {
    return user.name;
}

/*<====================== PARTIAL ======================>*/
/*<====================== READONLY ======================>*/
/*<====================== RECORDS OR MAP ======================>*/
/*<====================== EXCLUDE ======================>*/
/*<====================== TYPE INTERFERENCE IN ZOD ======================>*/


