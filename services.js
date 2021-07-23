function addWork(params){
    const templateEl = document.querySelector("#services-template");
    const containerEl = document.querySelector(".services-content");
    templateEl.content.querySelector(".services__img").src = params.image;
    templateEl.content.querySelector(".text__title").textContent = params.cardTitle;
    templateEl.content.querySelector(".text__description").textContent = params.cardText;

    const clone = document.importNode(templateEl.content,true)
    containerEl.appendChild(clone);
}

function getImage(id,data){
    const imgFinder = data.includes.Asset.find((asset) => {
        return asset.sys.id == id ;
    })
    return imgFinder;
}

function getWorks(work){
    return fetch("https://cdn.contentful.com/spaces/phtj9v0j7v95/environments/master/entries?access_token=5b6HvGZbMAYO2ez3loEG7ORLIxnnRZBBhu2GdVhyI4w&content_type=portfolioServices")
    .then((res)=>{
        
        return res.json();
    }).then((data)=>{
        const dataIterator = data.items.map((item) => {
            const image = getImage(item.fields.psImage.sys.id,data);
            const imgUrl = image.fields.file.url
            return{
                image :imgUrl,
                cardTitle : item.fields.cardTitle,
                cardText : item.fields.cardText
            }
        })
        return dataIterator;
    })
}

function main(){
    getWorks().then((works) => {
        for(let w of works){
            addWork(w)
        }
    })
    headerComponent(document.querySelector(".header-container"));
    footerComponent(document.querySelector(".footer-cont"));
}
main();