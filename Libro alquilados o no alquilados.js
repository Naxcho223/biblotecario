function alquilarLibro() {
    let libroSeleccionado = document.getElementById("libro").value;

    // Lógica para cambiar la disponibilidad del libro seleccionado
    switch (libroSeleccionado) {
        case "libro1":
            if (document.getElementById("disponible_libro1").textContent === "Sí") {
                document.getElementById("disponible_libro1").textContent = "No";
            } else {
                alert("Este libro ya está alquilado.");
            }
            break;
        case "libro2":
            if (document.getElementById("disponible_libro2").textContent === "Sí") {
                document.getElementById("disponible_libro2").textContent = "No";
            } else {
                alert("Este libro ya está alquilado.");
            }
            break;
        case "libro3":
            if (document.getElementById("disponible_libro3").textContent === "Sí") {
                document.getElementById("disponible_libro3").textContent = "No";
            } else {
                alert("Este libro ya está alquilado.");
            }
            break;
        default:
            alert("Selecciona un libro válido.");
    }
}