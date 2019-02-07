let pokemonName;
$(document).keydown(function (e) {
    if (e.keyCode === 13) {
        pokemonName = $('#pokemonName').val();
        $.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName, function (data) {
            $('#number').text("id :" + data.id);
           
            $('#photo').attr('src', data.sprites.front_default);
            for (i = 0; i < 4; i++) {
                $('#moves').append('<li> ' + data.moves[i].move.name + ' </li>');
            }


        })
    }
});

