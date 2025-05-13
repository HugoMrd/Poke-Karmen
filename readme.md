# Pokédex TypeScript

Un Pokédex moderne développé avec TypeScript, React et NestJS, permettant de rechercher et afficher les caractéristiques des Pokémon.

## 📋 Description

Cette application est structurée en deux parties :
- Un backend NestJS qui communique avec la PokeAPI
- Un frontend React qui affiche l'interface utilisateur

L'application permet aux utilisateurs de rechercher un Pokémon par son numéro et d'afficher ses principales caractéristiques (nom, image, types, taille, poids, statistiques).

## 🚀 Démarrage rapide

### Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation et démarrage

#### Backend (pokemon-api)

```bash
# Aller dans le répertoire du backend
cd pokemon-api

# Installer les dépendances
npm install
npm install @nestjs/axios axios

# Lancer le serveur en mode développement
npm run start:dev
```

Le backend sera accessible sur [http://localhost:3001](http://localhost:3001)

#### Frontend (pokemon-client)

```bash
# Aller dans le répertoire du frontend
cd pokemon-client

# Installer les dépendances
npm install

# Lancer l'application React
npm start
```

Le frontend sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📱 Utilisation

1. Ouvrez l'application dans votre navigateur (http://localhost:3000)
2. Entrez un numéro de Pokémon dans le champ de recherche (ex: 100 pour Voltorb)
3. Cliquez sur "Search" pour afficher les informations du Pokémon

## 📂 Structure du projet

Selon la structure actuelle des fichiers :

```
project/
├── pokemon-api/                # Backend NestJS
│   ├── dist/                   # Dossier de build (généré)
│   ├── node_modules/           # Dépendances
│   ├── src/
│   │   ├── pokemon/            # Module Pokémon
│   │   │   ├── dto/            # Objets de transfert de données
│   │   │   ├── pokemon.controller.ts
│   │   │   ├── pokemon.module.ts
│   │   │   └── pokemon.service.ts
│   │   ├── app.controller.ts   # Contrôleur principal
│   │   ├── app.module.ts       # Module principal
│   │   ├── app.service.ts      # Service principal
│   │   └── main.ts             # Point d'entrée
│   ├── test/                   # Tests
│   ├── .gitignore
│   ├── .prettierrc
│   ├── nest-cli.json
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.build.json
│   └── tsconfig.json
│
└── pokemon-client/             # Frontend React
    ├── node_modules/           # Dépendances
    ├── public/                 # Fichiers statiques publics
    ├── src/
    │   ├── components/         # Composants React
    │   ├── services/           # Services pour les appels API
    │   ├── styles/             # Fichiers CSS/styles
    │   ├── types/              # Définitions de types TypeScript
    │   ├── App.tsx             # Composant principal
    │   ├── App.styled.ts       # Styles du composant principal (styled-components)
    │   ├── App.test.tsx        # Tests pour le composant App
    │   ├── index.css           # Styles globaux
    │   ├── index.tsx           # Point d'entrée
    │   ├── logo.svg            # Logo de l'application
    │   └── react-app-env.d.ts  # Déclarations pour Create React App
    ├── .gitignore
    ├── jest.config.js          # Configuration des tests
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json
```

## 🔄 API Backend

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/pokemon/:id` | GET | Récupère les informations d'un Pokémon par son ID |

## 🛠️ Fonctionnalités

- Recherche de Pokémon par ID
- Affichage des informations:
  - Nom et numéro
  - Image
  - Types (avec code couleur)
  - Taille et poids
  - Statistiques de base

## 🔧 Technologies utilisées

- **Frontend**:
  - React
  - TypeScript
  - Styled Components (selon App.styled.ts dans la structure)

- **Backend**:
  - NestJS
  - TypeScript
  - Module HTTP/Axios pour communiquer avec la PokeAPI

## 🛡️ Sécurité

- Le backend est configuré avec CORS pour n'accepter que les requêtes du frontend
- Validation des entrées côté backend
- Gestion appropriée des erreurs

## 💡 Commandes utiles

### Backend (pokemon-api)

```bash
# Développement
npm run start:dev     # Démarrer avec hot reload

# Construction
npm run build         # Compiler l'application

# Production
npm run start:prod    # Exécuter en mode production

```

### Frontend (pokemon-client)

```bash
# Développement
npm start             # Démarrer en mode développement

# Tests
npm test              # Exécuter les tests
```