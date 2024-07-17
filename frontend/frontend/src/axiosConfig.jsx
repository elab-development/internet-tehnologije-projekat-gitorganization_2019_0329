import axios from 'axios';


// Preuzimanje CSRF tokena iz meta taga
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
console.log(csrfToken);
// Postavljanje CSRF tokena u zaglavlje
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// Opcionalno: Omogućavanje kolačića za autentifikaciju
axios.defaults.withCredentials = true;



export default axios;
