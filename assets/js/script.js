// Propetario
class Propetario {
    constructor (nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario(){
        return (`El nombre del dueño es: ${this.nombre}. El domicilio: ${this.direccion} y el número de contacto es ${this.telefono}`)
    }
}

// Animal
class Animal extends Propetario {
    constructor (nombre, direccion, telefono, tipoAnimal){
        super (nombre, direccion, telefono);
        this._tipoAnimal = tipoAnimal
    }

    get tipoAnimal(){
        return this._tipoAnimal
    }
}

//  Mascota
class Mascota extends Animal {
    constructor (nombre, direccion, telefono, tipoAnimal, nombreMascota, enfermedad){
        super (nombre, direccion, telefono, tipoAnimal);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad
    }

    get nombreMascota (){
        return this._nombreMascota
    }

    set nombreMascota (newNombremascota){
        this._nombreMascota = newNombremascota
    }

    get enfermedad (){
        return this._enfermedad
    }

    set enfermedad (newEnfermedad){
        this._enfermedad = newEnfermedad
    }
}

// CAPTURAR DATOS DEL DOM
let infoPropetario = document.getElementById("propietario");
let infoTelefono = document.getElementById("telefono");
let infoDireccion = document.getElementById("direccion");
let infoMascota = document.getElementById("nombreMascota");
let infoTipo = document.getElementById("tipo");
let infoEnfermedad = document.getElementById("enfermedad");

let showResult = document.getElementById("resultado");

let btnSubmit = document.querySelector(".btn");

                                   /*CALLBACK*/ 
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    let nameinfoPropetario = infoPropetario.value;
    let nameinfoDireccion = infoDireccion.value;
    let nameinfoTelefono = infoTelefono.value;
    let nameinfoTipo = infoTipo.value;
    let nameinfoMascota = infoMascota.value;
    let nameEnfermedad = infoEnfermedad.value;

    let mascota = new Mascota (nameinfoPropetario, nameinfoDireccion, nameinfoTelefono, nameinfoTipo, nameinfoMascota, nameEnfermedad)

    console.log(mascota);

    showResult.innerHTML = `<ul>               
    <li>${mascota.datosPropietario()}</li>
    <li>El tipo de animal es un: ${mascota.tipoAnimal}. El nombre de la mascota es ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}.</li>
    </ul>`
})