# Integrações e continuidade de serviço

| Recurso | Implementação e dependência | Ação na transferência |
| --- | --- | --- |
| Rádio ao vivo | Navegador acessa https://play.wisestream.io/clubefmlondrina | Manter serviço de streaming; verificar restrições de domínio, HTTPS e reprodução após toque |
| Vídeo | YouTube via youtube-nocookie.com; vídeo jiaiWsClQzA | Confirmar vídeo e permissão de incorporação; é uma transmissão específica, não descoberta automática de novo ao vivo |
| Data/hora | Navegador, fuso America/Sao_Paulo | Não necessita API; depende do relógio do dispositivo |
| Previsão | `/api/weather` → MET Norway, coordenadas de Londrina | Liberar HTTPS para api.met.no; identificação da aplicação usa domínio do build e e-mail comercial da rádio |
| Dólar | `/api/dollar` → BCB PTAX; alternativa SGS série 1 | Liberar olinda.bcb.gov.br e api.bcb.gov.br; respeitar data da cotação, que não equivale a preço bancário em tempo real |
| Futebol | `/api/football?competition=...` → API-FOOTBALL ou snapshot | Configurar FOOTBALL_API_KEY no servidor e validar cobertura/plano/temporada |
| Programação, podcasts, promoções | Supabase atual da rádio | Preservar conta e permissões; homologar no novo domínio |
| Notícias e músicas | Funções Supabase news-feed e connectmix-music | Preservar funções e seus serviços externos; código destas funções não faz parte do ZIP |
| Inscrição em promoções | POST direto à tabela remota promotion_participants | Dados continuam no backend atual, não neste servidor; validar política de acesso e processo de consulta da rádio |
| Pedidos musicais e contatos | Fluxos do frontend/WhatsApp | Conferir números e destino antes de publicar; não há disparo automático pelo servidor deste pacote |
| Publicidade | public/advertisers.js, imagens locais e landing Samaritano | Edição em código; não inclui novo painel de gestão de anúncios |

## Backend de conteúdos

A configuração está no início de `public/content.js`:
- API: https://qybnuekpexpfyhjoujou.supabase.co
- station_id: 8f3cead2-369d-4dde-8f1c-bb50822fd33f
- PUBLIC_KEY: chave publicável destinada ao navegador, já presente no arquivo.

A entrega não transfere propriedade da conta Supabase, dados de participantes, políticas RLS, funções remotas ou painel administrativo. Se o contrato com o fornecedor atual terminar, a rádio deve obter a continuidade desses serviços ou exportação/migração do backend. Sem isso, os conteúdos podem ficar limitados à cópia inicial, e inscrições/serviços remotos podem falhar. Não substituir a chave publicável por chave service_role no navegador.

Não foram enviadas inscrições de teste ao banco real nesta entrega. Na homologação, combinar um registro identificado de teste com a rádio, confirmar recebimento no painel e sua remoção pelo responsável.

## Futebol

Competições: serie-a, serie-b, paranaense, copa-brasil, libertadores, sul-americana.
Sem chave privada, o site mostra a consulta pontual de 25/09/2026, com data e aviso. Libertadores está incluída; a apresentação de confrontos ou tabela depende da fase e dos dados disponíveis. Não confundir ausência de classificação por pontos em mata-mata com ausência do campeonato.

Para dados automáticos: conta API-FOOTBALL com cobertura da temporada e de cada competição, chave direta API-SPORTS, limites de uso adequados e validação de respostas `mode: connected`. Consulte `FOOTBALL_SETUP.md`. Não há assinatura contratada ou chave privada no pacote. Cache é por processo/região; múltiplas réplicas podem aumentar consumo. Os dados iniciais são datados e precisam de manutenção enquanto a integração não estiver ativa.

## Manutenção

Editar textos/layout em public/. Anúncios em public/advertisers.js e folhas correspondentes; Samaritano em public/samaritano.html. Programação/podcasts/promoções usam dados remotos e o fallback public/content-data.json. Fontes de conteúdo em SOURCES.md. Compilar e reiniciar/publicar após alterações de arquivos. Guardar backups versionados e registros de implantação.

Imagens, textos, marcas e mídia remota permanecem vinculados às respectivas autorizações de uso; a entrega técnica não transfere contas de terceiros nem direitos de conteúdo externo.
