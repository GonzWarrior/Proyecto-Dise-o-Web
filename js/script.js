function calcular() {
    var volumen = parseFloat(document.getElementById("volumen").value);
    var unidadOrigen = document.getElementById("unidadOrigen").value;
    var unidadDestino = document.getElementById("unidadDestino").value;
    var resultado = document.getElementById("resultado");

    switch (unidadOrigen) {
        case "m3":
            switch (unidadDestino) {
                case "m3":
                    resultado.value = "Volumen: " + volumen + " m³";
                    break;
                case "L":
                    resultado.value = "Volumen: " + (volumen * 1000) + " L";
                    break;
                case "cm3":
                    resultado.value = "Volumen: " + (volumen * 1000000) + " cm³";
                    break;
                case "mL":
                    resultado.value = "Volumen: " + (volumen * 1000000) + " mL";
                    break;
            }
            break;
        case "L":
            switch (unidadDestino) {
                case "m3":
                    resultado.value = "Volumen: " + (volumen / 1000) + " m³";
                    break;
                case "L":
                    resultado.value = "Volumen: " + volumen + " L";
                    break;
                case "cm3":
                    resultado.value = "Volumen: " + (volumen * 1000) + " cm³";
                    break;
                case "mL":
                    resultado.value = "Volumen: " + (volumen * 1000) + " mL";
                    break;
            }
            break;
        case "cm3":
            switch (unidadDestino) {
                case "m3":
                    resultado.value = "Volumen: " + (volumen / 1000000) + " m³";
                    break;
                case "L":
                    resultado.value = "Volumen: " + (volumen / 1000) + " L";
                    break;
                case "cm3":
                    resultado.value = "Volumen: " + volumen + " cm³";
                    break;
                case "mL":
                    resultado.value = "Volumen: " + (volumen * 1) + " mL";
                    break;
            }
            break;
        case "mL":
            switch (unidadDestino) {
                case "m3":
                    resultado.value = "Volumen: " + (volumen / 1000000) + " m³";
                    break;
                case "L":
                    resultado.value = "Volumen: " + (volumen / 1000) + " L";
                    break;
                case "cm3":
                    resultado.value = "Volumen: " + volumen + " cm³";
                    break;
                case "mL":
                    resultado.value = "Volumen: " + volumen + " mL";
                    break;
            }
            break;
    }
}