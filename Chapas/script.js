async function cargarDatos() {
    const url = "https://bielotis.github.io/Chapas/compras.json";
    const resp = await fetch(url);
    const datos = await resp.json();
    return datos;
}

async function buscar() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const datos = await cargarDatos();

    const filtrados = datos.filter(d =>
        d.Nombre.toLowerCase().includes(texto)
    );

    mostrar(filtrados);
}

function mostrar(lista) {
    const cont = document.getElementById("resultado");
    cont.innerHTML = "";

    lista.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <strong>${item.Nombre}</strong><br>
            Chapa: ${item.Chapa}<br>
            Fecha: ${item.Fecha}
        `;
        cont.appendChild(div);
    });
}
