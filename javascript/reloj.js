(function (){
    let actualizarHora = function (){
        let fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
            // p = párrafo
        let pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana= document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');


        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', ] ;
        pDiaSemana.textContent = semana [diaSemana];

        pDia.textContent = dia;

        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre' ] ;
        pMes.textContent = meses [mes];

        pYear.textContent = year

        
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm ='AM';
        }

        if (horas == 0) {
            horas = 12;
        };
    
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;


        if (minutos < 10 ) {
            minutos = "0" + minutos
        };
        if (segundos < 10 ) {
            segundos = "0" + segundos
        };
        
        

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    
    
    };

    
    actualizarHora();

    //Creamos una variable llamada intervalo para decirle que la funcion se ejecute cada segundo
    let intervalo = setInterval(actualizarHora, 1000);

} ())