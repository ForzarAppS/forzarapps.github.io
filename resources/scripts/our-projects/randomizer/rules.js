function AddPeople() {    
    if (document.getElementsByClassName("input-people")[0].value != ''){
        document.getElementsByClassName("FIO")[0].innerHTML = document.getElementsByClassName("FIO")[0].innerHTML + "<div class='people'>" + document.getElementsByClassName("input-people")[0].value + "</div>";
    }
}

function RandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}

function RandomQuestions() {    
    if (document.getElementsByClassName("count-questions")[0].value != ''){
        while(document.getElementsByClassName("people-questions").length > 0) {
           document.getElementsByClassName("people-questions")[0].remove();
        }
        
        let CountQuestions = document.getElementsByClassName("count-questions")[0].value;
        let CountPeople = document.getElementsByClassName("people").length;

        let MasNumberQuestions = [];
        let NumberQuestions;
        let FlagRandomQuestions = true;
        let CountPeopleQuestions = 0;

        if (CountPeople == CountQuestions){
            for (let i = 0; i <= CountPeople-1; i++) {
                CountPeopleQuestions = 0;

                FlagRandomQuestions = true;

                while (FlagRandomQuestions) { 
                    FlagRandomQuestions = false;
                    NumberQuestions = RandomInt(CountQuestions);

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

                MasNumberQuestions.push(NumberQuestions);

                document.getElementsByClassName("FIO-Questions")[0].innerHTML = document.getElementsByClassName("FIO-Questions")[0].innerHTML + "<div class='people-questions'>" + document.getElementsByClassName("people")[i].innerHTML + " – " + NumberQuestions + "</div>";
            }
        }
        else{
            let LessQuestionsPeople = (Math.trunc(CountQuestions/CountPeople)+1)*CountPeople-CountQuestions;
            let MoreQuestionsPeople = CountPeople - LessQuestionsPeople;

            let LessQuestions = Math.trunc(CountQuestions/CountPeople);
            let MoreQuestions = LessQuestions+1;

            let MasNumberPeopleMoreQuestions = [];
            for (let i = 0; i <= MoreQuestionsPeople-1; i++) {
                let NumberPeople;
                let FlagRandomPeople = true;

                while (FlagRandomPeople) { 
                    FlagRandomPeople = false;
                    NumberPeople = RandomInt(CountPeople);

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

            for (let i = 0; i <= CountPeople-1; i++) {
                let FlagSearch = false;
                for (let j = 0; j <= MoreQuestionsPeople-1; j++) {
                    if (i+1 == MasNumberPeopleMoreQuestions[j]){
                        FlagSearch = true;
                        break;
                    }
                }

                let StrQuestions = "";
                CountPeopleQuestions = 0;

                if (FlagSearch){
                    CountPeopleQuestions = MoreQuestions;
                }
                else{
                    CountPeopleQuestions = LessQuestions;
                }

                NumberQuestions;

                for (let j = 1; j <= CountPeopleQuestions; j++) {
                    FlagRandomQuestions = true;

                    while (FlagRandomQuestions) { 
                        FlagRandomQuestions = false;
                        NumberQuestions = RandomInt(CountQuestions);

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

                    MasNumberQuestions.push(NumberQuestions);

                    if (j == CountPeopleQuestions){
                        StrQuestions = StrQuestions + NumberQuestions;
                    }
                    else{
                        StrQuestions = StrQuestions + NumberQuestions + ", ";
                    }
                }

                document.getElementsByClassName("FIO-Questions")[0].innerHTML = document.getElementsByClassName("FIO-Questions")[0].innerHTML + "<div class='people-questions'>" + document.getElementsByClassName("people")[i].innerHTML + " – " + StrQuestions + "</div>";
            }
        }
    }
}