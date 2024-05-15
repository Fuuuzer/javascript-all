const inputs = document.querySelectorAll('.slide-controller');
const images = document.querySelectorAll('.slide');
const container = document.getElementById('slider1');
const textos = document.querySelector('.informations__text');
console.log(textos)



inputs.forEach(input => {
  input.addEventListener('click', () => {
    switch (input) {
      case inputs[0]: 
      container.style.setProperty('--selected-item', '0');
      textos.innerHTML = `
      <h2>Image 1</h2>
        <h1>Umbrella</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      `
      removeBackground()
      input.classList.add('bg');
      break;
      case inputs[1]: 
      container.style.setProperty('--selected-item', '1');
      textos.innerHTML = `
      <h2>Image 2</h2>
        <h1>Neguinho</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
      `
      removeBackground()
      input.classList.add('bg')
      break
      case inputs[2]: 
      container.style.setProperty('--selected-item', '2');
      textos.innerHTML = `
      <h2>Image 3</h2>
        <h1>teu pai</h1>
        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      `
      removeBackground()
      input.classList.add('bg')
      break
      case inputs[3]: 
      container.style.setProperty('--selected-item', '3');
      textos.innerHTML = `
      <h2>Image 4</h2>
        <h1>tua mae</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      `
      removeBackground()
      input.classList.add('bg')
      break
    }
  })
})

function removeBackground() {
  inputs.forEach(input => {
    input.classList.remove('bg')
  })
}


// container.style.setProperty('--selected-item', '1');
