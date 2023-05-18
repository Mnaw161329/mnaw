function exit() {
    var close = document.getElementById("container");
    var notice = document.getElementById("exit");
    close.style.display = "none";
    notice.style.display = "flex";
}

function yes() {
    close();
}

function no() {
    var close = document.getElementById("container");
    var notice = document.getElementById("exit");
    close.style.display = "block";
    notice.style.display = "none";
}

function again() {
    var result_show = document.getElementById("result_show");
    var system_value = document.getElementById("system_value");
    var paper = document.getElementById("pap");
    var scissor = document.getElementById("sci");
    var stone = document.getElementById("sto");
    var color = "#eee";
    result_show.innerHTML = "Choose!!";
    system_value.style.backgroundImage = "url('./IMG/question.jpg')";
    system_value.style.borderColor = color;
    paper.style.borderColor = color;
    scissor.style.borderColor = color;
    stone.style.borderColor = color;
}

    function paper() {
        var random_num = Math.floor(Math.random()*3);
        var result_show = document.getElementById("result_show");
        var system_value = document.getElementById("system_value");
        var paper = document.getElementById("pap");
        var scissor = document.getElementById("sci");
        var stone = document.getElementById("sto");
        var color = "#eee";
        scissor.style.borderColor = color;
        stone.style.borderColor = color;
        if (random_num == 0) {
            result_show.innerHTML = "You Draw";
            system_value.style.borderColor = "#2a59ff";
            paper.style.borderColor = "#2a59ff";
            system_value.style.backgroundImage = "url('./IMG/paper.jpg')";
        }else if (random_num == 2){
            result_show.innerHTML = "You Win!";
            system_value.style.borderColor = "#f13";
            paper.style.borderColor = "#0f0";
            system_value.style.backgroundImage = "url('./IMG/stone.jpg')";
        } else {
            result_show.innerHTML = "You Lose";
            system_value.style.borderColor = "#0f0";
            paper.style.borderColor = "#f13";
            system_value.style.backgroundImage = "url('./IMG/scissor.jpg')";
        }
    }
    
   function scissor() {
        var random_num = Math.floor(Math.random()*3);
        var result_show = document.getElementById("result_show");
        var system_value = document.getElementById("system_value");
        var paper = document.getElementById("pap");
        var scissor = document.getElementById("sci");
        var stone = document.getElementById("sto");
        var color = "#eee";
        paper.style.borderColor = color;
        stone.style.borderColor = color;
        if (random_num == 1) {
            result_show.innerHTML = "You Draw";
            system_value.style.borderColor = "#2a59ff";
            scissor.style.borderColor = "#2a59ff";
            system_value.style.backgroundImage = "url('./IMG/scissor.jpg')";
        }else if (random_num == 0){
            result_show.innerHTML = "You Win!";
            system_value.style.borderColor = "#f13";
            scissor.style.borderColor = "#0f0";
            system_value.style.backgroundImage = "url('./IMG/paper.jpg')";
        } else {
            result_show.innerHTML = "You Lose";
            system_value.style.borderColor = "#0f0";
            scissor.style.borderColor = "#f13";
            system_value.style.backgroundImage = "url('./IMG/stone.jpg')";
        }
    }
    
   function stone() {
        var random_num = Math.floor(Math.random()*3);
        var result_show = document.getElementById("result_show");
        var system_value = document.getElementById("system_value");
        var paper = document.getElementById("pap");
        var scissor = document.getElementById("sci");
        var stone = document.getElementById("sto");
        var color = "#eee";
        paper.style.borderColor = color;
        scissor.style.borderColor = color;
        if (random_num == 2) {
            result_show.innerHTML = "You Draw";
            system_value.style.borderColor = "#2a59ff";
            stone.style.borderColor = "#2a59ff";
            system_value.style.backgroundImage = "url('./IMG/stone.jpg')";
        }else if (random_num == 1){
            result_show.innerHTML = "You Win!";
            system_value.style.borderColor = "#f13";
            stone.style.borderColor = "#0f0";
            system_value.style.backgroundImage = "url('./IMG/scissor.jpg')";
       } else {
            result_show.innerHTML = "You Lose";
            system_value.style.borderColor = "#0f0";
            stone.style.borderColor = "#f13";
            system_value.style.backgroundImage = "url('./IMG/paper.jpg')";
        }
    }
