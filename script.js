document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    // Toggle active class
    accordionItem.classList.toggle('active');

    // Close other active items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
      }
    });
  });
});
