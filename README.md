# SimpleCRM Facturation en Ligne

Ce projet vise à développer une solution de facturation en ligne (*SAAS*) pour les entreprises qui émettent leurs propres factures moyennant un abonnement mensuel (*Subscription Model*). Les besoins croissants en matière de gestion de la facturation ont conduit ces entreprises à rechercher des solutions "tout-en-un" leur permettant de gérer leur comptabilité et leurs approvisionnements.

## Fonctionnalités

La solution de facturation proposera les fonctionnalités suivantes :

- Création de fiches Entreprise
- Création de fiches de Produits
- Gestion des fiches Clients
- Gestion des réapprovisionnements chez les fournisseurs
- Établissement des factures

## Règles de Gestion

Les règles de gestion incluent :

- Les clients peuvent créer des factures avec un ou plusieurs produits
- Chaque facture concerne un seul client
- Chaque produit peut être acheté chez un ou plusieurs fournisseurs
- Chaque entreprise peut gérer les factures, les clients et le stock des produits, et s'approvisionner chez ses fournisseurs en cas de rupture de stock

## User Stories

En tant que responsable commercial, je souhaite pouvoir gérer la liste des clients, fournisseurs, factures et commandes.

## Attentes de SimpleCRM

SimpleCRM attend :

- Modélisation et création de la base de données
- Développement d'une API pour gérer les activités commerciales des clients (entreprises abonnées)

## Technologies à Utiliser

Les technologies à utiliser sont :

- Environnement *Node.js* et *Express* pour créer un serveur web
- Base de données centralisée *MYSQL* pour stocker toutes les activités commerciales et les informations clients
- *Prisma* est recommandé comme ORM, mais vous pouvez également utiliser *TypeORM*.

---


