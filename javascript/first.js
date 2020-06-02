Es5
Es6
Ecma Script 

//DataTypes
String = "dfbb", 'eger',  '4564', "true"
Number = 767 8676767 88.788
Boolean= true/ false

//////////////////////////////////
//es5
function add(a,b){
    var data = [a,b]
    return data
}

add(1,2)

//es6
const add = (a,b) => { return a+b }
add(1,2)


//////////Object//////////
var movies={
    name:'Avenger',
    rating:4
}

movies.name
"Avenger"
movies.rating
4
movies['name']
"Avenger"
movies['rating']
4

//////////String Literal//////////
//Es5
var age = 10
var myage = "my age is "+age
"my age is 10"

//Es6
var age = 10
var myage = `my age is ${age} \`hh\`  `

//////////Classes//////////
function language(name,country){
    this.name=name,
    this.country=country
}

class location{
    constructor(lat,long){
        this.lat = lat,
        this.long = long
    }
}

class language1{
    constructor(name,country){
        this.name=name,
        this.country=country
    }
    
}


//////////////////
class location{
    constructor(lat,long){
        this.lat = lat,
        this.long = long
    }
}

class language1 extends location{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name,
        this.country=country
    }
    
}
