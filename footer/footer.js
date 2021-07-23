function footerComponent(el){
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `
      <section class="footer">
         <div class="footer__content">
             <h2 class="content__name">MAXIMO</h2>
             <div class="footer__link-container">
                 <div class ="content__links">
                     <i class="flaticon-instagram"></i>
                     <a href="https://www.instagram.com/maximor0ssini/" class="content__link">Instagram</a>
                 </div>
                 <div class ="content__links">
                     <div class="flaticon-linkedin"></div>
                     <a href="https://www.linkedin.com/in/maximo-rossini-410225214/" class="content__link">LinkedIn</a>
                 </div>
                 <div class ="content__links">
                     <i class="flaticon-github"></i>
                     <a href="https://github.com/RossiniMaximo" class="content__link">GitHub</a>
                 </div>
             </div>
         </div>
     </section>
    `;
    
    el.appendChild(footerEl);

}