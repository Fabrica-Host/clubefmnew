# Ativar as atualizações de futebol

A Central do Futebol está implementada. Sem uma chave cadastrada, ela mostra uma seleção de dados consultados em 25/09/2026, com fonte e data visíveis. A publicação não implica que a atualização automática esteja ativa.

## Conta e cobertura

1. Criar ou acessar uma conta em https://dashboard.api-football.com/ .
2. Confirmar que o plano escolhido permite consultar a temporada atual dos seis campeonatos: Brasileirão Séries A e B, Paranaense, Copa do Brasil, Libertadores e Sul-Americana. A cobertura de classificação varia conforme campeonato e fase; jogos eliminatórios não necessariamente têm uma tabela geral.
3. Conferir limites e condições para uso no portal da rádio: https://www.api-football.com/pricing e https://www.api-football.com/terms . Nenhuma assinatura foi contratada na implementação.

## Configuração protegida

Cadastrar `FOOTBALL_API_KEY` como variável secreta do ambiente do servidor e reiniciar a aplicação (ou publicar novamente no Worker). Usar a chave da integração direta API-SPORTS/API-FOOTBALL, enviada ao endereço `https://v3.football.api-sports.io/` pelo cabeçalho `x-apisports-key`.

Nunca inserir a chave em `public/`, em mensagens públicas, no Git ou no manifesto de hospedagem. `.env.example` contém apenas os nomes das variáveis, sem valores. Não é necessário alterar o código para ativar a chave.

`FOOTBALL_SEASON` é opcional: quando não preenchida, o servidor usa o ano atual no fuso de Brasília. Se fixada para uma consulta histórica, a interface passa a exibir essa temporada. O arquivo inicial de 2026 não serve como substituto para outras temporadas.

## Verificação após conectar a conta

Consultar o endpoint do Site para cada valor de `competition`: `serie-b`, `serie-a`, `paranaense`, `copa-brasil`, `libertadores` e `sul-americana`.

- A resposta deve indicar `mode: "connected"`, com datas de consulta recentes e a temporada esperada.
- Conferir os adversários, datas, horários e estádios de alguns jogos contra as publicações oficiais. Não inferir que a Clube transmitirá uma partida apenas porque ela aparece na agenda.
- Confirmar a disponibilidade de classificação na cobertura retornada por `/leagues`; a integração só consulta `/standings` quando esse recurso existe.
- Acompanhar o consumo da conta. As consultas compartilham cache por região de atendimento, mas isso não é uma garantia global de quantidade de chamadas. A escolha do plano deve considerar o público e os limites vigentes.

A implementação descobre os IDs dos campeonatos, consulta `/fixtures` e `/standings`, preserva resultados nulos e identifica a fonte. Jogos são atualizados no máximo a cada dois minutos por cache; tabelas, a cada 30 minutos; metadados de cobertura, uma vez por dia. A página atualiza enquanto a área de futebol está visível e a aba está aberta. Falhas e limite de uso acionam uma pausa antes de novas tentativas.

## Manutenção do conteúdo inicial

O arquivo `public/football-data.json` contém os registros consultados e as respectivas fontes. Ao atualizar esse conteúdo manualmente, alterar `capturedAt` somente depois de consultar a fonte e manter `partialFixtures: true` para uma seleção incompleta de jogos. Não inventar horários, estádios ou resultados ausentes. O aviso de consulta pontual permanece até uma conexão automática bem-sucedida.

Os testes locais verificaram o contrato da integração com respostas simuladas. A cobertura autenticada da conta e a atualização real deverão ser verificadas depois que a chave for cadastrada.
