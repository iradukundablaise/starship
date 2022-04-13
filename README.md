Pour lancer le tp, il faut d'abord installer NodeJs et NPM qui sera utilisé par le programme, veuillez utiliser les commandes de terminal suivantes.

```bash
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm
```

## Lancer l'application

Avant d'exécuter l'application, nous devons nous assurer que tous les fichiers nécessaires à notre application sont générés.

Nous devons d'abord être dans le dossier principal du tp:

```bash
$ cd tp-starship
```

Installation de tous les modules de node du tp en exécutant cette commande:

```bash
npm install
```

Lancer la compilation des fichiers:

```bash
npm run build
```

Après avoir compilé tous les fichiers nécessaires à l'exécution du tp, il est maintenant temps d'ouvrir et de tester le tp dans un navigateur internet (firefox, chrome, etc.). 

Pour lancer le programme dans, veuillez utiliser les commandes de terminal suivantes:

Pour firefox:

```bash
firefox dist/index.html
```

Pour Google Chrome:
```bash
google-chrome dist/index.html
```

Pour les autres navigateurs, il suffit d'ouvrir le fichier index.html qui se trouve dans le dossier dist.


