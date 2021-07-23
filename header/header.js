function headerComponent(element){
    const contenedorEl = document.createElement("div");
    contenedorEl.innerHTML = `
    <header class="header">
        <div class="header__content">
            <a href="./index.html" class="header__name">Maxi</a>
            <button class="window__opener">
                Menú
            </button>
            <div class="header__ham-menu">
                <div class="header__ham-menu__content">
                  <a href="./portfolio.html" class=" font-cfg header__link ">Portfolio</a>
                  <a href="./services.html" class="font-cfg header__link ">Servicios</a>
                  <a href="./contacto.html" class="font-cfg header__link ">Contacto</a>
                  <button class="window__out">Go back</button>
                </div>
            </div>
            <div class="header__links">
                <a href="./portfolio.html" class="header__link">Portfolio</a>
                <a href="./services.html" class="header__link">Servicios</a>
                <a href="./contacto.html" class="header__link">Contacto</a>
            </div>
        </div>
    </header>
    `;
    const openerButton = contenedorEl.querySelector(".window__opener");
    const closerButton = contenedorEl.querySelector(".window__out");
    const windowEl = contenedorEl.querySelector(".header__ham-menu");
    openerButton.addEventListener("click",()=>{
        windowEl.style.display = 'inherit';
    })
    closerButton.addEventListener("click",()=>{
        windowEl.style.display = '';
    })
    element.appendChild(contenedorEl);
}