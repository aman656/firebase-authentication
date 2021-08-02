// let fn = (...a)=>{
//     let c= 0
//     console.log(...a)
//     for (var b of a){
//         c+=b
//     }
//     console.log(c)
// }

// fn(1,2,4,5)


// let obj = {
//     name:'Aman',
//     semester:'4th'
// }

// console.log(obj.name)
let signup = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)

        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
        
}



let signin = () => {
    var email = document.getElementById('emails').value
    var password = document.getElementById('passs').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}