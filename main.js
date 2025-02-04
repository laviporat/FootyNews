function showMenu(menuId) {
    const menus = document.querySelectorAll(".menu");
    menus.forEach(menu => {
        menu.style.display = "none";
    });

    const selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.style.display = "block";
    }

    if (menuId === "leaderboard-menu") {
        updateContentLeaderboards();
    }
}

function updateContent() {
    const selectedOption = document.getElementById("options").value;
    const contents = document.querySelectorAll(".content");
    const imgTag = document.getElementById("leagueImage");

    const images = {
        option1: "ChampionsLeagueLogo.svg",
        option2: "PremierLeague.webp",
        option3: "LaLiga.png",
        option4: "SerieA.jpg",
        option5: "BundesLiga.png",
        option6: "Ligue1.png",
    };

    contents.forEach(content => {
        content.style.display = "none";
    });

    const selectedContent = document.getElementById(selectedOption + "Content");
    if (selectedContent) {
        selectedContent.style.display = "block";
    }

    if (imgTag && images[selectedOption]) {
        imgTag.src = images[selectedOption];
    }
}

function updateContentLeaderboards() {
    const optionsL = document.getElementById("optionsL");
    const selectedOption = optionsL.value;

    const contents = document.querySelectorAll(".contentL");
    const imgTag = document.getElementById("leagueImageL");

    const images = {
        option1L: "ChampionsLeagueLogo.svg",
        option2L: "PremierLeague.webp",
        option3L: "LaLiga.png",
        option4L: "SerieA.jpg",
        option5L: "BundesLiga.png",
        option6L: "Ligue1.png",
    };

    contents.forEach(content => {
        content.style.display = "none";
    });

    const selectedContent = document.getElementById(selectedOption + "ContentL");
    if (selectedContent) {
        selectedContent.style.display = "block";
    } else {
    }

    if (imgTag && images[selectedOption]) {
        imgTag.src = images[selectedOption];
    }
}

window.onload = function () {
    document.querySelectorAll(".content").forEach(content => content.style.display = "none");
    document.querySelectorAll(".contentL").forEach(content => content.style.display = "none");

    const defaultMatches = document.getElementById("option1Content");
    if (defaultMatches) defaultMatches.style.display = "block";

    const defaultLeaderboards = document.getElementById("option1LContentL");
    if (defaultLeaderboards) defaultLeaderboards.style.display = "block";

    const imgTagM = document.getElementById("leagueImage");
    if (imgTagM) imgTagM.src = "ChampionsLeagueLogo.svg";

    const imgTagL = document.getElementById("leagueImageL");
    if (imgTagL) imgTagL.src = "ChampionsLeagueLogo.svg";
};