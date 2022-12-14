document.querySelectorAll("a").forEach((a)=>{
    // jika di klik akan menjalakan fungsi computerchoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihankomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihankomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihankomputer = pilihankomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihankomputer){
        setTimeout(()=>alert("DRAW"), 300);
    }

    // jika pilihan user yang menang (User Win)
    if(pilihanUser == "Rock" && pilihankomputer == "Scissors"){
        setTimeout(()=>alert("USER WIN"), 300);
    }else if(pilihanUser == "Paper" && pilihankomputer == "Rock"){
        setTimeout(()=>alert("USER WINN"), 300);
    }else if(pilihanUser == "Scissors" && pilihankomputer == "Paper"){
        setTimeout(()=>alert("USER WINNN"), 300);
    }

    // jika pilihan komputer yang menang (User lost)
    if(pilihanUser == "Scissors" && pilihankomputer == "Rock"){
        setTimeout(()=>alert("USER LOST"), 300);
    }else if(pilihanUser == "Rock" && pilihankomputer == "Paper"){
        setTimeout(()=>alert("USER LOSST"), 300);
    }else if(pilihanUser == "Paper" && pilihankomputer == "Scissors"){
        setTimeout(()=>alert("USER LOSSST"), 300);
    }
}
