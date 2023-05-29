// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
        import { 
            getDatabase, 
            ref, 
            onValue, 
            onChildAdded,
            query,
            //appenChild,
        } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyCJo4XBAq9lYi3TkklZhELV_l8IYfIpzvM",
          authDomain: "rosario-8dd4a.firebaseapp.com",
          databaseURL: "https://rosario-8dd4a-default-rtdb.firebaseio.com",
          projectId: "rosario-8dd4a",
          storageBucket: "rosario-8dd4a.appspot.com",
          messagingSenderId: "175412178320",
          appId: "1:175412178320:web:57962ef371509bc722d715",
          measurementId: "G-5WSYMKT99F"
        };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const db = getDatabase();
  
  /////////////////////////////////////Bases de los cursos////////////////////////////////////
  
  const refSextoA = ref(db,  'sextoA/')
  const refSextoB = ref(db,  'sextoB/')
  const refSextoF = ref(db,  'sextoF/')
  const refTerceroD = ref(db, 'terceroD/')
  const refTerceroF = ref(db,  'terceroF/')
  const refSegundoA = ref(db, 'segundoA/')
  const refSegundoF = ref(db,  'segundoF/')
  const refPrimeroC = ref(db, 'primeroC/')
  const refPrimeroG = ref(db,  'primeroG/')

const accordion = document.getElementById("alumno"); // elemento HTML donde se agregarán los elementos
var btnBorrarAlumnos = document.getElementById("borrarAlumnos");   





////////////////////////////////////////////////SEXTO A///////////////////////////////////////////////////////////
var btnSextoA = document.getElementById("sextoA").addEventListener('click', ()=> {cargarSextoA()})
let cargarSextoA = () => {
    borrarReg()
    onChildAdded(refSextoA, (snap)=>{
        let datosSextoA = snap.val();
        
        agregarSextoA(datosSextoA)

    }); 
}

