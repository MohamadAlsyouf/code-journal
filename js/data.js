/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// new entries are saved to local storage along w rest of data model on reload

var previousEntry = localStorage.getItem('form-data');
if (previousEntry !== null) {
  data = JSON.parse(previousEntry);
}
function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('form-data', dataJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload);
