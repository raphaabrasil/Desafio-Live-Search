# Desafio Live Search

Desenvolva um componente de Live Search baseado na imagem abaixo (o visual não precisa ser exatamente igual). Você pode escolher as tecnologias que quiser (mas não vale usar plugins prontos de Live Search). Estaremos avaliando tanto a parte client-side como backend.

Junto ao código, envie as instruções necessárias para rodar o projeto localmente, incluindo todas as dependências (bonus points para um Makefile :)).

<img src="https://lh5.googleusercontent.com/CNvM8n7VxHGMgc7EXxG07ot1_VpsJeIfGi-jEElo-nzVP0fj8LN5gGJJNIaUD3cLSdw39EhnWBPkBa9a6pQPZtx-Yp0e2WKO1KLdJTGaDuLkXchJvXSp5stp8kBFihSJ_g" />

<b>Requisitos:</b>

O live search deve ser atualizado conforme o usuário digita o termo de busca no campo de texto;
A busca deve ignorar a diferença entre letras maiúsculas/minúsculas (case insensitive) e acentos;
Caso algum ítem da seção "highlights" no JSON de resultado seja compatível com a busca do usuário através da chave "queries", o mesmo deve ser exibido como no exemplo "Pop & Arte" acima, com a logo, e clicável para sua URL;
Caso algum termo da seção "suggestions" seja compatível com a busca, o mesmo deve aparecer como "Sugestões de busca", com um link para http://g1.globo.com/busca/?q=<TERMO PESQUISADO>
(Opcional, bônus) Diferenciar os caracteres que deram match no resultado do live search aplicando <b>negrito</b>.

		 	 	 		
O projeto deve estar "pronto para produção" em termos de:

Formatação e estruturação do código;
Performance (client e server);
Segurança.


<b>Dados para consulta (JSON):</b>

https://gist.github.com/daviferreira/5564afa89c7bd0c9672c
