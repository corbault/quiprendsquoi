if (navigator.clipboard) {
  console.log("Support du presse papier")
} else {
  console.warn("Pas de support")
}

document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
  const $button = document.createElement('button');
  $button.innerHTML = 'Copier';
  $clipboardEl.parentNode.append($button);
  $button.addEventListener(
  'click',
  copyToClipboard.bind(this, $clipboardEl, $button)
  );
});

function copyToClipboard($clipboardEl, $button) {
  console.log('Click !');
navigator.clipboard
  .writeText($clipboardEl.getAttribute('data-clipboard'))
  .then(() => {
    $button.innerHTML = 'Copié !';
    setTimeout(() => ($button.innerHTML = 'Copier'), 2000);
  })
  .catch((err) => console.warn(err));
}
