let pokemonName;
$(document).keydown(function (e) {
    if (e.keyCode === 13) {
        pokemonName = $('#pokemonName').val();
        $.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName, function (data) {
            $('#number').text("id :" + data.id);
            $('#photo').attr('src', data.sprites.front_default);
            $('#photo2').attr('src', data.sprites.front_shiny);
            for (i = 0; i < 4; i++) {
                $($("li")[i]).text(data.moves[i].move.name);
                $.get('https://pokeapi.co/api/v2/pokemon-species/' + data.id, function (data2) {
                    let vorige = data2.evolves_from_species;
                    if (vorige == null) {
                        $('#evolved').text('Evolved from: no one');
                        $('#photo3').attr('src', '');
                    } else {
                        $('#evolved').html('Evolved from: ' + vorige.name);
                        $.get('https://pokeapi.co/api/v2/pokemon/' + vorige.name, function (vorigefoto) {

                            $('#photo3').attr('src', vorigefoto.sprites.front_default);
                        });
                    }



                });
            }


        })

    }

});

$(function () {
    $("#photo, #photo2").draggable();
});