var CountCol;
var CountRow;
var CountMine;

/*настройка значений*/

function SetDigit(Col, Row, Mine) {
    CountCol = Col;
    CountRow = Row;
    CountMine = Mine;
}

/*рандом*/

function GetRandom(digit) {
    return Math.floor(Math.random() * Math.floor(digit)) + 1;
}

/*создание кнопки новой игры*/

function NewGame() {
    /*создать*/
    
    let DivButtton = document.createElement("button");

    /*настройки*/

    DivButtton.onclick = function(){
        for (let cell = 0; cell < (CountCol+2)*(CountRow+2); cell++) {
            let DivCell = document.getElementsByClassName("cell")[cell];
            
            DivCell.removeAttribute("data-mine");
            DivCell.setAttribute("data-open", "false");
            DivCell.removeAttribute("data-count-mine");
            DivCell.removeAttribute("data-flag");
            DivCell.removeAttribute("style");
            
            DivCell.onclick = function() {   
                /*расстановка мин*/

                FillMine(DivCell.parentElement.parentElement.id, DivCell.parentElement.id);

                /*расстановка цифр*/

                FillPole(DivCell.parentElement.parentElement.id, DivCell.parentElement.id);
            }
        }
        
        /*изменить блок мин*/
    
        let DivCount = document.getElementsByClassName("count")[0];
        
        if (DivCount != null) {
            DivCount.innerHTML = "Осталось мин: 10";
        }
        
        /*удалить кнопки*/
        
        if (document.getElementsByClassName("buttons")[0] != null) {
            document.getElementsByClassName("buttons")[0].remove();
        }
        
        /*удалить надпись*/
        
        if (document.getElementsByClassName("label")[0] != null) {
            document.getElementsByClassName("label")[0].remove();
        }
    };
    DivButtton.innerHTML = "Новая игра";
    DivButtton.style.marginTop = "30px";

    /*добавить*/

    document.body.append(DivButtton);
}

/*создание блока мин*/

function CreateCount() {
    /*создать*/
    
    let DivCount = document.createElement("div");

    /*настройки*/

    DivCount.className = "count";
    DivCount.innerHTML = "Осталось мин: 10";

    /*добавить*/

    document.body.append(DivCount);
}

/*создание поля*/

function CreatePole() {
    /*создать*/
    
    let DivPole = document.createElement("div");

    /*настройки*/

    DivPole.className = "pole";

    /*добавить*/

    document.body.append(DivPole);
    
    for (let col = 0; col < CountCol+2; col++) {
        /*создать колонку*/
    
        let DivCol = document.createElement("div");

        /*настройки*/
        
        DivCol.className = "col";
        DivCol.id = col;

        if ((col==0) || (col==(CountCol+1))) {
            DivCol.setAttribute("data-kontur", "yes");
        }

        /*добавить*/

        document.getElementsByClassName("pole")[0].append(DivCol);
        
        for (let row = 0; row < CountRow+2; row++) {
            /*создать строку*/

            let DivRow = document.createElement("div");

            /*настройки*/
            
            DivRow.className = "row";
            DivRow.id = row;
            
            if ((col==0) || (col==(CountCol+1)) || (row==0) || (row==(CountRow+1))) {
                DivRow.setAttribute("data-kontur", "yes");
            }
            
            /*добавить*/

            document.getElementsByClassName("col")[col].append(DivRow);

            /*создать ячейку*/

            let DivCell = document.createElement("div");

            /*настройки*/
            
            DivCell.className = "cell";
            
            if ((col==0) || (col==(CountCol+1)) || (row==0) || (row==(CountRow+1))) {
                DivCell.setAttribute("data-kontur", "yes");
            }
            else {
                DivCell.setAttribute("data-open", "false");
                
                DivCell.onclick = function() {   
                    /*расстановка мин*/
                    
                    FillMine(DivCell.parentElement.parentElement.id, DivCell.parentElement.id);
                    
                    /*расстановка цифр*/
                    
                    FillPole(DivCell.parentElement.parentElement.id, DivCell.parentElement.id);
                }
            }
        
            /*добавить*/

            document.getElementsByClassName("row")[row+(col*(CountRow+2))].append(DivCell);
        }
    }
}

