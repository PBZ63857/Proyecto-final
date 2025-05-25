
function toggleTitulo(titulo) {
    const detalle = titulo.nextElementSibling;
    if (detalle && detalle.classList.contains("detalle")) {
        const abierto = detalle.style.display === "block";
        detalle.style.display = abierto ? "none" : "block";
        titulo.classList.toggle("abierto", !abierto);
    }
}
function toggleDetalle(elemento) {
    let detalle = elemento.querySelector('.detalle');
    detalle.style.display = detalle.style.display === 'block' ? 'none' : 'block';
}

function toggleDetalle(elemento) {
    elemento.classList.toggle('activo');
}

let puntuacion = 0;
let preguntaActual = 0;

function verificar(boton, respuesta) {
    const pregunta = boton.closest(".pregunta");
    const correcta = parseInt(pregunta.dataset.respuesta);

    const botones = pregunta.querySelectorAll("button");
    botones.forEach(btn => {
        btn.disabled = true;
        const r = parseInt(btn.getAttribute("onclick").match(/,\s*(\d)\)/)[1]);
        btn.style.backgroundColor = (r === correcta) ? "#00cc66" : "#cc3333";
    });

    if (respuesta === correcta) {
        puntuacion++;
    }

    setTimeout(() => {
        pregunta.style.display = "none";
        preguntaActual++;

        const siguiente = document.querySelectorAll(".pregunta")[preguntaActual];
        if (siguiente) {
            siguiente.style.display = "block";
        } else {
            const resultado = document.getElementById("resultado-quiz");
            resultado.textContent = `✅ Has acertado ${puntuacion} de ${preguntaActual} preguntas.`;
            resultado.style.fontWeight = "bold";
            resultado.style.marginTop = "1rem";
        }
    }, 800);
}
