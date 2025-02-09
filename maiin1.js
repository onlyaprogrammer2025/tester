document.getElementById("openmore").addEventListener("click", function() {
    let div = document.getElementById("katcontainerphone");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});



document.querySelectorAll('#kategorija123, #kategorija1').forEach(el => {
    el.addEventListener('click', () => document.querySelector('#agencijetitle').scrollIntoView({ behavior: 'smooth' }));
});

document.querySelectorAll('#kategorija7, #kategorija77').forEach(el => {
    el.addEventListener('click', () => document.querySelector('#hotels').scrollIntoView({ behavior: 'smooth' }));
});

document.querySelector('#searchbtn').addEventListener('click', () => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (searchValue === 'hoteli') {
        document.querySelector('#hotels').scrollIntoView({ behavior: 'smooth' });
    } else if (['turističke agencije', 'turisticke agencije', 'turističke agencije', 'Turističke agencije'].includes(searchValue)) {
        document.querySelector('#agencijetitle').scrollIntoView({ behavior: 'smooth' });
    }
});
