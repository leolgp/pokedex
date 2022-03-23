/*
ao clicar no pokemon da listagem temos q esconder o cartao do pokemon aberto e mostrar o cartao correspondente

temos 2 elementos: 
lista de cartões e 
lista de ícones;

vamos criar uma variável para cada 
*/

let cartoes = document.querySelectorAll('.cartao-pokemon')
let icones = document.querySelectorAll('.pokemon')


icones.forEach(pokemon => {
// criar loop criando evento de click para cada elemento da lista de ícones
    pokemon.addEventListener('click', ()=>{
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')

        cartaoPokemonAberto.classList.remove('aberto')
        
        
        // console.log(pokemon);
        // //mostra o objeto com a classe='pokemon' e id
        // console.log(pokemon.attributes);
        // //mostra os atributos do objeto

        // console.log(pokemon.attributes.id);
        // //mostra o id 

        // console.log(pokemon.attributes.id.value);
        // //mostra o valor do id

        //ou seja, vou salvar isso em uma outra variável:
        
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
        
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})


