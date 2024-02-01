function addUser(){
    player1_name=document.getElementById("player1Input").value;
    player2_name=document.getElementById("player2Input").value;

    localStorage.setItem("jogador 1",player1_name)
    localStorage.setItem("jogador 2",player2_name)

    window.location.replace("game_page.html")
}