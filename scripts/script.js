var projets = document.querySelectorAll('.contenu article');
var arr = Array.from(projets);
var activeProject = 0;

loopProjects();

var liensProjets = document.querySelectorAll('.menu li');
var liArr= Array.from(liensProjets);

liArr.forEach(function(li, index) {
  li.addEventListener('click', function() {
    activeProject = index;
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
