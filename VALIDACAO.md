# Registro de validação — 25/09/2026

Origem: commit 48b2f90073f8eae1fa59ce6e9cb345378fc498e4.
Exportação em pasta separada, sem modificar o site publicado.

Executados com Node.js v24.19.0:
- Build portátil concluído: 49 arquivos públicos incorporados.
- npm test: 66 verificações de rotas aprovadas.
- Servidor Node iniciado em porta dinâmica e encerrado ao término.
- Páginas e recursos locais responderam 200; HEAD sem corpo; ETag/304.
- Rotas desconhecidas, .env e fonte privada responderam 404; POST no servidor respondeu 405.
- Seis competições retornaram fallback identificado como snapshot sem chave.
- Falhas simuladas nas fontes de clima/dólar retornaram 503 com no-store.

Não executados: implantação no provedor real; build/execução Docker; publicação em nova conta Cloudflare; Passenger/Plesk; teste visual e de mídia em navegador na nova hospedagem; cobertura com chave real de futebol; envios ao backend de promoções; troca DNS. As configurações de infraestrutura são exemplos e precisam de homologação.

O teste de erro de APIs usa simulação. Ele não comprova disponibilidade das fontes externas no momento da futura publicação. O teste HTTP não comprova aparência responsiva nem reprodução de áudio.

Para repetir: npm run build e npm test. Para verificar integridade em Linux: sha256sum -c SHA256SUMS.txt antes de editar/recompilar.
