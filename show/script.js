function initTabNav() {
  const images = document.querySelectorAll('.monkey__images img');
  const sections = document.querySelectorAll('section');
  const sound = document.querySelector('[data-som="macaco"]');


  if(images.length && sections.length) {
   sections[0].classList.add('ativo');

   function activeTab(index) {
    sections.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = sections[index].dataset.anime
    sections[index].classList.add('ativo', direcao)
   }

   images.forEach((image, index) => {
    image.addEventListener('click', () => {
      sound.currentTime = 0;

      sound.play()
      activeTab(index)
    })
   })
  }
}


initTabNav()