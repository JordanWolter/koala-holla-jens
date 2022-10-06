console.log( 'js' );

let readyOrNot;
 
 
$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  // setupClickListeners()
  $('#addButton').on('click', addKoala);
  // load existing koalas on page load
  getKoalas();

}); // end doc ready


function addKoala(){
  console.log('addingKoala');
  if($('#readyForTransferIn').val() === 'true' ){
    readyOrNot = true;
  }
  else{
    readyOrNot = false;
  }
  let newKoala = {
    name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: readyOrNot,
      notes: $('#notesIn').val()
  }
  console.log("newKoala is", newKoala);
  $.ajax({
    url:'/koala',
    method: 'POST',
    data: newKoala
  })
    .then(response=>{
      console.log('sending Koala', response);
    })
    .catch(err=>{
      console.log('there was an error in addKoala', err);
    })
}


// function setupClickListeners() {
//   $( '#addButton' ).on( 'click', function(){
//     console.log( 'in addButton on click' );
//     // get user input and put in an object
//     // NOT WORKING YET :(
//     // using a test object
//     let koalaToSend = {
//       name: $('#nameIn').val(),
//       age: $('#ageIn').val(),
//       gender: $('#genderIn').val(),
//       readyForTransfer: readyOrNot,
//       notes: 'testName',
//     };
//     // call saveKoala with the new obejct
//     saveKoala( koalaToSend );
//   }); 
// }

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

// function saveKoala( newKoala ){
//   console.log( 'in saveKoala', newKoala );
//   // ajax call to server to get koalas
 
// }
