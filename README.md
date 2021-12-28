# Setup applicazione

```bash
npm install
npm run dev
```

Per eseguire i test `npm run test`.

# Scopo

L'applicazione permette la ricerca di utenti github tramite [l'api ufficiale](https://docs.github.com/en/rest).

Nello specifico, la ricerca avviene tramite username di login.

# Struttura

L'app si presenta su due pagine, "index" e "history".
In /compoenents sono presenti tutti i componenti utilizzati all'interno delle due pagine.
La cartella /lib contiene le funzioni per interfacciarsi con le api esterne e per gestire il localStorage.
In /tests troviamo ovviamente i test, i quali utilizzano jest.


"Index" e' la pagina principale ed ospita una barra di ricerca, importata dal componente /components/SearchBar.jsx.

Questo componente contiene la logica per effettuare la chiamata api all'endpoint previsto da Github.
Nello specifico, searchUsers() e' un metodo asincrono che al suo interno richiama la funzione searchByUsername() 
importata dal file lib/apiCalls. Questo ultimo metodo esegue al suo interno il metodo cacheCall(), il quale permette 
di salvare nella cache i risultati delle ricerche recenti ed evitare di eseguire una chiamata api esterna nei casi
che lo permettono

Una volta avviata la ricerca, i risultati vengono salvati nello state della pagina "Index" e ciclati sul componente UserResult.
Questo permette di essere reindirizzati alla pagina profilo github dell'utente.

Le keywords recenti vengono salvate su localStorage per permetterne la persistenza temporanea, i metodi che si
occupano della gestione di questo processo sono raccolti in lib/storageService. In particolare, le keywords vengono
aggiunte in un array all'interno di localStorage denominato "history" ogni volta che una ricerca viene avviata tramite il metodo
addToHistory() in SearchBar.jsx.

Si accede alla pagina "history" tramite il footer. In questa pagina vengono elencate le parole chiave cercate di recente. Cliccando su
una di esse si viene riportati alla pagina "index", la mostra il risultato in cache della ricerca.

"History" permette tramite l'icona a forma di cestino di pulire la cronologia di ricerca e risultati in cache.
