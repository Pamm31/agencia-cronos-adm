let btnCadastroCurso = document.querySelector('#cadastro_curso');
let btnSalvarCurso = document.querySelector('#salvar');
let btnSalvarEdicaoCurso = document.querySelector('#salvar-edicao');
let btnCancelarCadastroCurso = document.querySelector('#cancelar');

var dadosCursos =[
    {
    'id': 'novoCursoId',
    'titulo': 'novoCursoTitulo',
    'imagem': 'novoCursoImagem',
    'descricao' : 'novoCursoDescricao',
    'acoes': 'EditExcluir',}
];

const cadastrarCurso = () => {
    btnSalvarCurso.style.display = 'initial';
    btnSalvarEdicaoCurso.style.display ='none';
    document.querySelector('.modal').classList.add('active');
}

const criarCurso = () => {  
    let novoCursoId = document.getElementById('novo_id').value;
    let novoCursoTitulo = document.getElementById('novo_titulo').value;
    let novoCursoImagem = document.getElementById('novo_img').value;
    let novoCursoDescricao = document.getElementById('novo_descricao').value;

    if(novoCursoId == ""){
        window.alert('Digite um ID válido!')
        return false;
    }    

    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == novoCursoId){                       
            return window.alert('Esse ID de curso já existe!');
        }
    }

    dadosCursos.push({
        'id': novoCursoId,
        'titulo': novoCursoTitulo,
        'imagem': novoCursoImagem,
        'descricao' : novoCursoDescricao,
    });

    const novoCurso = document.createElement('div')
    novoCurso.innerHTML = `
    <span class="curso_id">ID: ${novoCursoId}</span>
    <h2 class="curso_titulo">${novoCursoTitulo}</h2>
    <p class="curso_descricao">${novoCursoDescricao}</p>
    <div class="curso_botoes_editar_deletar">
            <button class="curso_botao_editar" onclick="abrirEdicaoCurso(${novoCursoId})">Editar</button>
            <button class="curso_botao_deletar" onclick="deletarCurso(${novoCursoId})">Deletar</button>
        </div>`;
    
    novoCurso.classList.add(`container_curso`);
    novoCurso.setAttribute('id', `${novoCursoId}`);
    document.querySelector('#container').appendChild(novoCurso);    
    document.querySelector('#form').reset();
}


btnCadastroCurso.addEventListener('click', cadastrarCurso);
btnSalvarCurso.addEventListener('click', criarCurso);
btnCancelarCadastroCurso.addEventListener('click', cancelarCriacaoCurso);
btnSalvarEdicaoCurso.addEventListener('click', atualizarCurso);