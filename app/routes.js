// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Contextual Routing for Check your cohort
// What the route does:

// When a user goes through a entire form, and reaches the check your cohort screen
// we want them to have the ability to change and edit whawtever they have done
// what we don't want is taking them back to a previous screen to change details
// amd then having them go through the whole form again

// So the contextual routes picks up on whether or not the user has reached the
// check-cohort screen, if the flag on that screen is true, they'll be re-directed
// straight back to the check-cohort screen after making changes
// if not, they'll carry on with the form journey until they reach check-cohort

// Contextual routing - add-cohort-details.html

router.post("/cohort-builder/v14/add-cohort-details-answer", function (req, res) {
    // grab value from the data store
    let complete = req.session.data.complete
    // if the journey is complete send back to the 'check-your-cohort' page
    console.log(req.session.data)
    if (complete === 'true') {
      res.redirect('/cohort-builder/v14/check-cohort')  
    } else {  
      res.redirect('/cohort-builder/v14/add-demographic-rules')  
    }
})

// Contextual routing - add-demographic-rules.html

router.post("/cohort-builder/v14/add-demographic-rules-answer", function (req, res) {
    // grab value from the data store
    let complete = req.session.data.complete
    // if the journey is complete send back to the 'check-your-cohort' page
    console.log(req.session.data)
    if (complete === 'true') {
      res.redirect('/cohort-builder/v14/check-cohort')  
    } else {  
      res.redirect('/cohort-builder/v14/add-condition-group')  
    }
})

// Contextual routing - add-condition-group.html

router.post("/cohort-builder/v14/add-condition-group-answer", function (req, res) {
  // grab value from the data store
  let complete = req.session.data.complete
  // if the journey is complete send back to the 'check-your-cohort' page
  console.log(req.session.data)
  if (complete === 'true') {
    res.redirect('/cohort-builder/v14/check-cohort')  
  } else {  
    res.redirect('/cohort-builder/v14/check-condition-groups')  
  }
})

// Contextual routing - check-condition-group.html

router.post("/cohort-builder/v14/check-condition-group-answer", function (req, res) {
  // grab value from the data store
  let complete = req.session.data.complete
  // if the journey is complete send back to the 'check-your-cohort' page
  console.log(req.session.data)
  if (complete === 'true') {
    res.redirect('/cohort-builder/v14/check-cohort')  
  } else {  
    res.redirect('/cohort-builder/v14/check-cohort')  
  }
})

// Set journey as complete - check-cohort.html

router.get("/cohort-builder/v14/check-cohort", function (req, res) {  
    // set data store variable
    console.log("BEFORE", req.session.data)
    req.session.data.complete = 'true'
    console.log("AFTER", req.session.data)
    // render the page
    return res.render('cohort-builder/v14/check-cohort')
})

module.exports = router;