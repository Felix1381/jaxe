# Configuration Gmail SMTP - JAXE TECH

Ce guide explique comment configurer l'envoi automatique d'emails via Gmail SMTP pour le formulaire de contact.

## 🚀 Pourquoi Gmail SMTP ?

✅ **Aucune limitation** sur les destinataires  
✅ **Gratuit** et illimité pour un usage normal  
✅ **Fiable** et bien connu  
✅ **CC/BCC** fonctionnent avec n'importe quelle adresse  
✅ **Facile à configurer** avec votre Gmail existant  

## 📋 Étapes de configuration

### 1. Activer l'authentification à 2 facteurs

**OBLIGATOIRE** : Vous devez avoir l'authentification à 2 facteurs activée sur votre compte Gmail.

1. Allez sur [myaccount.google.com](https://myaccount.google.com/)
2. Cliquez sur "Sécurité"
3. Activez "Validation en 2 étapes" si ce n'est pas déjà fait

### 2. Générer un mot de passe d'application

1. Toujours dans "Sécurité", trouvez "Mots de passe d'application"
2. Sélectionnez "Autre (nom personnalisé)"
3. Tapez "JAXE TECH Website" ou un nom de votre choix
4. Cliquez sur "Générer"
5. **COPIEZ** le mot de passe de 16 caractères (ex: `abcd efgh ijkl mnop`)

⚠️ **IMPORTANT** : Ce mot de passe ne s'affichera qu'une seule fois !

### 3. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Votre adresse Gmail (celle qui enverra les emails)
GMAIL_USER=votre.email@gmail.com

# Mot de passe d'application Gmail (16 caractères)
GMAIL_APP_PASSWORD=abcdefghijklmnop

# Email principal de réception (peut être n'importe quelle adresse)
CONTACT_EMAIL=contact@jaxetech.com

# Emails en copie (optionnel)
CC_EMAILS=manager@jaxetech.com,support@jaxetech.com

# Emails en copie cachée (optionnel)
BCC_EMAILS=archive@jaxetech.com,backup@jaxetech.com
```

## 📧 Fonctionnalités

### Email à l'entreprise (JAXE TECH)
Quand un utilisateur soumet le formulaire :
- ✅ Email principal reçoit le message
- ✅ CC reçoivent une copie visible
- ✅ BCC reçoivent une copie cachée
- ✅ Informations complètes du contact
- ✅ Design professionnel

### Email de confirmation à l'utilisateur
L'utilisateur reçoit automatiquement :
- ✅ Confirmation de réception
- ✅ Récapitulatif de sa demande
- ✅ Informations de contact de JAXE TECH
- ✅ Design aux couleurs de la marque

## 🧪 Test du système

### Test en développement

1. Configurez votre `.env.local`
2. Lancez le serveur : `npm run dev`
3. Allez sur la page de contact
4. Remplissez et soumettez le formulaire
5. Vérifiez tous vos emails (TO, CC, BCC)

### Test en production

1. Déployez sur Vercel
2. Configurez les variables d'environnement dans Vercel :
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_EMAIL`
   - `CC_EMAILS` (optionnel)
   - `BCC_EMAILS` (optionnel)
3. Testez le formulaire sur le site en production

## 🔧 Exemples de configuration

### Configuration simple (un seul destinataire)
```bash
GMAIL_USER=votre.email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=votre.email@gmail.com
```

### Configuration équipe
```bash
GMAIL_USER=contact@jaxetech.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=contact@jaxetech.com
CC_EMAILS=felix@jaxetech.com,manager@jaxetech.com
BCC_EMAILS=archive@jaxetech.com
```

### Configuration avec plusieurs Gmail
```bash
GMAIL_USER=votre.email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=contact@gmail.com
CC_EMAILS=collegue1@gmail.com,collegue2@gmail.com
```

## 🚨 Dépannage

### Erreur "Invalid login"
- Vérifiez que l'authentification à 2 facteurs est activée
- Vérifiez que le mot de passe d'application est correct
- Régénérez un nouveau mot de passe d'application si nécessaire

### Emails non reçus
- Vérifiez le dossier spam de tous les destinataires
- Vérifiez que les adresses email sont correctes
- Testez d'abord avec une seule adresse

### Erreur "Less secure app access"
- Cette erreur n'arrive plus avec les mots de passe d'application
- Utilisez TOUJOURS un mot de passe d'application, jamais votre mot de passe Gmail normal

## 🔒 Sécurité

### Bonnes pratiques :
- ✅ Utilisez TOUJOURS un mot de passe d'application
- ✅ Ne partagez jamais votre mot de passe d'application
- ✅ Utilisez des variables d'environnement
- ✅ N'incluez jamais `.env.local` dans Git
- ✅ Régénérez le mot de passe si compromis

### Variables d'environnement sécurisées :
- **Développement** : `.env.local` (ignoré par Git)
- **Production** : Variables d'environnement Vercel

## 📊 Avantages vs Resend

| Fonctionnalité | Gmail SMTP | Resend |
|---|---|---|
| Destinataires | ✅ Illimité | ❌ Emails vérifiés uniquement |
| CC/BCC | ✅ Fonctionne | ❌ Limitations sandbox |
| Coût | ✅ Gratuit | ✅ Gratuit (limité) |
| Configuration | ✅ Simple | ❌ Complexe (domaine) |
| Fiabilité | ✅ Excellente | ✅ Excellente |

## 💡 Conseils

1. **Testez d'abord** avec une seule adresse
2. **Utilisez votre Gmail personnel** pour commencer
3. **Configurez un Gmail dédié** pour la production
4. **Surveillez les quotas Gmail** (500 emails/jour max)
5. **Sauvegardez votre mot de passe d'application** en sécurité

---

**Support :** Si vous rencontrez des problèmes, consultez la [documentation Gmail SMTP](https://support.google.com/mail/answer/7126229) ou vérifiez vos paramètres de sécurité Google.
