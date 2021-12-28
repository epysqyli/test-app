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

"Index" e' la pagina principale ed ospita una barra di ricerca, importata dal componente /components/SearchBar.jsx.

Questo componente contiene la logica per effettuare la chiamata api all'endpoint previsto da Github.
Nello specifico, searchUsers() e' un metodo asincrono che al suo interno richiama la funzione searchByUsername() 
importata dal file lib/apiCalls. Questo ultimo metodo esegue al suo interno il metodo cacheCall(), il quale permette 
di salvare nella cache i risultati delle ricerche recenti ed evitare di eseguire una chiamata api esterna nei casi
che lo permettono
