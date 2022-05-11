### Groupe
Dacisac Maxime - Galland Corentin - Lopes Jérémy

# Fletnix
![](https://gitlab.iut-clermont.uca.fr/madacisac/fletnix/-/raw/master/documents/icon.png)

Fletnix est une application qui permet de découvrir/chercher des films ou des séries et de les ajouter dans ses favories ou sa liste "à regarder plus tard". Mais cette application possède aussi d'autres fonctionnalités.

## PWA
Voici le lien de la [PWA](https://fletnix-f4987.web.app)

## Les fonctionnalités

### Connexion/Inscription
Sur l'application il est possible de se connecter afin de retrouver son contenu sur toutes les plateformes grâce à Firebase.

### La page d'accueil
Elle affiche un film qui est en tendance du jour et propose différentes listes de films et de séries populaires ou en tendance de la semaine en cours.

### La page de recherche
Elle permet de rechercher un film ou une série et d'afficher son détail.

### Les pages Favoris et À voir
Elles listent les différents médias préalablement ajoutés à ces sections, cependant il faut être connecté pour qu'elles affichent du contenu.

### La modale de prévisualisation
Elle permet d'afficher un aperçu du détail du film.

### La page du détail du média
Elle affiche, pour l'instant, que les bandes annonces en plus que la prévisualisation.

## Base de données
Comme pour l'authentification, la base de données est relié à Firebase avec la persistence d'activé afin de garder les données même coupé d'internet.

## API
Pour cette application nous utilisons l'API de [The Movie Database](https://www.themoviedb.org)

## Capacitor
### Haptics
Quand on clique sur l'un des boutons présent dans le composent Spotlight on a un retour haptique lorsque nous somme sur un smartphone.

### Network et Dialog
Network permet de connaitre l'état du réseau et lorsque que celui-ci est à l'état déconnecté une popup de dialogue apparait pour avertire l'utilisateur.
