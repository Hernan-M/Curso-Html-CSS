const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const maximize = document.querySelector('.maximize')
const minimize = document.querySelector('.minimize')

for(let card of cards){
    card.addEventListener("click", function(){
        const textID = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src=`https://blog.rocketseat.com.br${textID}`
    })
}

document.querySelector('.modal-close').addEventListener("click",function(){
    modalOverlay.classList.remove('active')
})

maximize.addEventListener("click", function(){
    modal.classList.add('maximize-active')
    maximize.classList.add('hidden-button-maximize')
    minimize.classList.add('minimize-button-activate')
    modal.classList.add('minimize')
})

minimize.addEventListener("click", function(){
    modal.classList.remove('maximize-active')
    modal.classList.add('minimize-active')
    minimize.classList.remove('minimize-button-activate')
    maximize.classList.remove('hidden-button-maximize')
})
