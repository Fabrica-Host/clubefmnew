# Clube FM Londrina — sources

Researched 16 September 2026. No audience metrics, daily timetable, presenter identities or currently playing music are invented.

- Existing website and stream configuration: https://radioclubefmlondrina.com.br/
- Official live audio: https://ice.fabricahost.com.br/clubefmlondrina
- Instagram, tagline, address and WhatsApp: https://www.instagram.com/clubefmlondrina95.7/
- Facebook: https://www.facebook.com/clubefmlondrina95.7/
- YouTube: https://www.youtube.com/@clubefmlondrina95.7
- User-supplied video: https://www.youtube.com/live/jiaiWsClQzA . YouTube oEmbed confirms Londrina x Ponte Preta, Série B round 28, 15 September 2026. Displayed as replay.
- Jornal da Clube: https://www.youtube.com/watch?v=3XphzUS6lA4
- Bola na Rede: https://www.facebook.com/clubefmlondrina95.7/videos/programa-bola-na-rede-1%C2%AA-edi%C3%A7%C3%A3o-10092026/1231371599176000/
- Café com a Adma: https://www.facebook.com/clubefmlondrina95.7/videos/programa-caf%C3%A9-com-a-adma-14092026/1377307971222946/
- Android app: https://play.google.com/store/apps/details?id=com.enetbras.clubefm

## Assets

- Official original logo: https://radioclubefmlondrina.com.br/wp-content/uploads/2024/09/FM-CLUB.png
- Promotional photograph from official WordPress media library: https://radioclubefmlondrina.com.br/wp-content/uploads/2024/09/C0003568-6.jpg . No caption, photographer or public license stated. It is not identified as station staff or the actual Clube studio.
- Local typography: Barlow Condensed 800; DM Sans 400/700. Source: Google Fonts.

## Behavior and validation

The original static website is authored in public and served by a small Worker with read-only weather, currency and football endpoints. Audio connects only after user action. Player state follows media events, provides a 22-second connection timeout and links to the original player on failure. The radio is paused before loading the video. YouTube's native controls manage video playback. Volume and media session controls are optional browser features.

Program names are verified. No unverified iOS app link or third-party webmail administration link is included.

WebMCP is progressive enhancement. Live WebMCP validation is unavailable without explicitly requested browser QA in this execution profile; playback and navigation do not depend on it.

## Complete station portal — September 2026 update

The user supplied the fuller reference https://www.clubefmlondrina.com.br/ after the initial design. The following public pages and their published content were consulted on 16 September 2026:

- https://www.clubefmlondrina.com.br/programacao — all 88 active schedule entries across seven days, including presenter names and official program artwork.
- https://www.clubefmlondrina.com.br/podcasts — Café com Adma, Jornal da Clube and Clube S.A.; their three currently published video episodes are played on demand, with dates.
- https://www.clubefmlondrina.com.br/promocoes — Palpiteiro da Clube and its existing public registration fields.
- https://www.clubefmlondrina.com.br/comercial — Eduardo Cazarim, the published number (43) 9935-2198, WhatsApp https://wa.me/554399352198 and comercial@clubefmlondrina.com.br. The commercial text is summarized, without audience or conversion claims.
- https://www.clubefmlondrina.com.br/ — music rankings, ConnectMix catalog, news categories, WhatsApp participation, prayer requests and public streaming configuration.
- https://play.wisestream.io/clubefmlondrina — the current portal's live audio URL. Both this URL and the initial Icecast URL returned HTTP 200 with audio/mpeg; the player now uses the current portal URL.

The public portal uses https://qybnuekpexpfyhjoujou.supabase.co for its browser client. The new site uses the same intentionally publishable browser key and limits queries to station `8f3cead2-369d-4dde-8f1c-bb50822fd33f`. It reads active schedule entries, active podcasts, published episodes, active promotions and the existing news-feed/connectmix-music public functions. No administrator session, service-role key, participant list or other private table is accessed. Published manual news was checked with the portal's station and active filters; there were no articles.

