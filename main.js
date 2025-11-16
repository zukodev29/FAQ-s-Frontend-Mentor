document.querySelectorAll('.faq-question').forEach(question => {
  const plusIcon = question.querySelector('.image-open');
  const minusIcon = question.querySelector('.image-close');
  plusIcon.style.display = 'inline';
  minusIcon.style.display = 'none';

  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = answer.classList.contains('active');

    // Close all answers and reset icons
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('open');
      const pIcon = q.querySelector('.image-open');
      const mIcon = q.querySelector('.image-close');
      if (pIcon && mIcon) {
        pIcon.style.display = 'inline';
        mIcon.style.display = 'none';
      }
    });

    // If not active, open it; if active, leave all closed
    if (!isActive) {
      answer.classList.add('active');
      question.classList.add('open');
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline';
    }
    // If active, do nothing (all will be closed)
  });
});