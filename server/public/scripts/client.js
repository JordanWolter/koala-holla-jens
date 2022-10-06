

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
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  })
  .then((response)=>{
    console.log('in ajax GET THEN');
    renderKoalas(response);
  })
  .catch((err)=>{
    console.log('in ajax GET catch');
  });
  
} // end getKoalas
function renderKoalas(koalas){
  console.log('in render Koalas',koalas);

  //render the table
  $('#viewKoalas').empty();
  for(let koala of koalas){
    $('#viewKoalas').append(`
        <tr>
            <td>${koala.name}</td>
            <td>${koala.age}</td>
            <td>${koala.gender}</td>
            <td>${koala.readyForTransfer}</td>
            <td>${koala.notes}</td>
        </tr>
    `);
  }
  
}

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}
