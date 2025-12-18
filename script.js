lblpcScore = document.getElementById("lblPC_Score");
lblplScore = document.getElementById("lblPlayer_Score");

lblpcChose = document.getElementById("lblPC_Choose");
lblplChose = document.getElementById("lblPlayer_Choose");

picpcChose = document.getElementById("picPC_Choose");
picplChose = document.getElementById("picPlayer_Choose");

lblMessage = document.getElementById("lblmessage");



PC_score = 0;
PL_score = 0;

playerChoose = 0;
pcChoose = 0;


function resetAnimation()
{ 
    picpcChose.style.animation = "3s linear infinite";
    picplChose.style.animation = "3s linear infinite";
}

function btnS_Click()
{
    picplChose.src= "img/S.png";
    lblplChose.innerText = "سنگ";

    resetAnimation();

    playerChoose = 1;
    setPcChoose();
}

function btnK_Click()
{
    picplChose.src= "img/KK.png";
    lblplChose.innerText = "کاغذ";
    
    resetAnimation();

    playerChoose = 2;
    setPcChoose();
}

function btnG_Click()
{
    picplChose.src= "img/G.png";
    lblplChose.innerText = "قیچی";

    resetAnimation();

    playerChoose = 3;
    setPcChoose();
}

function setPcChoose()
{
    pcChoose = Math.floor(Math.random() * 3) + 1;

    switch(pcChoose)
    {
        case 1 :
            picpcChose.src= "img/S.png";
            lblpcChose.innerText = "سنگ";
        break;
        case 2 :
            picpcChose.src= "img/K.png";
            lblpcChose.innerText = "کاغذ";
        break;
        case 3 :
            picpcChose.src= "img/G.png";
            lblpcChose.innerText = "قیچی";
        break;
    }

    checkWin();
}

function checkWin()
{
    var audio = new Audio('Audio/211.wav');
    audio.play();

  switch(playerChoose)
  {

    case 1:
        if(lblpcChose.innerText === "سنگ")
        {
           lblMessage.innerText = "مساوی";
           lblMessage.style.color="darkorchid";

           picpcChose.style.animation = "animeate1 3s linear infinite";
           picplChose.style.animation = "animeate1 3s linear infinite";
        }

        if(lblpcChose.innerHTML == "کاغذ")
        {
            lblMessage.innerText = "باختی\n کاغذ سنگ رو میبره";
            lblMessage.style.color="red";
            PC_score++;

            picpcChose.style.animation = "animeate 3s linear infinite";

        }

        if(lblpcChose.innerHTML == "قیچی")
        {
            lblMessage.innerText = "بردی\n سنگ قیچی رو میبره";
            lblMessage.style.color="green";
            PL_score++;

            picplChose.style.animation = "animeate 3s linear infinite";
        }

    break;
    case 2:
        if(lblpcChose.innerHTML == "کاغذ")
        {
            lblMessage.innerText = "مساوی";
            lblMessage.style.color="darkorchid";

            picpcChose.style.animation = "animeate1 3s linear infinite";
            picplChose.style.animation = "animeate1 3s linear infinite";
        }

        if(lblpcChose.innerHTML == "سنگ")
        {
            lblMessage.innerText = "بردی\n کاغذ سنگ رو مبره";
            lblMessage.style.color="green";
            PL_score++;

            picplChose.style.animation = "animeate 3s linear infinite";
        }
    
        if(lblpcChose.innerHTML == "قیچی")
        {
            lblMessage.innerText = "باختی\n قیچی کاغذ رو میبره";
            lblMessage.style.color="red";
            PC_score++;

            picpcChose.style.animation = "animeate 3s linear infinite";
        }
    break;
    case 3:

        if(lblpcChose.innerHTML == "قیچی")
        {
            lblMessage.innerText = "مساوی";
            lblMessage.style.color="darkorchid";

           picpcChose.style.animation = "animeate1 3s linear infinite";
           picplChose.style.animation = "animeate1 3s linear infinite";
         }

        if(lblpcChose.innerHTML == "سنگ")
         {
            lblMessage.innerText = "باختی\n  سنگ قیچی رو میبره";
            lblMessage.style.color="red";
            PC_score++;

            picpcChose.style.animation = "animeate 3s linear infinite";
         }
    
        if(lblpcChose.innerHTML == "کاغذ")
        {

          lblMessage.innerText = "بردی\n قیچی کاغذ رو میبره";
          lblMessage.style.color="green";
          PL_score++;

          picplChose.style.animation = "animeate 3s linear infinite";
         }
     break;
  }

  lblpcScore.innerText = `امتیاز : ${PC_score}`;
  lblplScore.innerText = `امتیاز : ${PL_score}`;
}