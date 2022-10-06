

console.log( 'js' );

let readyOrNot;
 
 
$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  $('#addButton').on('click', addKoala);
  // load existing koalas on page load
  getKoalas();


}); // end doc ready

function addKoala(){
  console.log('addingKoala');
  if($('#readyForTransferIn').val() === 'true' ){
    readyOrNot = true;
    console.log('readyOrNot is' , readyOrNot);
  }
  else{
    readyOrNot = false;
    console.log('readyOrNot is', readyOrNot);
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
    url:'/koalas',
    method: 'POST',
    data: newKoala
  })
    .then(response=>{
      console.log('sending Koala', response);
      clearInputs();
      getKoalas();

    })
    .catch(err=>{
      console.log('there was an error in addKoala', err);
    })
}

function setupClickListeners() {
  // $( '#addButton' ).on( 'click', function(){
  //   console.log( 'in addButton on click' );
  //   // get user input and put in an object
  //   // NOT WORKING YET :(
  //   // using a test object
  //   let koalaToSend = {
  //     name: 'testName',
  //     age: 'testName',
  //     gender: 'testName',
  //     readyForTransfer: 'testName',
  //     notes: 'testName',
  //   };

  //   // Update transfer status
    

  //   // call saveKoala with the new obejct
  //   saveKoala( koalaToSend );
  // }); 

  $('#viewKoalas').on('click', '.deleteBtn', deleteButton);
  $('#viewKoalas').on('click', '.transferBtn', updateTransferStatus);
}
function clearInputs(){
      $('#nameIn').val('');
      $('#ageIn').val('');
      $('#genderIn').val('');
      $('#readyForTransferIn').val('');
      $('#notesIn').val('');
};

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
            <td>${koala.readyForTransfer}
                ${addButtonBasedOnTransferStatus(koala.readyForTransfer,koala.id)}
            </td>
            <td>${koala.notes}</td>
            <td><button class="deleteBtn" data-id="${koala.id}">☢️💣🔪🪓⚰️</button></td>
        </tr>
    `);
  }
  
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

function updateTransferStatus() {
  console.log('Update transfer status', $(this).data('id'));
  let koalaId = $(this).data('id');
  

  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`, 
  })
    .then((response) => {
      console.log('Update status!');
      getKoalas();
    });
};
 
function addButtonBasedOnTransferStatus(readyForTrans,koalaId){
  
  if(readyForTrans){
    return '';
  }
  else{
    return `<button class="transferBtn" data-id="${koalaId}">Ready</button>`;
  }
  
}
