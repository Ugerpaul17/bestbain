jshi
class person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFullname(){
        return this.firstname + '' + this.lastname;
    }
    getage(){
        return this.getFullname() + ' is ' + this.age + ' years old';
    }


}
class male extends{
constructor(firstname, lastname, age, gender ='male'){
    super(firstname, lastname, age, gender);
}
}
var paul = new male('paul', 'uger');
console.log(paul.getage());