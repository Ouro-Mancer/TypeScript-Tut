// interface Address {
//     street: string,
//     country: string,
//     pincode: number,
// }

// interface UserType {
//     // name: "Mayank" | "lucif" ---> you can also assign values in interface 
//     name: string,
//     age: number,
//     address: Address
// }

// interface OfficeUserType {
//     address: Address
// }


// let user: UserType = {
//     name: "Mayank",
//     age: 21,
//     address: {
//         street: "Rz-245",
//         country: "India",
//         pincode: 110046
//     }
// }

/*
let user2: UserType = {
        name: "string",
        age: 21,
    }
*/

// function isLegal(user: UserType): boolean {

//     if (user.age > 18) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// const ans = isLegal(user)
// console.log(ans)



// interface People {
//     name: string,
//     age: number,
//     greet: () => string,
// }

// const people: People = {
//     name: "Mayank",
//     age: 21,
//     greet: () => {
//         return "Hello";
//     }

// }



/*<===================Types=============>  */

/*
type Usertype = {
    name: string,
    age: number,
}

let user: Usertype = {
    name: "Mayank",
    age: 22,
}

function greet(user:Usertype){
    console.log(user.name);
    console.log(user.age);
}

greet(user)
*/

/*<=================== Types-Intersection =============>  */

/*
type goodUser = {
    name: string,
    age: number
}

type badUser = {
    name: string,
    ip: boolean
}

type intersection = goodUser & badUser

let intersectValue: intersection = {
    name: "Mayank",
    age: 21,
    ip: true,
}
*/

/*<=================== Types-Union =============>  */


type goodUser = {
    name: string,
    age: number
}

type badUser = {
    name: string,
    ip: boolean
}

type union = goodUser | badUser

let unionValue: union = {
    name:"mayank",
    age:21,
    ip:true
}


/*<=================== Arrays in TS =============>  */

/*
interface User {
    firstName: string,
    lastName: string,
    age: number,
}

function isLegal(users: User[]) {
    let ans = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i])
        }
    }
    return ans;
}

let userData: User[] = [
    { firstName: "Mayank", lastName: "Das", age: 21 },

    { firstName: "Akshat", lastName: "Chauhan", age: 12 },

    { firstName: "Kirti", lastName: "Jha", age: 20 },
]

const filteredUsers = isLegal(userData)

console.log(filteredUsers);
*/


