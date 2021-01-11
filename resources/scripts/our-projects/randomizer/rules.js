/*добавление студентов*/

function AddPeople() {
    /*количество уже введённых студентов*/
    
    let CountPeople = document.getElementsByClassName("people").length;
    
    /*если ввёдена не пустота*/
    
    if (document.getElementsByClassName("input-people")[0].value != ''){
        document.getElementsByClassName("FIO")[0].innerHTML = document.getElementsByClassName("FIO")[0].innerHTML + "<div class='people'>" + document.getElementsByClassName("input-people")[0].value + "<button onclick='DeletePeople()' class='delete-people' id='" + CountPeople + "'>x</button></div>";
    }
    
    document.getElementsByClassName("input-people")[0].value = '';
}

/*удаление человека*/

function DeletePeople(){
    document.onclick = function(e) {
        /*по чему можно кликнуть, чтобы удалить*/
        
        if (e.target.className == "delete-people") {
            /*удалить*/
            
            document.getElementsByClassName("people")[e.target.id].remove();
            
            /*количество уже введённых студентов*/
    
            let CountPeople = document.getElementsByClassName("people").length;

            /*переприсваивание номеров кнопок удаления*/

            for (let i = 0; i <= CountPeople-1; i++) {
                document.getElementsByClassName("delete-people")[i].id = i;
            }
        } 
    };
}

/*целочисленный рандом*/

function GetRandom(digit) {
    return Math.floor(Math.random()*Math.floor(digit))+1;
}

function RandomQuestions() {  
    /*если ввёдена не пустота*/
    
    if (document.getElementsByClassName("count-questions")[0].value != ''){
        /*очистка старых значений*/
        
        while(document.getElementsByClassName("people-questions").length > 0) {
           document.getElementsByClassName("people-questions")[0].remove();
        }
        
        /*количество людей и количество вопросов*/
        
        let CountQuestions = document.getElementsByClassName("count-questions")[0].value;
        let CountPeople = document.getElementsByClassName("people").length;

        let MasNumberQuestions = [];
        let NumberQuestions;
        let FlagRandomQuestions = true;
        let CountPeopleQuestions = 0;

        /*количество людей равну количеству вопросов*/
        
        if (CountPeople == CountQuestions){
            /*проход по всем людям*/
            
            for (let i = 0; i <= CountPeople-1; i++) {
                CountPeopleQuestions = 0;

                FlagRandomQuestions = true;

                /*генерация уникального номера вопроса*/
                
                while (FlagRandomQuestions) { 
                    FlagRandomQuestions = false;
                    NumberQuestions = GetRandom(CountQuestions);

                    for (let k = 0; k < MasNumberQuestions.length; k++) {
                        if (MasNumberQuestions[k] == NumberQuestions) {
                            FlagRandomQuestions = true;
                            break;
                        }
                        else{
                            FlagRandomQuestions = false;
                        }
                    }
                }

                /*хранение уже сгенерированных вопросов*/
                
                MasNumberQuestions.push(NumberQuestions);
                
                /*добавление строки студент-вопросы*/

                document.getElementsByClassName("FIO-Questions")[0].innerHTML = document.getElementsByClassName("FIO-Questions")[0].innerHTML + "<div class='people-questions'>" + document.getElementsByClassName("people")[i].textContent + " – " + NumberQuestions + "</div>";
            }
        }
        else{
            let LessQuestionsPeople = (Math.trunc(CountQuestions/CountPeople)+1)*CountPeople-CountQuestions;
            let MoreQuestionsPeople = CountPeople - LessQuestionsPeople;

            let LessQuestions = Math.trunc(CountQuestions/CountPeople);
            let MoreQuestions = LessQuestions+1;

            let MasNumberPeopleMoreQuestions = [];
            
            /*генерация номеров людей с бОльшим количеством вопросов*/
            
            for (let i = 0; i <= MoreQuestionsPeople-1; i++) {
                let NumberPeople;
                let FlagRandomPeople = true;

                /*генерация уникального номера человека*/
                
                while (FlagRandomPeople) { 
                    FlagRandomPeople = false;
                    NumberPeople = GetRandom(CountPeople);

                    for (let j = 0; j < i; j++) {
                        if (MasNumberPeopleMoreQuestions[j] == NumberPeople) {
                            FlagRandomPeople = true;
                            break;
                        }
                        else{
                            FlagRandomPeople = false;
                        }
                    }
                }

                MasNumberPeopleMoreQuestions.push(NumberPeople);
            }

            MasNumberQuestions = [];
            
            /*проход по всем людям*/

            for (let i = 0; i <= CountPeople-1; i++) {
                let FlagSearch = false;
                
                /*поиск людей с бОльшим количеством вопросов*/
                
                for (let j = 0; j <= MoreQuestionsPeople-1; j++) {
                    if (i+1 == MasNumberPeopleMoreQuestions[j]){
                        FlagSearch = true;
                        break;
                    }
                }

                let StrQuestions = "";
                CountPeopleQuestions = 0;

                /*если этот человек найден*/
                
                if (FlagSearch){
                    CountPeopleQuestions = MoreQuestions;
                }
                else{
                    CountPeopleQuestions = LessQuestions;
                }

                for (let j = 1; j <= CountPeopleQuestions; j++) {
                    FlagRandomQuestions = true;

                    /*генерация уникального номера вопроса*/
                    
                    while (FlagRandomQuestions) { 
                        FlagRandomQuestions = false;
                        NumberQuestions = GetRandom(CountQuestions);

                        for (let k = 0; k < MasNumberQuestions.length; k++) {
                            if (MasNumberQuestions[k] == NumberQuestions) {
                                FlagRandomQuestions = true;
                                break;
                            }
                            else{
                                FlagRandomQuestions = false;
                            }
                        }
                    }

                    /*хранение уже сгенерированных вопросов*/
                    
                    MasNumberQuestions.push(NumberQuestions);
                    
                    /*склейка строки вопросов*/

                    if (j == CountPeopleQuestions){
                        StrQuestions = StrQuestions + NumberQuestions;
                    }
                    else{
                        StrQuestions = StrQuestions + NumberQuestions + ", ";
                    }
                }
                
                /*добавление строки студент-вопросы*/

                document.getElementsByClassName("FIO-Questions")[0].innerHTML = document.getElementsByClassName("FIO-Questions")[0].innerHTML + "<div class='people-questions'>" + document.getElementsByClassName("people")[i].textContent + " – " + StrQuestions + "</div>";
            }
        }
    }
}