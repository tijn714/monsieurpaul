let werknemers = ['Dave', 'Nikkie', 'Liam', 'Laurens', 'Esmee', 'Eline', 'Floor', 'Bob', 'Bas', 'Brett', 'Danielle', 'Emily', 'Lydia', 'Laura', 'Evy', 'Lara', 'Mara', 'Nicolette', 'Sheila', 'Summer', 'Haolin', 'Zoe', 'Jordy', 'Yori', 'Zehra', 'Kelly', 'Kimberly', 'Mic', 'Tijn', 'Jace', 'Reinder', 'Lars', 'Amy', 'Renee', 'Sacha'];
let uren = [];
let fooi = 0;

// Get current date and time
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

if (hour < 10) {
    hour = "0" + hour;
}

if (minute < 10) {
    minute = "0" + minute;
}

if (second < 10) {
    second = "0" + second;
}

document.getElementById("year").innerHTML = year;

let start = function() {

    // Get current date and time
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

if (hour < 10) {
    hour = "0" + hour;
}

if (minute < 10) {
    minute = "0" + minute;
}

if (second < 10) {
    second = "0" + second;
}

if (month == 1) {
    month = "januari";
} else if (month == 2) {
    month = "februari";
} else if (month == 3) {
    month = "maart";
} else if (month == 4) {
    month = "april";
} else if (month == 5) {
    month = "mei";
} else if (month == 6) {
    month = "juni";
} else if (month == 7) {
    month = "juli";
} else if (month == 8) {
    month = "augustus";
} else if (month == 9) {
    month = "september";
} else if (month == 10) {
    month = "oktober";
} else if (month == 11) {
    month = "november";
} else if (month == 12) {
    month = "december";
}

var date = day + ' ' + month + ' ' + year;
var datenoyear = day + ' ' + month;

var time = hour + ":" + minute + ":" + second;

var dateTime = date + ' om ' + time;


document.getElementById("datum").innerHTML = datenoyear;
    

    // Reset alle error velden
    reset_err();

    let fooi = document.getElementById("fooi");
    let fooiErr = document.getElementById("FooiErr");

    let validFooi = false;
        
    let fooiWaarde = Number(fooi.value);

    if(fooiWaarde == "") {
        fooiErr.innerHTML = "Vul een bedrag in!";
        fooi.classList.add("invalid");
        validFooi = false;  
    } 
    
    else if (isNaN(fooiWaarde)) {
        fooiErr.innerHTML = "Waarde moet een getal zijn!";
        fooi.classList.add("invalid");
        validFooi = false;
    }

    else if (fooiWaarde < 0) {
        fooiErr.innerHTML = "Waarde mag niet minder dan 0 zijn!";
        fooi.classList.add("invalid");
        validFooi = false;
    }

    else {
        fooiErr.innerHTML = "";
        fooi.classList.remove("invalid");
        validFooi = true;
    }

    for (let i = 0; i < werknemers.length; i++) {

        let uur = document.getElementById(werknemers[i]);
        let uurErr = document.getElementById(werknemers[i] + "Err");
        let uurWaarde = Number(uur.value);

        if (uurWaarde == "") {
            uurWaarde = 0;
            uur.classList.remove("invalid");
        } 

        else if (isNaN(uurWaarde)) {
            uurErr.innerHTML = "Waarde moet een getal zijn!";
            uur.classList.add("invalid");
        }
        
        else if (uurWaarde < 0) {
            uurErr.innerHTML = "Waarde mag niet minder dan 0 zijn!";
            uur.classList.add("invalid");
        }

        else {
            uurErr.innerHTML = "";
            uur.classList.remove("invalid");
        }

        uren.push(uurWaarde);
        uur.value = uurWaarde;
    }

    if (validFooi == true) {


        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


        // Als er nog foutmeldingen zijn, verwijder deze

        for (let i = 0; i < werknemers.length; i++) {
            let error = document.getElementById(werknemers[i] + "Err");
            error.innerHTML = "";
        }
        
        // Totaal aantal uren berekenen
        let TotaalUur = Number(Dave.value) + Number(Nikkie.value) + Number(Liam.value) + Number(Laurens.value) + Number(Esmee.value) + Number(Eline.value) + Number(Floor.value) + Number(Bob.value) + Number(Bas.value) + Number(Brett.value) + Number(Danielle.value) + Number(Emily.value) + Number(Lydia.value) + Number(Laura.value) + Number(Evy.value) + Number(Lara.value) + Number(Mara.value) + Number(Nicolette.value) + Number(Sheila.value) + Number(Summer.value) + Number(Haolin.value) + Number(Zoe.value) + Number(Jordy.value) + Number(Yori.value) + Number(Zehra.value) + Number(Kelly.value) + Number(Kimberly.value) + Number(Mic.value) + Number(Tijn.value) + Number(Jace.value) + Number(Reinder.value) + Number(Lars.value) + Number(Amy.value) + Number(Renee.value) + Number(Sacha.value);
        let FooiValue = Number(fooi.value);

        // Uur Tarief berekenen

        let UurTarief = FooiValue / TotaalUur;
        let UurTariefRounded = UurTarief.toFixed(3);


        const f = new Intl.NumberFormat('nl-NL', {style: 'currency', currency: 'EUR' });

        document.getElementById("TotaalFooi").innerHTML = f.format(FooiValue);
        document.getElementById("UurTarief").innerHTML = f.format(UurTariefRounded);

        let holder = document.getElementById("holder");

        for (let i = 0; i < werknemers.length; i++) {
            let holderp = document.createElement('p');
            holderp.classList.add("text");
            holderp.id = werknemers[i] + "Totaal";
            holder.appendChild(holderp);
        }

        for (let i = 0; i < werknemers.length; i++) {
            let naam = document.getElementById(werknemers[i]);
            let naamValue = Number(naam.value);
            let spawn = document.getElementById(werknemers[i] + "Totaal");

            let fooiPerPersoon = naamValue * UurTarief;

            let fooiPerPersoonRounded = fooiPerPersoon.toFixed(3);
            let fooiPerPersoonRoundedValue = Number(fooiPerPersoonRounded);
            const f = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' });

            if (fooiPerPersoonRoundedValue == 0) {
                spawn.style.display = "none";
                spawn.innerHTML = naam.name + " krijgt geen fooi";
            } else if (isNaN(fooiPerPersoonRoundedValue)) {
                modal.style.display = "none";
                alert("Geen personeelsuren ingevoerd, controleer de velden en probeer het opnieuw.");
                break; 
            } else {
                spawn.style.display = "block";
                spawn.innerHTML = naam.name + ` (${naamValue} uur) krijgt ` + f.format(fooiPerPersoonRoundedValue) + " fooi.";
            }


        }
    }
    else {
        alert("Ongeldige data ingevoerd, controleer en probeer het opnieuw.");
    }
}

// Reset functies

let reset_err = function() {
    let fooiErr = document.getElementById("FooiErr");

    for (let i = 0; i < werknemers.length; i++) {
        let clearError = document.getElementById(werknemers[i] + "Err");
        clearError.innerHTML = "";
    }  

}

let reset_all = function() {

    const confirm = window.confirm("Weet je zeker dat je alle invoervelden wilt leegmaken?");

    if (confirm == true) {
        const fooi = document.getElementById("fooi");
        const fooiErr = document.getElementById("FooiErr");

        fooiErr.innerHTML = "";
        fooi.value = ""; 

        for (let i = 0; i < werknemers.length; i++) {
            let clear = document.getElementById(werknemers[i]);
            let clearError = document.getElementById(werknemers[i] + "Err");
            clearError.innerHTML = "";
            clear.value = "";
        }  

        alert("gereset!");
    
    }  else { alert("geannuleerd!"); }
}

function btn1() {
    window.location.href = "bereken.html";
}