`public/content-data.json` contains a public content snapshot for prompt initial rendering and graceful service outages. The site refreshes the active public content, with visible source dates. Rankings show the latest recorded date rather than pretending that a song is currently playing. News cards display only titles, dates, source labels and links; full third-party stories are not copied. Official program, promotion and podcast artwork is served locally in optimized WebP form; artist portraits use the ConnectMix URLs with local copies for the featured six artists.

Promotion submissions use the exact existing public insert contract, with the station and promotion IDs, after confirming that the promotion is still active. Only a successful server response produces a success message; errors preserve the form and advise checking the radio if confirmation is uncertain. No test registration was sent to production. The playlist selector searches the 780-track public catalog and opens a user-confirmed WhatsApp message, limited to 20 tracks; it does not claim to save a playlist or confirm message delivery.

Schedule anomalies are preserved as published: weekday Madrugada Clube 00:00–06:50 overlaps Coração Sertanejo and Clube no Agro; Saturday Madrugada da Clube 00:00–06:00 overlaps Coração Sertanejo 05:00–08:00; Sunday overnight music overlaps Monday's early schedule. The current-program banner avoids claiming a unique current program when entries overlap. The source's apparent template slogan “Curitiba” is not reproduced; the station's Londrina identity and address are retained.

Verification includes JavaScript syntax, HTML IDs/anchors, local assets, seven-day counts, public API content and CORS preflights for the new origin, audio response checks and simulated UI behavior with mocked external requests. Source-site DNS and hosting are unchanged by this publication; the new Site remains on its existing public URL. The earlier pending custom-domain entry for radioclubefmlondrina.com.br is distinct from this fuller reference domain and was not modified.


## Persistent navigation and local services — September 2026

The service bar and main navigation remain sticky while scrolling. A floating back-to-top anchor appears after 280 px of scrolling, above the measured audio-player height. Anchor targets reserve the measured navigation height, and back-to-top honors reduced motion. Date and time always use America/Sao_Paulo (Londrina/Brasília), independent of the visitor timezone.

Weather uses MET Norway Locationforecast 2.0 for Londrina (-23.3103, -51.1628): https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=-23.3103&lon=-51.1628 . Its terms permit commercial use under CC BY 4.0: https://api.met.no/doc/TermsOfService and https://api.met.no/ . Attribution, the license, and the Portuguese adaptation are disclosed in the forecast dialog. Values are model forecasts, explicitly described as estimates, not measured sensor observations. Daily ranges are taken from available forecast timestamps, identified accordingly. Only an estimate within 90 minutes of the visitor's current time is displayed in the top bar.

Currency uses BCB's public PTAX period endpoint, ordering by dataHoraCotacao descending, over the last 15 days, with official SGS series 1 as a fallback: https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados/ultimos/1?formato=json . The interface specifies PTAX sale/reference, not a trading price, and always displays the quote date; details preserve four decimal places. Official description: https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios/resource/ae69aa94-4194-45a6-8bae-12904af7e176 .

The dependency-free Worker serves existing assets and fixed /api/weather and /api/dollar routes, without account or secret requirements. Server-side weather requests identify the application with its URL and public station contact in User-Agent, as required by MET Norway. Weather caching follows upstream Expires (one hour fallback); currency is cached for 30 minutes. Concurrent requests share an in-flight result, and provider failures have a one-minute cooldown. No arbitrary proxy destination is accepted. Visible tabs refresh weather every 15 minutes and PTAX every 30 minutes; hidden tabs do not poll. Failed updates show an error and retain dated prior data when available, without inventing values.

Build: npm run build bundles public assets plus worker/index.mjs into dist/server/index.js; the Worker hosting manifest omits static. No JavaScript package dependencies were added.

Validation for this update: provider responses were checked against the live official services; UI tests used those captured schemas with mocked requests. The build, local Worker handler, asset byte integrity, cache/expiry/error handling, BCB fallback, Brasília date rollover, service dialogs, scrolling controls, hidden-tab behavior and stale-data suppression passed. The existing 88-entry schedule, podcast playback coordination, music selection and promotion-form simulations also passed. No production form submission or browser QA was performed.

## Central do Futebol — 16 September 2026

