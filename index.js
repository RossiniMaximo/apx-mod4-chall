function addWork(params){
    
    const template = document.querySelector("#card-content");
    const container = document.querySelector(".cards-container");
    template.content.querySelector(".card__title").textContent = params.title;
    template.content.querySelector(".card__name").textContent = params.cardName;
    template.content.querySelector(".card__link").href = params.url;
    template.content.querySelector(".card__img").src = params.image;
    

    const clone = document.importNode(template.content,true)
    container.appendChild(clone);
    
}

function getImage(id,data){
    const imgFinder = data.includes.Asset.find((asset) => {
        return asset.sys.id == id ;
    })
    return imgFinder;
}

function getWorks(work){
    return fetch("https://cdn.contentful.com/spaces/phtj9v0j7v95/environments/master/entries?access_token=5b6HvGZbMAYO2ez3loEG7ORLIxnnRZBBhu2GdVhyI4w&content_type=work")
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        const dataIterator = data.items.map((item) => {
            const image = getImage(item.fields.imagen.sys.id,data);
            const imgUrl = image.fields.file.url
            return{
                title : item.fields.titulo,
                cardName : item.fields.cardName,
                url:item.fields.url,
                image:imgUrl
            }
        })
        return dataIterator;
    })
}



function main () {
    getWorks().then((works) => {
        for(let w of works){
            addWork(w)
        }
    })
    headerComponent(document.querySelector(".header-container"));
    footerComponent(document.querySelector(".footer-container"));
    contactComponent(document.querySelector(".contact-container"));
}
main();