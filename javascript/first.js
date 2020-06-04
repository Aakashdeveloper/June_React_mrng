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

var a = 10
undefined
a >10 ? 'Hii':'Bie'
"Bie"
a===10 ? 'Hii':'Bie'
"Hii"


var myarray = ["a","b","c","d"]

myarray.map((data) => { console.log(data)})

var numarray = [3,5,7,8,9]

numarray.map((data) => { return data-1})


var numarray = [47,23,56,32,21,43]

numarray.filter((data) => { return data>25})

var numarray = [47,23,56,32,21,43]

numarray.filter((data) => { return data>25})
(4) [47, 56, 32, 43]
var numarray = [47,23,56,32,21,43]

numarray.map((data) => { return data>25})
(6) [true, false, true, true, false, true]

var a = [0,1,2,3]

a.map((data) => { return data*2})
a.filter((data) => { return data*2})

var city = ["Amsterdam", "Dubai", "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]
undefined
city.indexOf('Delhi')
6
city.indexOf('Nice')
2
city.indexOf('Pune')
-1
city.indexOf('Boston')
-1