The football hub is linked from the persistent main menu and appears before the radio schedule. It includes a Londrina feature, six competition selectors, games/results and standings tabs, period/round filters, an all-teams/Londrina filter, match details and an explicit link to listen to the existing radio stream. Switching competitions and opening match details do not interrupt audio. A scheduled fixture does not imply that the station will broadcast it.

The initial release has no API credential. `public/football-data.json` contains a dated selection of 38 confirmed fixtures/results across Série A, Série B, Paranaense, Copa do Brasil, Libertadores and Sul-Americana, plus the complete 20-team Série A and Série B tables. All six selections are marked partial. The interface identifies the consultation date, source and lack of automatic updates. Missing stadiums or times remain explicitly unknown; null scores do not become 0–0. Historical snapshots never produce an in-progress match indicator.

Sources consulted on 16 September 2026:

- https://londrinasaf.com.br/futebol/jogos — Londrina results, upcoming opponents and dates. The next confirmed match is Londrina–Fortaleza, 20 September at 18:30 Brasília, at Vitorino Gonçalves Dias in Londrina. Later fixtures do not receive guessed stadium names.
- https://www.espn.com.br/futebol/classificacao/_/liga/bra.2 — complete Série B standings; Londrina has 28 points from 28 matches. The stale 25-point table on the club homepage was not used.
- https://www.espn.com.br/futebol/classificacao/_/liga/bra.1/temporada/2026 — complete Série A standings.
- https://www.espn.com.br/futebol/calendario/_/liga/bra.1 and https://www.espn.com.br/futebol/calendario/_/liga/bra.2 — selected published fixtures with dates, times and venues when available.
- https://www.espn.com.br/futebol/calendario/_/liga/conmebol.libertadores and https://www.espn.com.br/futebol/calendario/_/liga/conmebol.sudamericana — four confirmed fixtures/results for each competition. Ambiguous cached in-progress results were omitted.
- https://federacaopr.com.br/noticias/campeonato-brasileiro/operario-vence-o-londrina-fora-de-casa-em-duelo-paranaense-na-serie-b/ — Londrina–Operário Série B result, time and venue.
- https://federacaopr.com.br/noticias/paranaense/operario-londrina-paranaense-2026/ and https://federacaopr.com.br/noticias/paranaense/saiba-como-assistir-a-volta-da-final-do-paranaense-2026-e-a-2a-rodada-da-segundona/ — Paranaense final on 7 March, 0–0 with Operário winning the shootout 4–3, at Estádio do Café, 16:00.
- https://federacaopr.com.br/noticias/vagner-pega-penalti-no-ultimo-lance-e-operario-elimina-o-londrina-pela-copa-do-brasil/ — Copa do Brasil fourth-round result on 17 March; no kickoff time is inferred.

The snapshot copies factual fixture and standings fields, with attribution and links. It does not reproduce articles or institute runtime scraping of ESPN, CBF, FPF or the club site. Fixture-level source URLs are retained in the snapshot and detail dialog.

`worker/football.mjs` implements a fixed, read-only `/api/football?competition=…` adapter for API-FOOTBALL. Its contract follows the provider's official guide: https://www.api-football.com/news/post/how-to-get-started-with-api-football-the-complete-beginners-guide . The hosted `FOOTBALL_API_KEY` secret is sent only as the upstream `x-apisports-key` header. Competition IDs are discovered from `/leagues`, with the selected season and published coverage checked before querying `/fixtures` and `/standings`. League metadata is cached for one day, fixtures for two minutes and standings for 30 minutes, with in-flight coalescing and provider-error/quota cooldowns. Cache timestamps remain the actual fetch time. Unsupported parameters and competitions are rejected, and the endpoint is not an arbitrary proxy.

Missing credentials or provider failures return the clearly dated snapshot. A snapshot from a different season is never substituted. Automatic client requests run only while the football area and browser tab are visible. A stale in-progress score loses its live label. No API account, paid subscription, credential, or authenticated current-season coverage was available during implementation; those remain activation requirements, described in `FOOTBALL_SETUP.md`.

Validation: the production build and local Worker handler passed checks for all six snapshots, league discovery, provider response normalization, standings coverage, null scores, coalesced caching, unsupported input, season isolation, rate limiting and failure fallback. Provider requests in these tests were mocked; they do not establish authenticated live coverage. DOM simulations verified the two full tables, Londrina feature, filters, keyboard tabs, match/penalty details, external-text escaping, offline states and uninterrupted radio playback. Existing schedule, podcasts, music-selection, promotion-form and local-service checks passed again. No production registration, external message, or browser QA was performed.


