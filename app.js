function pesquisar () {
  
    //aqui estamos indo no documento HTML, O ponto é para colocarmo o getElementById que seria: busque o elemento pelo id dele e ai abrimos parenteses com aspas e colocamos o nome do id ("resultados-pesquisa") 
    let section = document.getElementById("resultados-pesquisa");

    // o value representa o que escrevemos dentro do campo de pesquisa/input
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    
    // se campoPesquisa for uma string sem nada
    //se o usuario pesquisar algo sem digitar nada no input, o sistema não trará todos os resultados da lista
    if (!campoPesquisa){
        section.innerHTML = '<p class="mensagem-erro">Nada foi encontrado. Você precisa digitar o nome de um filme ou autor</p>'
        return
    }

    //caso o usuário dê um espaço e pesquise, o site não irá listar todos os itens da lista
    if (!campoPesquisa.trim()) {
        section.innerHTML = '<p class="mensagem-erro"> Você precisa digitar algo para pesquisar. </p>';
        return; // Interrompe a função se o campo estiver vazio
      }
    
    //Essa funcionalidade faz com que o input busque palavras com Letras maiúsculas ou minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //para cada dado dentro da lista de dados
    // Itera sobre cada dado na lista de dados
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se o titulo includes campoPesquisa
        // se o titulo ou a descrição tem o conteúdo que a gente pesquisou, o if vai pegar o elemento html e exibir na tela, se não tiver, então nada vai acontecer. 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //A funcionalidade ${dado.titulo}, nos poupa de ficar redigitando todos os titulos, descrições e links
            //O + antes do = ele está somando um dado ao outro, por exemplo: let dado = "Minha mãe é uma peça" + "Somos Tão Jovens" + "Cidade de Deus";
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
        };
    };

    if (!resultados){
        resultados = '<p class="mensagem-erro">Nada foi encontrado</p>';
    }

    

    // A o invés de ficarmos chamando innerHTML 30 mil vezes dentro do for, colocamos tudo dentro de resultados que vamos receber 1 (uma) vez só o resultado
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
};



