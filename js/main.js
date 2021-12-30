/* global data */
/* exported data */
var $urlInputBox = document.querySelector('#photoUrl');
var $photoUrl = document.querySelector('.img-box');
var $entryForm = document.querySelector('#entry-form');
var $ul = document.querySelector('ul');
var $noEntriesText = document.querySelector('#no-entries');
var $views = document.querySelectorAll('.view');

// changes default src attribute to new entries photo url value.

function updateImage(event) {
  $photoUrl.setAttribute('src', $urlInputBox.value);
}

// creates new entries object and handles form submit.

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
  var newEntry = generateEntryDom(entry);
  $ul.prepend(newEntry);
  $noEntriesText.className = 'hidden';
  swapView('entries');
}

// creates DOM tree for each new entry

function generateEntryDom(entry) {
  var entriesLi = document.createElement('li');
  entriesLi.setAttribute('class', 'entries-li');
  entriesLi.setAttribute('data-entry-id', entry.entryId);

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

  var entryNameRow = document.createElement('div');
  entryNameRow.setAttribute('class', 'row space-between align-center');
  entriesColumnHalf.appendChild(entryNameRow);

  var entriesName = document.createElement('h2');
  entriesName.setAttribute('class', 'entries-name');
  entriesName.textContent = entry.title;
  entryNameRow.appendChild(entriesName);

  var editIcon = document.createElement('a');
  editIcon.setAttribute('class', 'fas fa-pen edit-icon');
  editIcon.setAttribute('href', '#');
  editIcon.setAttribute('data-entry-id', entry.entryId);
  entryNameRow.appendChild(editIcon);

  var entriesNotes = document.createElement('p');
  entriesNotes.setAttribute('class', 'entries-notes');
  entriesNotes.textContent = entry.notes;
  entriesColumnHalf.appendChild(entriesNotes);

  return entriesLi;
}

// appends new entry DOM tree to the UL

function appendDom(entry) {
  swapView(data.view);
  if (data.entries.length !== 0) {
    $noEntriesText.className = 'hidden';
  }
  for (var i = 0; i < data.entries.length; i++) {
    var returnObject = generateEntryDom(data.entries[i]);
    $ul.appendChild(returnObject);
  }
}

// view swapping functions

function swapView(string) {
  data.view = string;
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === string) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'hidden';
    }
  }
}

function dataView(event) {
  var dataViewValue = event.target.getAttribute('data-view');
  if (dataViewValue === null) {
    return;
  }
  swapView(dataViewValue);
}

// edit function
function handleEdit(event) {
  if (event.target.matches('.edit-icon')) {
    swapView('entry-form');
  }
  for (var i = 0; i < data.entries.length; i++) {
    data.editing = data.entries[i].entryId;
  }
}

// event listeners
$ul.addEventListener('click', handleEdit);
document.addEventListener('click', dataView);
document.addEventListener('DOMContentLoaded', appendDom);
$urlInputBox.addEventListener('input', updateImage);
$entryForm.addEventListener('submit', handleSubmit);
