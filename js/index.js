$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $(".carousel").carousel({
      interval: 2000
    });

    $('#modal-reserva').on('show.bs.modal', function (e){
        console.log('El modal se esta mostrando');
        $('#agregarBtn').removeClass('btn-primary');
        $('#agregarBtn').addClass('btn-outline-primary');
        //Entrar a las propiedades del elemento
        $('#agregarBtn').prop('disabled',true);


    });

    $('#modal-reserva').on('shown.bs.modal', function (e){
        console.log('El modal se mostró');
        $('#agregarBtn').prop('disabled',false);
    });
    $('#modal-reserva').on('hide.bs.modal', function (e){
        
      console.log('El modal se esta ocultando');
    });
    $('#modal-reserva').on('hidden.bs.modal', function (e){
        console.log('El modal se ocultó');
    });
  });