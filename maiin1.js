document.addEventListener("DOMContentLoaded", function () {
    // Skrolanje do sekcije hotela kad se klikne na kategoriju "Hoteli"
    document.getElementById("kategorija7").addEventListener("click", function () {
        document.getElementById("hotelswin").scrollIntoView({ behavior: "smooth" });
    });

    // Funkcija za pretragu hotela
    document.getElementById("searchbtn").addEventListener("click", function () {
        let searchQuery = document.getElementById("search").value.toLowerCase();
        let hotelsWin = document.getElementById("hotelswin");
        hotelsWin.scrollIntoView({ behavior: "smooth" }); // Prvo skrolujemo do sekcije hotela
        
        setTimeout(() => { // Dodajemo mali delay da prvo stigne do sekcije hotela
            let hotels = document.querySelectorAll("#hotelswin div label");
            for (let hotel of hotels) {
                if (hotel.textContent.toLowerCase().includes(searchQuery)) {
                    hotel.scrollIntoView({ behavior: "smooth", block: "center" });
                    break;
                }
            }
        }, 500);
    });
});