/*создание объектов*/

function CreateObjects(Col, Row, Mine) {
    /*создание кнопки новой игры*/

    NewGame();
    
    /*настройка значений*/
    
    SetDigit(Col, Row, Mine);
    
    /*создание блока мин*/
    
    CreateCount();
    
    /*создание поля*/
    
    CreatePole();
}

/*расстановка мин*/

function FillMine(Col, Row) {
    for (let mine = 0; mine < CountMine; mine++) {
        let FlagFill = false;

        while (FlagFill == false) {
            let XRand = GetRandom(9);
            let YRand = GetRandom(9);
            
            let NumberCell = CountRow+1+((CountRow+2)*(YRand-1))+XRand+1;
            
            if ((document.getElementsByClassName("cell")[NumberCell].getAttribute("data-mine") != "true") && ((Col != YRand) || (Row != XRand))) {
                document.getElementsByClassName("cell")[NumberCell].setAttribute("data-mine", "true");
                document.getElementsByClassName("cell")[NumberCell].setAttribute("data-open", "false");
                
                FlagFill = true;
            }
        }
    }
    
    /*количество мин*/
    
    SearchMine();
}

/*расстановка цифр*/

function FillPole(Col, Row) {
    for (let x = 1; x < CountRow+1; x++) {
        for (let y = 1; y < CountCol+1; y++) {
            let NumberCell = CountRow+1+((CountRow+2)*(y-1))+x+1;
            
            if (document.getElementsByClassName("cell")[NumberCell].getAttribute("data-mine") != "true") {
                let count = 0;

                for (let z = -1; z < 2 ; z++) {
                    if (document.getElementsByClassName("cell")[NumberCell-(CountRow+2)+z].getAttribute("data-mine") == "true") {
                        count++;
                    }
                    if ((z != 0) && (document.getElementsByClassName("cell")[NumberCell+z].getAttribute("data-mine") == "true")) {
                        count++;
                    }
                    if (document.getElementsByClassName("cell")[NumberCell+(CountRow+2)+z].getAttribute("data-mine") == "true") {
                        count++;
                    }
                }

                document.getElementsByClassName("cell")[NumberCell].setAttribute("data-count-mine", count);
                
                if (count > 0) {
                    document.getElementsByClassName("cell")[NumberCell].setAttribute("data-open", "false");
                }
            }
        }
    }
    
    /*открыть поле*/
                    
    OpenPole(Col, Row);
}

/*открыть поле*/

function OpenPole(Col, Row) {
    let NumberCell = CountRow+1+((CountRow+2)*(Number(Col)-1))+Number(Row)+1;
    
    let DivCell = document.getElementsByClassName("cell")[NumberCell];
    
    if (!((DivCell.getAttribute("data-open") == "true") || (Number(Col)==0) || (Number(Col)==(CountCol+1)) || (Number(Row)==0) || (Number(Row)==(CountRow+1)))) {
        DivCell.setAttribute("data-open", "true");
        
        if ((DivCell.getAttribute("data-count-mine") == "0")) {
            setTimeout(function(){OpenPole(Number(Col)-1, Number(Row)-1)}, 0);
            setTimeout(function(){OpenPole(Number(Col)-1, Number(Row))}, 0);
            setTimeout(function(){OpenPole(Number(Col)-1, Number(Row)+1)}, 0);

            setTimeout(function(){OpenPole(Number(Col), Number(Row)-1)}, 0);
            setTimeout(function(){OpenPole(Number(Col), Number(Row)+1)}, 0);

            setTimeout(function(){OpenPole(Number(Col)+1, Number(Row)-1)}, 0);
            setTimeout(function(){OpenPole(Number(Col)+1, Number(Row))}, 0);
            setTimeout(function(){OpenPole(Number(Col)+1, Number(Row)+1)}, 0);
        }
    }
    
    /*убрать клик*/
    
    ClearClick();
}

/*убрать клик*/

