function Tabs() {
  const tabs = document.querySelectorAll('.tabs__item');

  tabs.forEach((item) => {
    item.addEventListener('click', (e) => {
      const link = e.target.getAttribute('href').split('#')[1];
      const content = document.querySelectorAll('.tabs__content');
      const child = item.parentElement.childNodes;
      e.preventDefault();

      for (let i = 0; i < child.length; i++) {
        if (i % 2 === 1) {
          child[i].classList.remove('active');
        }
      }

      item.classList.add('active');

      content.forEach((elem) => {
        const tabContent = elem.getAttribute('id');
        const element = elem;
        if (link === tabContent) {
          element.style.display = 'flex';
        } else {
          element.style.display = 'none';
        }
      });
    });
  });

  tabs[0].click();
}

Tabs();
