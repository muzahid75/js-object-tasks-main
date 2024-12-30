let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
let text="";
for (let key in myObject) {
    console.log(key+", " +"Value:"+myObject[key]+"|"+ "Type:"+typeof myObject[key]);
}
console.log(text)