function ClearClick() {
    if (CheckWin()) {
        /*убрать все клики и показать мины*/

        ClearAllClick_ShowMine();
        
        /*==========победа==========*/
        
        /*создать надпись*/

        let DivLabel = document.createElement("div");

        /*настройки*/

        DivLabel.className = "label";
        DivLabel.innerHTML = "Победа!";
        
        /*добавить*/

        document.getElementsByTagName("footer")[0].before(DivLabel);
    }
    else {
        for (let cell = 0; cell < (CountCol+2)*(CountRow+2); cell++) {
        let DivCell = document.getElementsByClassName("cell")[cell];
        
        if (DivCell.getAttribute("data-open") == "true") {
            DivCell.onclick = function(){};
        }
        else {
            DivCell.onclick = function(){
                let DivButtons;
                
                if (DivCell.getAttribute("data-flag") != "true") {
                    if (document.getElementsByClassName("buttons")[0] == null) {
                        /*создать кнопки*/

                        DivButtons = document.createElement("div");

                        /*настройки*/

                        DivButtons.className = "buttons";
                        DivButtons.style.position = "fixed";
                        if ((DivCell.parentElement.id >= 1) && (DivCell.parentElement.id <= Math.floor(CountRow/2))) {
                            DivButtons.style.top = event.pageY+20+"px";
                        }
                        else {
                            DivButtons.style.top = event.pageY-30+"px";
                        }
                        if (cell > ((CountRow+2)*5-1)) {
                            DivButtons.style.left = event.pageX-90+"px";
                        }
                        else {
                            DivButtons.style.left = event.pageX+20+"px";
                        }

                        /*добавить*/

                        document.body.append(DivButtons);
                    }
                    else {
                        DivButtons = document.getElementsByClassName("buttons")[0];

                        if ((DivCell.parentElement.id >= 1) && (DivCell.parentElement.id <= 4)) {
                            DivButtons.style.top = event.pageY+20+"px";
                        }
                        else {
                            DivButtons.style.top = event.pageY-30+"px";
                        }
                        if (cell > 54) {
                            DivButtons.style.left = event.pageX-90+"px";
                        }
                        else {
                            DivButtons.style.left = event.pageX+20+"px";
                        }
                    }

                    DivButtons = document.getElementsByClassName("buttons")[0];

                    for (let button = 0; button < 3; button++) {
                        /*создать кнопку*/

                        let DivButton = document.createElement("div");

                        /*настройки*/

                        DivButton.className = "button";

                        switch (button) {
                            case 0: {
                                DivButton.id = "flag";
                                DivButton.onclick = function() {
                                    /*установка флага*/

                                    DivCell.setAttribute("data-flag", "true");
                                    
                                    /*количество мин*/
        
                                    SearchMine();

                                    /*удалить кнопки*/

                                    DivButtons.remove();
                                }

                                break;
                            }
                            case 1: {
                                DivButton.id = "cancel";
                                DivButton.onclick = function() {
                                    /*удалить кнопки*/

                                    DivButtons.remove();
                                }

                                break;
                            }
                            case 2: {
                                DivButton.id = "lopata";
                                DivButton.onclick = function() {
                                    if (DivCell.getAttribute("data-mine") == "true") {
                                        /*убрать все клики и показать мины*/

                                        ClearAllClick_ShowMine(DivCell);
                                        
                                        /*==========поражение==========*/
                                        
                                        /*создать надпись*/

                                        let DivLabel = document.createElement("div");

                                        /*настройки*/

                                        DivLabel.className = "label";
                                        DivLabel.innerHTML = "Поражение!";

                                        /*добавить*/

                                        document.getElementsByTagName("footer")[0].before(DivLabel);
                                    }
                                    else {
                                        /*открыть поле*/  

                                        OpenPole(DivCell.parentElement.parentElement.id, DivCell.parentElement.id);

                                        /*удалить кнопки*/

                                        DivButtons.remove();
                                    } 
                                };

                                break;
                            }
                        }

                        DivButton.style.border = "1px solid";
                        DivButton.style.left = (25*button) + "px";

                        /*добавить*/

                        DivButtons.append(DivButton);
                    }
                }
                else {
                    if (document.getElementsByClassName("buttons")[0] == null) {
                        /*создать кнопки*/

                        DivButtons = document.createElement("div");

                        /*настройки*/

                        DivButtons.className = "buttons";
                        DivButtons.style.position = "fixed";
                        if ((DivCell.parentElement.id >= 1) && (DivCell.parentElement.id <= 4)) {
                            DivButtons.style.top = event.pageY+20+"px";
                        }
                        else {
                            DivButtons.style.top = event.pageY-30+"px";
                        }
                        if (cell > ((CountRow+2)*5-1)) {
                            DivButtons.style.left = event.pageX-65+"px";
                        }
                        else {
                            DivButtons.style.left = event.pageX+15+"px";
                        }

                        /*добавить*/

                        document.body.append(DivButtons);
                    }
                    else {
                        DivButtons = document.getElementsByClassName("buttons")[0];

                        if ((DivCell.parentElement.id >= 1) && (DivCell.parentElement.id <= Math.floor(CountRow/2))) {
                            DivButtons.style.top = event.pageY+20+"px";
                        }
                        else {
                            DivButtons.style.top = event.clientY-30+"px";
                        }
                        if (cell > 54) {
                            DivButtons.style.left = event.clientX-65+"px";
                        }
                        else {
                            DivButtons.style.left = event.pageX+15+"px";
                        }
                    }

                    DivButtons = document.getElementsByClassName("buttons")[0];

                    for (let button = 0; button < 2; button++) {
                        /*создать кнопку*/

                        let DivButton = document.createElement("div");

                        /*настройки*/

                        DivButton.className = "button";

                        switch (button) {
                            case 0: {
                                DivButton.id = "flag";
                                DivButton.style.backgroundImage = "url(resources/images/buttons/no-flag.png)";
                                DivButton.onclick = function() {
                                    /*установка флага*/

                                    DivCell.setAttribute("data-flag", "false");
                                    
                                    /*количество мин*/
        
                                    SearchMine();

                                    /*удалить кнопки*/

                                    DivButtons.remove();
                                }

                                break;
                            }
                            case 1: {
                                DivButton.id = "cancel";
                                DivButton.onclick = function() {
                                    /*удалить кнопки*/

                                    DivButtons.remove();
                                }

                                break;
                            }
                        }

                        DivButton.style.border = "1px solid";
                        DivButton.style.left = (25*button) + "px";

                        /*добавить*/

                        DivButtons.append(DivButton);
                    }
                }
            }
        }
    }
    }
}

