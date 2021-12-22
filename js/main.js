/* global data */
/* exported data */
var $urlInputBox = document.querySelector('#photoUrl');
var $photoUrl = document.querySelector('.img-box');
var $entryForm = document.querySelector('#entry-form');

function handleInput(event) {
  $photoUrl.setAttribute('src', $urlInputBox.value);
}

var entry = {
  title: $entryForm.elements.title.value,
  photoUrl: $entryForm.elements.photoUrl.value,
  notes: $entryForm.elements.notes.value
};
function handleSubmit(event) {
  event.preventDefault();
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}

function renderEntry(entry) {
  var entriesLi = document.createElement('li');
  entriesLi.setAttribute('class', 'entries-li');

  var entriesRowDiv = document.createElement('div');
  entriesRowDiv.setAttribute('class', 'row');
  entriesLi.appendChild(entriesRowDiv);

  var imageColumnHalf = document.createElement('div');
  imageColumnHalf.setAttribute('class', 'column-half');
  entriesRowDiv.appendChild(imageColumnHalf);

  var entriesImage = document.createElement('img');
  entriesImage.setAttribute('class', 'column-full img-box');
  entriesImage.setAttribute('src', entry.photoUrl);
  imageColumnHalf.appendChild(entriesImage);

  var entriesColumnHalf = document.createElement('div');
  entriesColumnHalf.setAttribute('class', 'column-half');
  entriesRowDiv.appendChild(entriesColumnHalf);

  var entriesName = document.createElement('h2');
  entriesName.setAttribute('class', 'entries-name');
  entriesName.textContent = entry.title;
  entriesColumnHalf.appendChild(entriesName);

  var entriesNotes = document.createElement('p');
  entriesNotes.setAttribute('class', 'entries-notes');
  entriesNotes.textContent = entry.notes;
  entriesColumnHalf.appendChild(entriesNotes);

  return entriesLi;
}

var $ul = document.querySelector('ul');
function appendDom(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var returnObject = renderEntry(data.entries[i]);
    $ul.appendChild(returnObject);
  }
}

document.addEventListener('DOMContentLoaded', appendDom);
$urlInputBox.addEventListener('input', handleInput);
$entryForm.addEventListener('submit', handleSubmit);
