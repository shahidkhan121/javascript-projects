const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        switch (button) {
            case e.target.id=='grey',body.style.backgroundColor = e.target.id:
                
                break;
        
            default:
                break;
        }
    })
})