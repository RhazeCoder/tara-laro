function playUngol() {
    var music = new Audio('ungol.mp3');
    music.play();
    setInterval(function() {
        music.currentTime = 0;
        music.play();
    }, 10000);
}

function openApp() {
    navigator.clipboard.writeText("568318257");
    alert("ML ID copied to clipboard!");
    
    setTimeout(function() {
        window.location.href = 'https://r8qs.adj.st/appinvites/TeamMatch%2fPElJ%2fxpQdC5Y5ZROpX%2fQwC68T%2b41p97yWd87K569alQZfc6ue0%2bbr6pyS9s6flWM?adjust_t=q0le9d_ynoul8&adjust_deeplink=mobilelegends%3a%2f%2fappinvites%2fTeamMatch%2fPElJ%2fxpQdC5Y5ZROpX%2fQwC68T%2b41p97yWd87K569alQZfc6ue0%2bbr6pyS9s6flWM';
    }, 500);
}