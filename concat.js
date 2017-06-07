// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
    Fuerza[Fuerza["Batman"] = 1] = "Batman";
    Fuerza[Fuerza["Flash"] = 5] = "Flash";
    Fuerza[Fuerza["Superman"] = 100] = "Superman";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.Flash;
var fuerzaSuperman = Fuerza.Superman;
var fuerzaBatman = Fuerza.Batman;
var fuerzaAcuaman = Fuerza.Acuaman;
// Retorno de funciones
function actilet_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = 100;
var largoDelPoder = poder.length;
//let largoDelPoder = poder.toString().length; chaining. otra forma de resolver lo anterior
console.log(largoDelPoder);
var x = "nombre";
x.length; //asersion de tipo, le digo momentaneamente que lo trate como es tipo. en este caso al usar el . aparecen los metodos de string
//no forza el cambio de tipo. tiene que estar declarado inicialmente como any
//ver filter, map y reduc 
// Objetos
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
var esSuperman = true;
if (esSuperman) {
    console.log("que?");
}
var bm = "batman";
var sp = "superman";
var gl = "green lantern";
var vector = [1, 2, 3];
//let vectorN:number=[1,2,3]; //esto esta mal
var vectorNum = [1, 2, 3]; //esto bien
vector.push(4); //push agrega y pop quita(?)
//tupla
var heroe = ["ironman", 123];
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["corre muy rapido", "viaja en el tiempo"],
    getNombre: function () { return this.nombre; } //this.nombre es lo mismo que pasar un string
};
flash.getNombre();
