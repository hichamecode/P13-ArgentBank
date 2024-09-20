

class CookieHandler {

  static getCookie(name: string): string | null {

    // ajout d'un espace pour la simplifier la lecture du cookie, traitement du retour 
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  static setCookie(name: string, token: string, days: number) {

    // (24*60*60*1k) nombre de millisecondes dans un jour 
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString(); // Calcul de la date d'expiration
    document.cookie = `${name}=${token}; expires=${expires}; path=/`;
  }

  static eraseCookie(name: string) {
    // Pour effacer un cookie, on le définit avec une date d'expiration dans le passé
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

export default CookieHandler;

