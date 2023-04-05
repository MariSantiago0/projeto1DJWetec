#HTML

##Para estruturar o corpo da página, criei uma div principal para organizar todos os elementos, incluindo as imagens que serão randomizadas, o título da página, uma breve descrição do conteúdo e um botão com uma função onclick para randomizar as imagens.

#CSS

##No CSS, estilizei o título da página e o parágrafo, alterando suas cores e fontes para torná-los mais legíveis e atraentes para o usuário. Em seguida, personalizei o botão, ajustando sua cor, borda e fonte para que ele se destaque e seja facilmente clicável. Por fim, modifiquei a div principal, ajustando suas margens e bordas para garantir um espaçamento adequado entre os elementos e melhorar a aparência geral da página.

#Javascript

##Para criar um botão na minha página que troca aleatoriamente as imagens exibidas, comecei criando uma função chamada "trocar". Em seguida, adicionei essa função ao botão usando a tag "onclick".
Dentro da função "trocar", comecei obtendo o id da imagem atual, que será usada posteriormente. Depois, criei uma nova variável usando a função Math.random() para gerar um número aleatório entre 0 e 1. Em seguida, multipliquei esse número pelo número total de imagens na minha pasta para obter um índice aleatório que corresponde a uma imagem específica.
Com o índice aleatório em mãos, usei o id da imagem para localizá-la e atualizar o valor do atributo "src" para o caminho da imagem correspondente ao índice aleatório gerado. Isso fará com que a imagem exibida na página seja trocada por uma imagem aleatória da minha pasta.
Para garantir que as imagens sejam trocadas aleatoriamente sempre que o botão for clicado, coloquei todo o código dentro de um loop while que executa indefinidamente até que o botão seja clicado novamente ou a página seja atualizada.


