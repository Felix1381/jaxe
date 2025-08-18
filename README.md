# JAXE TECH - Site Web Professionnel

Site web professionnel pour JAXE TECH, une agence digitale basée au Togo spécialisée dans le développement web et mobile.

## 🚀 Fonctionnalités

- ✨ Design moderne et professionnel
- 🌙 Mode sombre complet
- 📱 Responsive design
- ⚡ Animations fluides
- 🎨 Interface utilisateur optimisée
- 🔧 Built with Next.js 15 + TypeScript

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte GitHub/GitLab/Bitbucket
- Compte Vercel
- Repository Git du projet

### Étapes de déploiement

1. **Connecter le repository**
   - Allez sur [Vercel](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre repository Git

2. **Configuration automatique**
   - Vercel détecte automatiquement Next.js
   - Build Command: `npm run build` (configuré automatiquement)
   - Output Directory: `.next` (configuré automatiquement)

3. **Variables d'environnement** (si nécessaire)
   - Aucune variable spéciale requise pour ce projet
   - Le thème est géré côté client avec localStorage

4. **Déployer**
   - Cliquez sur "Deploy"
   - Vercel build et déploie automatiquement

### Configuration avancée

Le projet inclut un fichier `vercel.json` avec:
- Headers de sécurité optimisés
- Cache optimisé pour les assets statiques
- Configuration des régions (Europe)

### URLs de production
- URL principale: `https://votre-projet.vercel.app`
- Domaine personnalisé: Configurable dans les paramètres Vercel

## 🛠️ Technologies utilisées

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Theme**: Dark/Light mode avec système de préférence

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- 📱 Mobile (320px+)
- 📟 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
