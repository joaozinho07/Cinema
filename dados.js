// Aqui estamos criando listas com os nomes dos filmes
//let siginifica que estamos criando uma variável
let dados = [ 
    
//Aqui estamos criando objetos com titulo, descrção e o link
    {
        titulo: "Minha Mãe É uma Peça",
        descricao: "Minha Mãe É uma Peça (por vezes divulgado como Minha Mãe É uma Peça - o Filme) é um longa-metragem de comédia brasileiro dirigido por André Pellenz, protagonizado por Paulo Gustavo e escrito pelo mesmo em parceria com Fil Braz. O filme é baseado na peça homônima criada e estrelada pelo próprio Paulo e que levou milhões de espectadores ao teatro ao longo dos anos em cartaz.",
        link: "https://pt.wikipedia.org/wiki/Minha_M%C3%A3e_%C3%89_uma_Pe%C3%A7a", 
        tags: "mae Mae peça peca andre Andre Homonima homonima"
    },
    {
        titulo: "Somos Tão Jovens",
        descricao: "Somos Tão Jovens é um filme brasileiro de 2013, do gênero drama musical, dirigido por Antônio Carlos da Fontoura. O filme narra a história da vida de Renato Russo, líder da banda Legião Urbana, desde a infância até a morte, aos 33 anos.",
        link: "https://pt.wikipedia.org/wiki/Somos_T%C3%A3o_Jovens",
        tags: "Tao tao antonio Antonio legiao Legiao"

    },
     {
        titulo: "Cidade de Deus",
        descricao: "Cidade de Deus é um filme brasileiro de 2002, dos gêneros drama e crime, dirigido por Fernando Meirelles e Kátia Lund. O filme é baseado no livro de mesmo nome de Paulo Lins, que narra a história de um fotógrafo que cresceu no Complexo do Alemão, no Rio de Janeiro, e retrata a violência e o tráfico de drogas na comunidade.",
        link: "https://pt.wikipedia.org/wiki/Cidade_de_Deus_(filme)", 
        tags: "fernando feirelles katia lund Katia paulo lins fotografo Fotografo complexo do Alemao alemao rio janeiro violencia Violencia trafico Trafico"
    },
    {
        titulo: "O Auto da Compadecida",
        descricao: "O Auto da Compadecida é um filme brasileiro de 2000, baseado na peça homônima de Ariano Suassuna. A comédia acompanha as aventuras de João Grilo e Chicó em um mundo fantástico, onde se misturam personagens bíblicos, populares e históricos.",
        link: "https://pt.wikipedia.org/wiki/O_Auto_da_Compadecida_(filme)",
        tags: "ariano suassuna Joao Grilo Chico comédia aventura"
      },
      {
        titulo: "Tropa de Elite 1",
        descricao: "Tropa de Elite é um filme brasileiro de 2007, do gênero policial, dirigido por José Padilha. O filme acompanha o Capitão Nascimento, um oficial do BOPE, que luta contra o tráfico de drogas no Rio de Janeiro.",
        link: "https://pt.wikipedia.org/wiki/Tropa_de_Elite",
        tags: "jose padilha Bope capitao nascimento Rio de Janeiro trafico"
      },
      {
        titulo: "Mariguella",
        descricao: "Mariguella é um filme brasileiro de 2019, do gênero biográfico, dirigido por Wagner Moura. O filme conta a história de Carlos Marighella, um dos principais líderes da luta armada contra a ditadura militar no Brasil.",
        link: "https://pt.wikipedia.org/wiki/Mariguella_(filme)",
        tags: "wagner moura Carlos Marighella ditadura militar"
      },
      {
        titulo: "A Vida Invisível",
        descricao: "A Vida Invisível é um filme brasileiro de 2019, do gênero drama, dirigido por Karim Aïnouz. O filme conta a história de duas irmãs separadas pela família nos anos 1950, no Recife.",
        link: "https://pt.wikipedia.org/wiki/A_Vida_Invisível_(filme)",
        tags: "karim aïnouz Recife irmãs drama"
      },
      {
        titulo: "Tropa de Elite 2",
        descricao: "Continuação do sucesso de 2007, Tropa de Elite 2 aprofunda a discussão sobre a violência urbana no Rio de Janeiro, abordando a corrupção nas forças policiais e o tráfico de drogas.",
        link: "https://pt.wikipedia.org/wiki/Tropa_de_Elite_2",
        tags: "tropa elite corrupcao violencia rio de janeiro policial"
      },
    
      {
        titulo: "Central do Brasil",
        descricao: "Drama emocionante sobre uma mulher que escreve cartas para desconhecidos em uma estação de trem no Rio de Janeiro e se envolve na vida de um menino órfão.",
        link: "https://pt.wikipedia.org/wiki/Central_do_Brasil_(filme)",
        tags: "central do brasil drama rio de janeiro orfao"
      },
      {
        titulo: "Que Horas Ela Volta?",
        descricao: "Drama social que aborda a questão das empregadas domésticas no Brasil, contando a história de uma jovem que retorna para trabalhar na casa onde cresceu.",
        link: "https://pt.wikipedia.org/wiki/Que_Horas_Ela_Volta%3F",
        tags: "drama empregada domestica social"
      },
      
      {
        titulo: "Aquarius",
        descricao: "Drama psicológico que acompanha a luta de uma mulher de meia-idade para defender seu apartamento em um prédio que será demolido para a construção de um novo empreendimento.",
        link: "https://pt.wikipedia.org/wiki/Aquarius_(filme)",
        tags: "drama psicologico apartamento demolicao"
      },
      {
        titulo: "Tropa de Elite 3",
        descricao: "Continuação da franquia que explora a violência policial no Rio de Janeiro.",
        link: "https://pt.wikipedia.org/wiki/Tropa_de_Elite_3",
        tags: "tropa elite policia policial rio de janeiro violencia"
    },
    {
        titulo: "O Menino e o Mundo",
        descricao: "Animação brasileira que conta a história de um menino em busca de seu pai em um mundo colorido e fantástico.",
        link: "https://pt.wikipedia.org/wiki/O_Menino_e_o_Mundo",
        tags: "animacao brasileiro menino mundo fantastico"
    },
    {
        titulo: "Hoje Eu Quero Voltar Sozinho",
        descricao: "Drama adolescente brasileiro que aborda temas como homossexualidade e aceitação.",
        link: "https://pt.wikipedia.org/wiki/Hoje_Eu_Quero_Voltar_Sozinho",
        tags: "drama adolescente homossexualidade lgbt"
    },
    {
        titulo: "Bacurau",
        descricao: "Filme de ficção científica brasileiro que retrata uma pequena cidade que desaparece dos mapas.",
        link: "https://pt.wikipedia.org/wiki/Bacurau",
        tags: "ficcao cientifica brasileiro cidade misterio"
    },
    {
        titulo: "Martírio",
        descricao: "Drama psicológico brasileiro que explora temas como trauma e vingança.",
        link: "https://pt.wikipedia.org/wiki/Martirio_(filme)", // Verificar se existe um filme brasileiro com esse título e link correto
        tags: "drama psicologico trauma vinganca"
    },
    {
        titulo: "Capitão América: O Primeiro Vingador",
        descricao: "Um jovem e frágil soldado é transformado em um super soldado, o Capitão América, para lutar contra as forças do nazismo durante a Segunda Guerra Mundial.",
        link: "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica:_O_Primeiro_Vingador",
        tags: "capitão america vingador primeiro guerra mundial nazismo super soldado"
      },
      {
        titulo: "Capitã Marvel",
        descricao: "Uma piloto da Força Aérea dos Estados Unidos ganha poderes cósmicos e se torna a Capitã Marvel, uma das heroínas mais poderosas do universo Marvel.",
        link: "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Marvel_(filme)",
        tags: "capitã marvel heroína força aérea poderes cósmicos universo marvel"
      },
      {
        titulo: "Homem de Ferro",
        descricao: "Um bilionário industrial constrói uma armadura de alta tecnologia e se torna o Homem de Ferro para combater o terrorismo.",
        link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro_(filme)",
        tags: "homem de ferro tony stark bilionário armadura tecnologia terrorismo"
      },
      {
        titulo: "Homem de Ferro 2",
        descricao: "Tony Stark enfrenta novos desafios enquanto tenta equilibrar sua vida pessoal com suas responsabilidades como o Homem de Ferro.",
        link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro_2",
        tags: "homem de ferro tony stark sequencia tecnologia vilão"
      },
      {
        titulo: "O Incrível Hulk",
        descricao: "Um cientista transformado em um monstro gigante luta para controlar seus poderes e encontrar uma cura.",
        link: "https://pt.wikipedia.org/wiki/O_Incr%C3%ADvel_Hulk_(filme_de_2008)",
        tags: "hulk bruce banner cientista monstro poderes raiva"
      },
      {
        titulo: "Thor",
        descricao: "Thor, o poderoso deus do trovão, é banido para a Terra após iniciar uma guerra. Destituído de seus poderes, ele deve aprender a ser digno para retornar a Asgard e impedir que seu irmão Loki conquiste os nove reinos.",
        link: "https://pt.wikipedia.org/wiki/Thor_(filme)",
        tags: "thor asgard loki poderes deus trovao"
      },
      {
        titulo: "Os Vingadores",
        descricao: "Após a invasão de Nova York, Nick Fury reúne uma equipe de super-heróis, os Vingadores, para proteger a Terra de ameaças globais. Juntos, eles enfrentam o Deus da Mentira, Loki, e seu exército.",
        link: "https://pt.wikipedia.org/wiki:Os_Vingadores",
        tags: "vingadores nick fury loki nova york super herois"
      },
      {
        titulo: "Homem de Ferro 3",
        descricao: "Tony Stark/Homem de Ferro tem sua tecnologia e reputação destruídas por um misterioso inimigo. Forçado a construir novas armas para salvar o mundo, ele descobre o verdadeiro significado de ser um herói.",
        link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro_3",
        tags: "homem de ferro tony stark tecnologia vingadores"
      },
      {
        titulo: "Thor: O Mundo Sombrio",
        descricao: "Thor enfrenta uma antiga ameaça que coloca os nove reinos em perigo. Com a ajuda de Jane Foster, ele deve impedir que o Mundo Sombrio destrua Asgard.",
        link: "https://pt.wikipedia.org/wiki/Thor:_O_Mundo_Sombrio",
        tags: "thor asgard jane foster mundo sombrio"
      },
     
]; 

