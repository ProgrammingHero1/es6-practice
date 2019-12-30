class Parent{
    constructor(){
        this.father = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return `${this.name} ${this.father}`
    }
}

const baby = new Child("Arnold");
console.log(baby.getFullName());
const baby1 = new Child("Barnold");
console.log(baby1.getFullName());
const baby2 = new Child("Catherine");
console.log(baby2.getFullName());