let agregarSextoA = (datxSextoA)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxSextoA.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxSextoA.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxSextoA.id}" aria-expanded="false" aria-controls="collapse${datxSextoA.id}">
                                    <div>
                                        ${datxSextoA.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxSextoA.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxSextoA.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxSextoA.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////SEXTO B///////////////////////////////////////////////////////////
var btnSextoB = document.getElementById("sextoB").addEventListener('click', ()=> {cargarSextoB()})
let cargarSextoB = () => {
    borrarReg()
    onChildAdded(refSextoB, (snap)=>{
        let datosSextoB = snap.val();
        
        agregarSextoB(datosSextoB)

    }); 
}

let agregarSextoB = (datxSextoB)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxSextoB.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxSextoB.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxSextoB.id}" aria-expanded="false" aria-controls="collapse${datxSextoB.id}">
                                    <div>
                                        ${datxSextoB.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxSextoB.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxSextoB.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxSextoB.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////SEXTO F///////////////////////////////////////////////////////////
var btnSextoF = document.getElementById("sextoF").addEventListener('click', ()=> {cargarSextoF()})
let cargarSextoF = () => {
    borrarReg()
    onChildAdded(refSextoF, (snap)=>{
        let datosSextoF = snap.val();
        
        agregarSextoF(datosSextoF)

    }); 
}

let agregarSextoF = (datxSextoF)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxSextoF.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxSextoF.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxSextoF.id}" aria-expanded="false" aria-controls="collapse${datxSextoF.id}">
                                    <div>
                                        ${datxSextoF.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxSextoF.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxSextoF.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxSextoF.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////









////////////////////////////////////////////////TERCERO D///////////////////////////////////////////////////////////
var btnTerceroD = document.getElementById("terceroD").addEventListener('click', ()=> {cargarTerceroD()})
let cargarTerceroD = () => {
    borrarReg()
    onChildAdded(refTerceroD, (snap)=>{
        let datosTerceroD = snap.val();
        
        agregarTerceroD(datosTerceroD)

    }); 
}

let agregarTerceroD = (datxTerceroD)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxTerceroD.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxTerceroD.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxTerceroD.id}" aria-expanded="false" aria-controls="collapse${datxTerceroD.id}">
                                    <div>
                                        ${datxTerceroD.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxTerceroD.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxTerceroD.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxTerceroD.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////TERCERO F///////////////////////////////////////////////////////////
var btnTerceroF = document.getElementById("terceroF").addEventListener('click', ()=> {cargarTerceroF()})
let cargarTerceroF = () => {
    borrarReg()
    onChildAdded(refTerceroF, (snap)=>{
        let datosTerceroF = snap.val();
        
        agregarTerceroF(datosTerceroF)

    }); 
}

let agregarTerceroF = (datxTerceroF)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxTerceroF.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxTerceroF.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxTerceroF.id}" aria-expanded="false" aria-controls="collapse${datxTerceroF.id}">
                                    <div>
                                        ${datxTerceroF.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxTerceroF.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxTerceroF.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxTerceroF.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////









////////////////////////////////////////////////SEGUNDO A///////////////////////////////////////////////////////////
var btnSegundoA = document.getElementById("segundoA").addEventListener('click', ()=> {cargarSegundoA()})
let cargarSegundoA = () => {
    borrarReg()
    onChildAdded(refSegundoA, (snap)=>{
        let datosSegundoA = snap.val();
        
        agregarSegundoA(datosSegundoA)

    }); 
}

let agregarSegundoA = (datxSegundoA)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxSegundoA.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxSegundoA.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxSegundoA.id}" aria-expanded="false" aria-controls="collapse${datxSegundoA.id}">
                                    <div>
                                        ${datxSegundoA.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxSegundoA.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxSegundoA.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxSegundoA.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////SEGUNDO F///////////////////////////////////////////////////////////
var btnSegundoF = document.getElementById("segundoF").addEventListener('click', ()=> {cargarSegundoF()})
let cargarSegundoF = () => {
    borrarReg()
    onChildAdded(refSegundoF, (snap)=>{
        let datosSegundoF = snap.val();
        
        agregarSegundoF(datosSegundoF)

    }); 
}

let agregarSegundoF = (datxSegundoF)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxSegundoF.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxSegundoF.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxSegundoF.id}" aria-expanded="false" aria-controls="collapse${datxSegundoF.id}">
                                    <div>
                                        ${datxSegundoF.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxSegundoF.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxSegundoF.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxSegundoF.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////










////////////////////////////////////////////////PRIMERO C///////////////////////////////////////////////////////////
var btnPrimeroC = document.getElementById("primeroC").addEventListener('click', ()=> {cargarPrimeroC()})
let cargarPrimeroC = () => {

    borrarReg()
    onChildAdded(refPrimeroC, (snap)=>{
        let datosPrimeroC = snap.val();
        
        agregarPrimeroC(datosPrimeroC)

    }); 
}

let agregarPrimeroC = (datxPrimeroC)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxPrimeroC.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxPrimeroC.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxPrimeroC.id}" aria-expanded="false" aria-controls="collapse${datxPrimeroC.id}">
                                    <div>
                                        ${datxPrimeroC.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxPrimeroC.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxPrimeroC.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxPrimeroC.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////PRIMERO G///////////////////////////////////////////////////////////
var btnPrimeroG = document.getElementById("primeroG").addEventListener('click', ()=> {cargarPrimeroG()})

let cargarPrimeroG = () => {
    
    borrarReg()

    
    onChildAdded(refPrimeroG, (snap)=>{
        let datosPrimeroG = snap.val();
        
        agregarPrimeroG(datosPrimeroG)

    }); 
}



let agregarPrimeroG = (datxPrimeroG)=>{
    var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${datxPrimeroG.id}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${datxPrimeroG.id}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${datxPrimeroG.id}" aria-expanded="false" aria-controls="collapse${datxPrimeroG.id}">
                                    <div>
                                        ${datxPrimeroG.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${datxPrimeroG.id}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${datxPrimeroG.id}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${datxPrimeroG.id}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;
            

                            accordion.innerHTML +=condigoHtml;

var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
    agregarEventoClick(btnPresentes);
});
        
        
            function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            })}

            function cambioColor(btnPresentes,datxs)
            {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = '#dc3545';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
            }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let borrarReg = ()=>{
    var alumnosContainer = document.getElementById("alumno");
alumnosContainer.innerHTML = '';
}

btnBorrarAlumnos.addEventListener('click', () => {
    
    var alumnosContainer = document.getElementById("alumno");
    alumnosContainer.innerHTML = '';
});