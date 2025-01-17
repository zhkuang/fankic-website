(function () {
  const defaultLanguage = 'English';

  function adjustFontSize() {
    const width = window.innerWidth;
    const baseWidth = 1440;
    const baseFontSize = 11;
    const newFontSize = (width / baseWidth) * baseFontSize;
    document.documentElement.style.fontSize = newFontSize + 'px';
  }

  adjustFontSize();
  window.addEventListener('resize', adjustFontSize);


  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      accordionItem.classList.toggle('active');

      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('active');
        }
      });
    });
  });

  function hideAllAct() {
    document.querySelectorAll('.demo-language-wrapper-active').forEach(item => {
      item.classList.remove('demo-language-wrapper-active');
    });
  }

  function refreshVideo(targetLanguage, isDefault = false) {
    const videoElem = document.getElementById('demoVideo');
    if (isDefault) {
      videoElem.volume = 0.2;
    }
    videoElem.src = 'assets/videos/' + targetLanguage.toLowerCase() + '.mp4';
    videoElem.load();
    videoElem.oncanplay = function() {
      videoElem.play();
    };
  }

  refreshVideo(defaultLanguage, true);

  document.querySelectorAll('.demo-language-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (event) => {
      if (event.target.classList.contains('demo-language-wrapper')) {
        return;
      }

      hideAllAct()
      wrapper.classList.toggle('demo-language-wrapper-active');

      const targetLanguage = event.currentTarget.getAttribute('data-language');
      refreshVideo(targetLanguage)
    });
  })


  document.querySelector('.contact-text-email').addEventListener('click', () => {
    const email = document.querySelector('.contact-email').innerText;
    navigator.clipboard.writeText(email);

    const tooltip = document.querySelector('.copy-tooltip');
    tooltip.classList.add('copy-tooltip-active');
    setTimeout(() => {
      tooltip.classList.remove('copy-tooltip-active');
    }, 3000);
  });

})();