## Advertiser rotation — Samaritano example

The user requested a rotating advertiser banner and explicitly supplied the Samaritano offer: family funeral assistance and online doctors 24 hours, R$29.90/month. The first campaign uses that exact price and those benefits; the second promotes the Clube commercial contact without claiming a paid partnership or audience figures. The official Samaritano page https://www.samaritanoassistencias.com.br/ was consulted and confirms the Plus offer at R$29.90/month. The application waiting period of 20 days and 12-month minimum term follow the user's newer explicit instructions; no claim of immediate application access is made. Funeral assistance is subject to its own contractual conditions and waiting periods. The call to action opens the official advertiser website, without submitting data or starting a purchase.

The official Samaritano logo was reused from the existing supplied-brand asset in the Sou Mais Ágape project. The family photograph was generated for this advertisement and is described as illustrative; it does not depict actual clients or medical staff. Asset: public/assets/samaritano-family.webp. No third-party tracking or advertising SDK was added.

The initial campaign is randomly selected. Visible campaigns rotate after 12 seconds without immediate repetition. Readers can navigate directly or pause; rotation also pauses on hover, keyboard focus, hidden tabs and off-screen placement. Reduced-motion visitors start with rotation paused. Without JavaScript, the Samaritano campaign and its link remain available. Both campaigns share a reserved grid area to avoid page jumps. Existing programming, football, services and audio behavior are unchanged.


## Originalli residential insurance advertisement

User-supplied offer: R$59.90/month for residential insurance, listing fire/lightning/explosion, electrical equipment damage, theft, appliance repair, drain unblocking, pest control and more. No insurer, insured limits or claim acceptance is invented. A short line directs readers to policy conditions, limits and deductibles. The WhatsApp CTA uses the explicitly supplied (43) 3375-9800 number, normalized to 554333759800, and opens a prefilled enquiry without sending it. Official originAlli SVG branding is reused from the existing Originalli project. The residential photograph is generated and labelled illustrative. Added as the third available campaign in the existing randomized, pausable rotation (display order Samaritano, Originalli, Clube).


## Baruc Acessórios advertisement

User-provided identity: https://www.instagram.com/barucacessorios.83/ and http://www.barucacessorios.com.br/ . The indexed official Instagram bio, consulted 16 September 2026, identifies a store specializing in accessories and technical assistance for mobile phones and tablets. Both HTTP and HTTPS website retrieval returned 502 during research, and direct Instagram retrieval was unavailable. The primary campaign CTA therefore opens the supplied Instagram profile; the supplied website is retained as a secondary link. No price, discount, address, warranty, product model, official repair accreditation or inventory availability is claimed.

An exact official logo/photo could not be retrieved; unrelated Baruc jewelry brands were excluded. BARUC ACESSÓRIOS is rendered as plain typeset text, not presented as an official logo. The charcoal/mint composition is an original ad design, not a claim about the company's official brand palette. A generated, unbranded accessories still life is explicitly labelled illustrative and does not represent verified inventory. The campaign joins the existing randomized rotation with a dedicated Baruc selector; existing campaign controls and radio audio are preserved.


## Persistent programming strip

Moved the existing current/next-program strip into the sticky navigation wrapper, with a compact responsive layout. The existing ResizeObserver measures the combined height to keep anchor targets clear. Replaced the header audio button with a full schedule anchor; the fixed bottom radio player and existing in-content listening controls remain functional. Football match listening now delegates to the persistent bottom player, preserving the playing-state check. No broadcast schedule entries or audio source changed.


## Player placement refinement

Following the user's attached player screenshot, moved the existing functional player into the sticky top wrapper immediately above the programming strip, and removed the redundant Ver programação header shortcut. There is still exactly one audio element and one persistent player, preserving play/pause, volume, status and error handling. Removed bottom player spacing and reset its bottom-occupancy measurement to zero; navigation height includes the relocated player. No screenshot is used in place of the working player.


