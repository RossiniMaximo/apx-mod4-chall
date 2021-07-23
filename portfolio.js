
function addWork(params){
    const templateEl = document.querySelector("#services-template");
    const containerEl = document.querySelector(".services-content");
    templateEl.content.querySelector(".services__img").src = params.image;
    templateEl.content.querySelector(".text__title").textContent = params.title;
    templateEl.content.querySelector(".text__description").textContent = params.description;
    templateEl.content.querySelector(".portfolio__link").href = params.href;

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
    return fetch("https://cdn.contentful.com/spaces/phtj9v0j7v95/environments/master/entries?access_token=5b6HvGZbMAYO2ez3loEG7ORLIxnnRZBBhu2GdVhyI4w&content_type=portfolioDesafio")
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        const dataIterator = data.items.map((item) => {
            const image = getImage(item.fields.portfolioImg.sys.id,data);
            const imgUrl = image.fields.file.url
            return{
                image :imgUrl,
                title : item.fields.portfolioTitle,
                description : item.fields.portfolioText,
                url : item.fields.url
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
