const scriptURL = 'https://script.google.com/macros/s/AKfycbzvTXXwb4mDPolKk2UEpmlUroSWJbQkr_OpKfmVaJtMeo9bGIbtiCOMd9pdHiX00ZX6/exec'

const form = document.forms['contact_form']
const reset = document.getElementById("reset");
const submitStatus = document.getElementById("submitStatus");

const clickFormBTN = (e) => {
    e.classList.toggle("BTNClick")
    setTimeout(() => {
        e.classList.toggle("BTNClick")
    }, 200);
    e.stopPropagation();
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            submitStatus.innerText = "Message Sent Successfully"
            setTimeout(() => {
                submitStatus.innerText = "";
                form.reset()
            }, 3000);

            
        })
        .catch(error => {
            submitStatus.innerText = "Message Sending Faild, Please Try Again After Sometime"
            setTimeout(() => {
                submitStatus.innerText = "";
                form.reset()
            }, 3000);
        })

        e.stopPropagation()
})

