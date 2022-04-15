let InputNovaMus = document.getElementById('AddMus');
let btnAddMusica = document.getElementById('Adicionar');
let liMus = document.getElementById('ListaDeMusica');
var n = 0

InputNovaMus.addEventListener('keypress', (e) => {
    if (InputNovaMus.value != ''){
        if (e.key == 'Enter'){
            let musica = {
                nome: InputNovaMus.value,
                id: n += 1,
            };
            adicionarMusica(musica);
        };
    };
});


btnAddMusica.addEventListener('click', (e) => {
    if (InputNovaMus.value != ''){
        let musica = {
            nome: InputNovaMus.value,
            id: n += 1,
        };
        adicionarMusica(musica);
    };
});

function adicionarMusica(musica){
    let li = CriarTagLi(musica);
    liMus.appendChild(li);
    InputNovaMus.value = '';
};

function CriarTagLi(musica){
    let li = document.createElement('li');
    li.id = musica.id;

    let span = document.createElement('span');
    span.classList.add('NomeMusica','container-fluid');
    span.innerHTML = musica.nome;

    let div = document.createElement('div');

    let BotaoDel = document.createElement('button');
    BotaoDel.classList.add('Deletar','btn','btn-danger');
    BotaoDel.innerHTML = '<span class="bi-trash"></span>Deletar';
    BotaoDel.setAttribute('onclick', 'deletar('+ musica.id +')');

    div.appendChild(BotaoDel);

    li.appendChild(span);
    li.appendChild(div);

    return li
}

function deletar(IdMusica){
    let confirm = window.confirm('Deseja mesmo deletar esta música?');
    if (confirm){
        let li = document.getElementById(''+ IdMusica +'');
        if (li){
            liMus.removeChild(li);
        }
    }
}