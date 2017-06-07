let esSuperman:boolean = true;

if(esSuperman){
    console.log("que?");
}


let bm:string = "batman";
let sp:string = "superman";
let gl:string = "green lantern";


let vector=[1,2,3];
//let vectorN:number=[1,2,3]; //esto esta mal
let vectorNum:number[]=[1,2,3]; //esto bien

vector.push(4);//push agrega y pop quita(?)

//tupla

let heroe:[string,number] = ["ironman",123];


let flash: {nombre:string, edad:number, poderes:string[], getNombre:()=>string}={
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["corre muy rapido","viaja en el tiempo"],
    getNombre(){return this.nombre}//this.nombre es lo mismo que pasar un string
}


flash.getNombre();