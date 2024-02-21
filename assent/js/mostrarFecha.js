function mostrarFecha() {
    const fechaActual = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diaSemana = diasSemana[fechaActual.getDay()];
    const dia = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${año}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos.`;

    document.getElementById("tiempohoy").innerText = mensaje;
}

function tiempoRestanteFinAno() {
    console.log("Función tiempoRestanteFinAno llamada");  // Verifica en la consola que la función se esté llamando

    const fechaActual = new Date();
    const finDeAno = new Date(fechaActual.getFullYear() + 1, 0, 1, 0, 0, 0, 0); // Próximo 1 de enero a medianoche

    const tiempoRestante = finDeAno - fechaActual;
    const segundosRestantes = Math.floor(tiempoRestante / 1000) % 60;
    const minutosRestantes = Math.floor(tiempoRestante / (1000 * 60)) % 60;
    const horasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
    const diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));

    const mensaje = `Faltan ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para el fin de año.`;

    alert(mensaje);

    return false; // Evita que el formulario se envíe y la página se recargue
}


// Llamamos a la función mostrarFecha al abrir la página
mostrarFecha();
