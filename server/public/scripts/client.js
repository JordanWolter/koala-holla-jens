console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 

  $('#viewKoalas').on('click', '.deleteBtn', deleteButton);
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}


//delete button function
function deleteButton (){
  console.log('in delete', $(this).data('id'));

  //setting table id on click
  let koallaId = $(this).data('id');

  $.ajax({
    method: 'DELETE',
    url: `/koalas/${koallaId}`
  })
  .then(function (response){
    console.log('koala terminated');
    getKoalas();
  })
  .catch(function (err) {
    console.log('error on delete', err)
  })
};


