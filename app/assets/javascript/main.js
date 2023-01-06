// ES6 or Vanilla JavaScript

// Delete table row (used on check-condition-group page)

function DeleteRow() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

// Delete summary list row (used on check-condition-group page)

function DeleteSummaryRow() {
    // event.target will be the input element.
    var dt = event.target.parentNode; 
    var dd = dt.parentNode; // the row to be removed
    dd.parentNode.removeChild(dd);
}

// uncheck radio when checkbox is selected

function deSelectRadio() {
    document.querySelector('input[name="sex-at-birth"]:checked').checked = false;
}

// uncheck radio when checkbox is selected

function deSelectCheckbox() {
    document.querySelector('input[name="not-applicable-sex"]:checked').checked = false;
}

// Check every ethnicity checkbox when all is selected

function toggle(source) {
    var checkboxes = document.querySelectorAll(
        'input[name="ethnicity"], input[name="ethnicity-asian-1"], input[name="ethnicity-asian-2"], input[name="ethnicity-asian-3"], input[name="ethnicity-asian-4"], input[name="ethnicity-asian-5"], input[name="ethnicity-black-1"],input[name="ethnicity-black-2"], input[name="ethnicity-black-3"], input[name="ethnicity-mixed-1"], input[name="ethnicity-mixed-2"], input[name="ethnicity-mixed-3"], input[name="ethnicity-mixed-4"], input[name="ethnicity-white-1"], input[name="ethnicity-white-2"], input[name="ethnicity-white-3"], input[name="ethnicity-white-4"], input[name="ethnicity-white-5"], input[name="ethnicity-other-1"], input[name="ethnicity-other-2"] ');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

