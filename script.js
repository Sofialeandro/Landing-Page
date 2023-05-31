function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyVIgsR5LcsQL1sdWgk2DEC0EfXIqpf9xj7FhlNswN0VH6T8B20aR5NOmV7wYIV453l/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Subscribed!"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})