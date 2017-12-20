var projets = document.querySelectorAll('.contenu article');
var arr = Array.from(projets);
var activeProject = 0;

loopProjects();

var liensProjets = document.querySelectorAll('.menu li');
var liArr= Array.from(liensProjets);

liArr.forEach(function(li, index) {
  li.addEventListener('click', function() {
    if (activeProject === index) {
      activeProject = 0;
    } else {
      activeProject = index;
    }
    loopProjects();
  });
});

function loopProjects() {
  arr.forEach(function(projet, index) {
    if (index === activeProject) {
      showProject(index);
      return;
    };
    hideProject(index);
  });
  dimensionBarreGauche();
  dimensionBarreDroite();
}

function getProjectMenuItem(index) {
  var p = arr[index];
  var id = p.getAttribute('id');
  return document.querySelector('#' + 'lien-' + id);
}

function showProject(index) {
  var p = arr[index];
  p.classList.remove('cache');
  getProjectMenuItem(index).querySelector('p').classList.remove('cache');
}

function hideProject(index) {
  var p = arr[index];
  p.classList.add('cache');
  getProjectMenuItem(index).querySelector('p').classList.add('cache');
}

var barreGauche = document.querySelector('.gauche .bar');
var menuGauche = document.querySelector('.gauche .menu');
var contenuMenuGauche = document.querySelector('.gauche .menu ul');

var barreDroite = document.querySelector('.droite .bar');
var contenuDroite = document.querySelector('.droite .contenu');
function getContenuContenuDroite() { return document.querySelector('.droite .contenu article:not(.cache)'); };

function dimensionBarreGauche() {
  var barreGauche = document.querySelector('.gauche .bar');
  var menuGauche = document.querySelector('.gauche .menu');
  var contenuMenuGauche = document.querySelector('.gauche .menu ul');
  var hauteurContenuMenu = contenuMenuGauche.getBoundingClientRect().height;
  var hauteurMenu = menuGauche.getBoundingClientRect().height;
  barreGauche.style.height = hauteurMenu - Math.abs(hauteurContenuMenu - hauteurMenu) + 'px';
}

function dimensionBarreDroite() {
  var barreDroite = document.querySelector('.droite .bar');
  var contenuDroite = document.querySelector('.droite .contenu');
  var hauteurContenuContenuDroite = getContenuContenuDroite().getBoundingClientRect().height;
  var hauteurContenu = contenuDroite.getBoundingClientRect().height;
  barreDroite.style.height = hauteurContenu - Math.abs(hauteurContenuContenuDroite - hauteurContenu) + 'px';
}

menuGauche.addEventListener('scroll', function(){
  var hauteurContenuMenu = contenuMenuGauche.getBoundingClientRect().height;
  var hauteurMenu = menuGauche.getBoundingClientRect().height;
  var hauteurBarre = barreGauche.getBoundingClientRect().height;
  var pourcentageScroll = menuGauche.scrollTop / ( hauteurMenu - hauteurBarre );
  var decalageBarre = pourcentageScroll * ( hauteurMenu - hauteurBarre );
  if (decalageBarre - hauteurBarre > hauteurMenu ) {
    decalageBarre = hauteurMenu - hauteurBarre;
  }
  barreGauche.style.transform = 'translateY(' + decalageBarre + 'px)';
});

contenuDroite.addEventListener('scroll', function(){
  var hauteurContenuContenuDroite = getContenuContenuDroite().getBoundingClientRect().height;
  var hauteurContenuDroite = contenuDroite.getBoundingClientRect().height;
  var hauteurBarre = barreDroite.getBoundingClientRect().height;
  var pourcentageScroll = contenuDroite.scrollTop / ( hauteurContenuDroite - hauteurBarre );
  var decalageBarre = pourcentageScroll * ( hauteurContenuDroite - hauteurBarre );
  if (decalageBarre - hauteurBarre > hauteurContenuDroite ) {
    decalageBarre = hauteurContenuDroite - hauteurBarre;
  }
  barreDroite.style.transform = 'translateY(' + decalageBarre + 'px)';
});
