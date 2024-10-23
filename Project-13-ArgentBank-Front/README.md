# Argent Bank API

Ce codebase contient le code nécessaire pour exécuter le backend d'Argent Bank.

## Prise en Main

### Prérequis

Argent Bank utilise la pile technologique suivante :

- **Node.js v12**
- **MongoDB Community Server**

Assurez-vous d'avoir les bonnes versions et téléchargez les deux packages. Vous pouvez vérifier cela en utilisant les commandes suivantes dans votre terminal :

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de MongoDB
mongo --version

Instructions
Forkez ce dépôt.
Clonez le dépôt sur votre ordinateur.
Ouvrez une fenêtre de terminal dans le projet cloné.
Exécutez les commandes suivantes :
bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev:server

# Peupler la base de données avec deux utilisateurs
npm run populate-db

Votre serveur devrait maintenant fonctionner à http://localhost:3001 et vous aurez deux utilisateurs dans votre base de données MongoDB !
Données de la Base de Données Peuplée
Une fois que vous avez exécuté le script populate-db, vous devriez avoir deux utilisateurs dans votre base de données :
Tony Stark
Prénom : Tony
Nom : Stark
Email : tony@stark.com
Mot de passe : password123
Steve Rogers
Prénom : Steve
Nom : Rogers
Email : steve@rogers.com
Mot de passe : password456
Documentation de l'API
Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs
Design Assets
Des fichiers HTML et CSS statiques ont été créés pour la plupart du site et sont situés dans : /designs.
Pour certaines des fonctionnalités dynamiques, comme la modification du nom d'utilisateur, il existe une maquette dans /designs/wireframes/edit-user-name.png.
Et pour le modèle d'API que vous proposerez pour les transactions, le wireframe peut être trouvé dans /designs/wireframes/transactions.png.
