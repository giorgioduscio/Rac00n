// TODO video
const videoOpening=document.querySelector("#home #videoOpening")
videoOpening.innerHTML=`
    <div>
        <video autoplay loop src="https://videocdn.cdnpk.net/joy/content/video/free/video0457/large_preview/_import_60b8cac1e1b2a3.70854678.mp4" ></video>
    </div>
`;

// TODO HOME
const opening=document.querySelector("#home #opening")
opening.innerHTML=`
    <a href="/pages/ordinations/ordinations.html">
        <div>
            <h3>Ordinazioni</h3>
            <p>Comincia fin da dubito ad ordinare i tuoi piatti preferiti</p>
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/019/613/640/original/pizza-graphic-clipart-design-free-png.png">
    </a>
    <a href="/pages/user/user.html">
        <div>
            <h3>Accedi</h3>
            <p>Crea un account per rimanere aggiornato sulle offerte</p>
        </div>
        <img src="https://assets-global.website-files.com/59ace8427353c50001765cbd/6189aa757999e3f29d06daad_p-hero-image.svg">
    </a>
    <a href="/pages/user/user.html">
        <div>
            <h3>Allergie</h3>
            <p>Seleziona le tue allergie e mostreremo solo i piatti giusti per te</p>
        </div>
        <img src="https://cdn.icon-icons.com/icons2/67/PNG/512/crab_13466.png">
    </a>
`;