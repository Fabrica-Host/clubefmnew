# Informações para o provedor responder

- Nome do provedor, plano e painel utilizado.
- Existe Node.js 24 (ou pelo menos 22), terminal/build, variáveis e processo persistente?
- Existe Docker, VPS ou suporte a Workers? Qual opção o provedor administrará?
- Qual é o domínio principal: clubefmlondrina.com.br ou radioclubefmlondrina.com.br? Com ou sem www?
- Quem administra DNS, certificado HTTPS, backup e e-mail?
- O provedor pode disponibilizar subdomínio de homologação antes da troca?
- A rádio manterá a conta Supabase e o serviço de streaming atuais? Quem detém o acesso administrativo?
- Quem fornecerá e pagará, se necessário, a conta API-FOOTBALL?
- Quem será responsável pelas atualizações de anúncios e conteúdos após a entrega?

Não enviar senhas por mensagem aberta. Usar acesso delegado ou canal seguro definido pelo provedor.

# Homologação antes da troca

- Abrir início, futebol, programação, podcasts, músicas, promoções, notícias, anunciantes, comercial e landing Samaritano.
- Conferir navegação por âncoras com cabeçalho fixo, publicidade completa, menu e ausência de excesso horizontal em desktop e celular vertical/horizontal.
- Ouvir/pausar rádio, ajustar volume e conferir reprodução em celulares; abrir vídeo e episódios.
- Confirmar grade atual e conteúdo remoto, notícias e músicas.
- Validar inscrição de teste autorizada e recebimento no backend da rádio.
- Verificar todos os contatos e links dos anunciantes, sem enviar mensagens involuntárias.
- Conferir `/api/weather` e `/api/dollar`: resposta JSON, fonte/data e apresentação de indisponibilidade quando houver falha.
- Conferir seis competições de futebol, temporada, classificação/confrontos, datas e estádios; se contratado, verificar atualização conectada.
- Verificar HTTPS, redirecionamentos, domínio principal, páginas inexistentes e acesso bloqueado a arquivos .env/código privado.
- Registrar backup e procedimento de retorno; preservar registros DNS de e-mail.
- Anotar versão de Node/Worker, data de publicação e responsável técnico.

# Texto para encaminhar junto com o ZIP

Prezados, segue o pacote técnico do novo site Clube FM Londrina 95.7, com código-fonte, imagens, versão compilada, adaptador Node.js e documentação. Solicitamos verificar a opção compatível com o plano atual, instalar primeiro em homologação e informar os requisitos para a troca do domínio. O site possui APIs de clima, dólar e futebol; portanto, a simples cópia de HTML para public_html não entrega todas as funções. O backend atual de conteúdos e inscrições da rádio deve continuar disponível ou ser migrado separadamente. Favor seguir LEIA-ME-HOSPEDAGEM.md e o checklist antes de substituir o site em produção.
