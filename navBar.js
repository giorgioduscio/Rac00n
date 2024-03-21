const homeUrlImage="https://cdn.icon-icons.com/icons2/1660/PNG/512/3844470-home-house_110332.png";
const cartUrlImage="https://cdn.icon-icons.com/icons2/2645/PNG/512/cart_icon_160296.png";
const userUrlImage="https://cdn-icons-png.freepik.com/512/6337/6337309.png";
const searchUrlImage="https://cdn.icon-icons.com/icons2/621/PNG/512/magnifier-1_icon-icons.com_56924.png";
const feedUrlImage="https://png.pngtree.com/png-clipart/20230418/original/pngtree-bell-line-icon-png-image_9065349.png";

document.querySelector("nav.top").innerHTML=`
    <row>
        <searchBar>
            <input type="text" placeholder="Ricerca">
            <button>
                <img src="${searchUrlImage}">
            </button>
        </searchBar>
    </row>
`;

document.querySelector("nav.bottom").innerHTML=`
    <row>
        <a href="/pages/home/home.html">
            <img id="home" src="${homeUrlImage}">
        </a>
        <a href="/pages/cart/cart.html">
            <img id="cart" src="${cartUrlImage}">
            <div id="pointCart">!</div>
        </a>
        <a href="/pages/user/user.html">
            <img id="user" src="${userUrlImage}">
        </a>
    </row>
`;