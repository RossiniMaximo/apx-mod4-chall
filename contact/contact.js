async function postData(url , data = {}){
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
        'content-Type': 'application/json'
        },
        body: JSON.stringify({
            "to":"maximorossini2016@gmail.com",
            "message":data
       }) 
    });
        return response.json(); 
}
function contactComponent(element){
    const container = document.createElement("div");
    container.innerHTML = `
    <section class="contact">
      <h2 class="contact__title">Escribime</h2>
      <form  class="contact__content-form">
          <label for="" class="content__label">
              <p   class="label__title" >Nombre</p>
              <input type="text" name="nombre" class="contact__input" required  placeholder="Username">
          </label>
          <label for="" class="content__label">
              <p class="label__title">Email</p>
              <input type="text" name="email" class="contact__input"  required placeholder="username@gmail.com">
          </label>
          <p class="label__title">Mensaje</p>
          <label for="" class="content__label"></label>
          <textarea  name="msg" cols="30" rows="10" class="content__textarea"  ></textarea>
          <button  class="form__button">Enviar</button>
      </form>
   </section>`
    const formEl = container.querySelector(".contact__content-form");
    formEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        const formEl = e.target ;
        let nombre = formEl.nombre.value ;
        let emailAcc = formEl.email.value ;
        let msj = formEl.msg.value ;
        let mail = `
            Sent by = ${nombre}

            Account = ${emailAcc}

            Message = ${msj}
        `
        postData("https://apx-api.vercel.app/api/utils/dwf ",mail)
        .then((res) => {
            console.log(res);
        })
    })
    element.appendChild(container);
}