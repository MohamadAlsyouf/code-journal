/* global data */
/* exported data */
var $urlInputBox = document.querySelector('#photoUrl');
var $photoUrl = document.querySelector('.img-box');
var $entryForm = document.querySelector('#entry-form');

function handleInput(event) {
  if (event.target.matches('#photoUrl') === true) {
    $photoUrl.setAttribute('src', $urlInputBox.value);
    return $photoUrl;
  }
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
}

$urlInputBox.addEventListener('input', handleInput);
$entryForm.addEventListener('submit', handleSubmit);
