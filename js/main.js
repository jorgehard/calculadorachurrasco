$(document).ready(function() {
    $("#myform").submit(function() {
        let pessoas = document.querySelector("#pessoas").value;
        let tempo = document.querySelector("#tempo").value;

        let total_carne = (pessoas * 100) * tempo;
        let total_cerveja = (pessoas * 1) * tempo;
        let total_refri = (pessoas * 100) * tempo;

        var result = document.getElementById("resultado");
        result.innerHTML = '';

        div = document.createElement("div");
        div.setAttribute("class", "container d-flex justify-content-center");

        ul = document.createElement("ul");
        ul.setAttribute("class", "list-group list-group-flush");

        li1 = document.createElement("li");
        li1.setAttribute("class", "list-group-item");
        if(total_carne >= 1000){
            total_carne = total_carne / 1000;
            li1.innerHTML = `<b>Total de Carne:</b> ${total_carne} kg`; 
        }else{
            li1.innerHTML = `<b>Total de Carne:</b> ${total_carne} gr`; 
        }

        li2 = document.createElement("li");
        li2.setAttribute("class", "list-group-item");
        li2.innerHTML = `<b>Total de Cerveja:</b> ${total_cerveja} latas`;

        li3 = document.createElement("li");
        li3.setAttribute("class", "list-group-item");
        li3.innerHTML = `<b>Total de Refrigerante:</b> ${total_refri} `;

        if(total_refri >= 1000){
            total_refri = total_refri / 1000;
            li3.innerHTML = `<b>Total de Refrigerante:</b> ${total_refri} litros`; 
        }else{
            li3.innerHTML = `<b>Total de Carne:</b> ${total_refri} ml`; 
        }
        h4 = document.createElement("h4");
        h4.innerHTML = "Você ira precisar de:";

        result.appendChild(div);
        div.appendChild(ul);
        ul.appendChild(h4);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        return false;
    });
}); 