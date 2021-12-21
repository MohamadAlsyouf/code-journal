/* global data */
/* exported data */
var $urlInputBox = document.querySelector('#photoUrl');
var $photoUrl = document.querySelector('.img-box');

function handleInput(event) {
  if (event.target.matches('#photoUrl') === true) {
    $photoUrl.setAttribute('src', $urlInputBox.value);
    return $photoUrl;
  }
}

$urlInputBox.addEventListener('input', handleInput);
