// TODO video
const videoOpening=document.querySelector("#videoOpening")
videoOpening.innerHTML=`
    <nav>
        <button>Ordina subito</button>
        <button>Registrati</button>
    </nav>
    <div>
        <video autoplay loop src="/pages/home/videoRistorante.mp4" ></video>
    </div>
`;

// TODO HOME
const opening=document.querySelector("#opening")
opening.innerHTML=`
    <div>
        <div>
            <h3>Ordinazioni</h3>
            <p>Comincia fin da dubito ad ordinare i tuoi piatti preferiti</p>
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/019/613/640/original/pizza-graphic-clipart-design-free-png.png">
    </div>
    <div>
        <div>
            <h3>Accedi</h3>
            <p>Crea un account per rimanere aggiornato sulle offerte</p>
        </div>
        <img src="https://assets-global.website-files.com/59ace8427353c50001765cbd/6189aa757999e3f29d06daad_p-hero-image.svg">
    </div>
    <div>
        <div>
            <h3>Allergie</h3>
            <p>Seleziona le tue allergie e mostreremo solo i piatti giusti per te</p>
        </div>
        <img src="https://cdn.icon-icons.com/icons2/67/PNG/512/crab_13466.png">
    </div>
`;
console.log(videoOpening.style.display);