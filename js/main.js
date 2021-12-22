/* global data */
/* exported data */
var $urlInputBox = document.querySelector('#photoUrl');
var $photoUrl = document.querySelector('.img-box');
var $entryForm = document.querySelector('#entry-form');

function handleInput(event) {
  $photoUrl.setAttribute('src', $urlInputBox.value);
}

function handleSubmit(event) {
  event.preventDefault();
  var entry = {
    title: $entryForm.elements.title.value,
    photoUrl: $entryForm.elements.photoUrl.value,
    notes: $entryForm.elements.notes.value
  };
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}

$urlInputBox.addEventListener('input', handleInput);
$entryForm.addEventListener('submit', handleSubmit);