/*убрать все клики и показать мины*/

function ClearAllClick_ShowMine(FireMine) {
    if (!!FireMine) {
        FireMine.style.backgroundImage = "url(resources/images/mine/fire-mine.png)";
    }
    
    /*удалить кнопки*/

    if (document.getElementsByClassName("buttons")[0] != null) {
        document.getElementsByClassName("buttons")[0].remove();
    }

    for (let cell = 0; cell < (CountCol+2)*(CountRow+2); cell++) {
        let DivCell = document.getElementsByClassName("cell")[cell];
        DivCell.onclick = function(){};

        if (DivCell.getAttribute("data-mine") == "true") {
            DivCell.setAttribute("data-open", "true");

            if (DivCell.getAttribute("data-flag") == "true") {
                DivCell.style.backgroundImage = "url(resources/images/mine/flag-mine.png)";
            }
        }
    }
}

/*проверка на победу*/

function CheckWin() {
    let count = 0;
    
    for (let cell = 0; cell < (CountCol+2)*(CountRow+2); cell++) {
        let DivCell = document.getElementsByClassName("cell")[cell];
        
        if ((DivCell.getAttribute("data-open") == "false") && (DivCell.getAttribute("data-kontur") == null)) {
            count++;
        }
    }
    
    if (count == CountMine) {
        return true;
    }
    else {
        return false;
    }
}

/*количество мин*/

function SearchMine() {
    let count = 0;
    
    for (let cell = 0; cell < (CountCol+2)*(CountRow+2); cell++) {
        if (document.getElementsByClassName("cell")[cell].getAttribute("data-mine") == "true") {
            count++;
        }
        if (document.getElementsByClassName("cell")[cell].getAttribute("data-flag") == "true") {
            count--;
        }
    }
    
    /*изменить блок*/

    document.getElementsByClassName("count")[0].innerHTML = "Осталось мин: "+count;
}