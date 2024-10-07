function uploadFile() {
    var fileInput = document.getElementById("fileUpload");
    var file = fileInput.files[0];

    if (!file) {
        document.getElementById("statusMessage").innerHTML = "Por favor, selecciona un archivo.";
        return;
    }

    if (file.type !== "application/pdf") {
        document.getElementById("statusMessage").innerHTML = "Solo se permiten archivos PDF.";
        return;
    }

    var formData = new FormData();
    formData.append("file", file);

    // Simular subida de archivo (en un servidor real se haría con un backend)
    document.getElementById("statusMessage").innerHTML = "Subiendo archivo...";
    
    setTimeout(function() {
        document.getElementById("statusMessage").innerHTML = "Archivo subido exitosamente.";
    }, 2000); // Simulación de una espera de 2 segundos para la subida
}
