
      function rechercheFonctionnelle() {
        const recherche = document.getElementById('recherche').value;
        const elements = document.querySelectorAll('*');
        const resultat = [];

        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const texteElement = element.textContent || element.innerText;

          if (texteElement.includes(recherche)) {
            resultat.push(element);
          }
        }

        return resultat;
      }

      function afficherResultats() {
        const resultat = rechercheFonctionnelle();
        const resultatsDiv = document.getElementById('resultats');

        resultatsDiv.innerHTML = '';

        if (resultat.length === 0) {
          resultatsDiv.innerHTML = 'Aucun résultat.';
        } else {
          resultat.forEach(function(element) {
            const lien = document.createElement('a');
            lien.href = '#';
            lien.textContent = element.nodeName;
            lien.onclick = function() {
              element.scrollIntoView({behavior: 'smooth'});
              return false;
            };
            const ligne = document.createElement('p');
            ligne.appendChild(lien);
            resultatsDiv.appendChild(ligne);
          });
        }
      }

      document.getElementById('recherche').addEventListener('input', afficherResultats);