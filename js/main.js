/* global data */
/* exported data */
var $urlInputBox = document.querySelector('#photoUrl');
var $photoUrl = document.querySelector('.img-box');
var $entryForm = document.querySelector('#entry-form');
var $newButton = document.querySelector('#new-button');
var $entryFormView = document.querySelector('#entry-form');
var $entriesView = document.querySelector('#entries');
var $entriesLink = document.querySelector('.nav-link');

function handleInput(event) {
  $photoUrl.setAttribute('src', $urlInputBox.value);
}

function handleSubmit(event) {
  var entry = {
    title: $entryForm.elements.title.value,
    photoUrl: $entryForm.elements.photoUrl.value,
    notes: $entryForm.elements.notes.value
  };
  event.preventDefault();
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
  var newEntry = renderEntry(entry);
  $ul.prepend(newEntry);
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

function appendDom(entry) {
  if (data.entries.length === 0) {
    var noEntries = document.createElement('div');
    noEntries.setAttribute('class', 'column-full center-text no-entries');
    noEntries.textContent = 'No entries have been recorded.';
    $ul.appendChild(noEntries);
  }
  for (var i = 0; i < data.entries.length; i++) {
    var returnObject = renderEntry(data.entries[i]);
    $ul.appendChild(returnObject);
  }
}

// view swapping functions
function handleEntriesNavLink(event) {
  if (event.target === $entriesLink) {
    $entriesView.className = 'view';
    $entryFormView.className = 'hidden';
  }
}
$entriesLink.addEventListener('click', handleEntriesNavLink);

function handleNewClick(event) {
  if (event.target === $newButton) {
    $entryFormView.className = 'view';
    $entriesView.className = 'hidden';
  }
}
$newButton.addEventListener('click', handleNewClick);

document.addEventListener('DOMContentLoaded', appendDom);
$urlInputBox.addEventListener('input', handleInput);
$entryForm.addEventListener('submit', handleSubmit);