## Compact mobile navigation and player

On widths up to 980px and short coarse-pointer screens up to 1180px, the existing menu and toggle move into the player row, keeping one visible logo and the same bound controls. Desktop restores their original locations. The menu exposes Participe pelo WhatsApp; the extra player participation link, volume slider, Na sua sintonia label and next-show detail are hidden in compact mode. Phone landscape compresses service and schedule strips while retaining date/time, weather and currency controls. The schedule shortcut reads Confira a programação throughout. Opening the menu does not interrupt audio.


## Samaritano sales-copy refinement

At the user's explicit request, removed the waiting-period, minimum-term and contractual-conditions paragraph from the promotional banner. The advertisement still identifies the two services and R$29.90/month; it makes no immediate-access, no-waiting-period or cancellation promise. The CTA continues to the official advertiser website for the commercial presentation. Headline: Cuidar da sua família pode ser mais simples. CTA: Quero esse cuidado. Retained the existing happy-family illustrative photograph to communicate togetherness and reassurance rather than bereavement. This edit does not change the product conditions.


## Samaritano campaign redesign and landing page

Rebuilt the banner with an orange funeral-benefit panel, medical and psychological care highlights, a prominent Plus price and WhatsApp CTA. Existing happy-family photography is paired with a newly generated generic doctor photograph; both are expressly illustrative, not actual staff or customers. Logo remains the supplied official asset.

The public official site https://www.samaritanoassistencias.com.br/ and its /planos page, consulted 16 September 2026, confirm Plus at R$29.90/month and family funeral assistance. The home page specifically lists online psychology and urn, wake and documentation included. Those specific expenses are advertised; the unsupported blanket promise “all expenses paid” is not used. The word family is not used to create an unlimited list of covered relatives. No waiting periods or minimum terms were reintroduced into the banner, as requested. The landing page sends visitors to the commercial team for covered expenses and dependent inclusion.

Verified public contact: https://www.instagram.com/samaritanoassistencias/ and https://www.facebook.com/samaritanoassistencias/ publish WhatsApp (43) 3375-9848 and Rua Ibiporã, 595, Londrina. The official website gives sales telephone 0800 400 6800. Google Maps opens a business-name/address search, not an unverified claimed business profile or review page.

Added /samaritano.html as a focused sales landing page with the same offer, medical care, online psychology, funeral service explanation and commercial contact. The advertisement links to the landing page, official site, Instagram, Facebook, Google Maps and a prefilled WhatsApp enquiry. Links never send messages or submit contracts automatically. No analytics, external script, form capture, payment flow, or fabricated testimonials were added.


## Unified desktop and mobile header — 25 September 2026

Removed the separate logo/menu header row. One shared row now contains the single station logo, main navigation and existing live player controls. At compact widths the menu becomes a dropdown within that same row; no menu reparenting or duplicated player is needed. Date/weather/currency and current/next-program bands are shortened. Audio, volume, participation, full programme access and measured anchor offsets remain connected to their existing handlers.

## Football refresh and compact sections — 25 September 2026

- Updated Serie A and Serie B standings (20 clubs each) from Gazeta Esportiva's current championship pages, consulted 25 September 2026. Checked points, games played and goal-difference arithmetic for all 40 rows.
- Refreshed selected upcoming fixtures: Serie B round 30, Serie A round 29, and semifinals of Copa do Brasil, Libertadores and Sul-Americana. Sources: https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/ ; https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-b/ ; https://www.gazetaesportiva.com/campeonatos/copa-do-brasil/ ; https://www.gazetaesportiva.com/campeonatos/libertadores-da-america/ ; https://www.gazetaesportiva.com/campeonatos/copa-sulamericana/ . Rechecked the completed Paranaense final against https://www.gazetaesportiva.com/campeonatos/paranaense/ .
- Copa do Brasil's placeholder 00:00 is treated as an unconfirmed time; uncertain venues remain unspecified. No live API access is claimed. Partial-fixture and consultation-date notices remain visible. Preserved previously verified completed results; removed superseded unplayed schedules from the snapshot.
- Added Anunciantes to header and footer navigation. Reduced podcast, promotion and news cover heights and card spacing while retaining complete titles and controls.
