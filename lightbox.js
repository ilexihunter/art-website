document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">&times;</span><img alt="">';
  document.body.appendChild(overlay);
  var overlayImg = overlay.querySelector('img');

  function open(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
  }

  function close() {
    overlay.classList.remove('active');
    overlayImg.src = '';
  }

  document.querySelectorAll('.detail-gallery img').forEach(function (el) {
    el.addEventListener('click', function () {
      open(el.getAttribute('src'), el.getAttribute('alt'));
    });
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});
