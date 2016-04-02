// contacts
(function(){
    var contact = document.getElementById('contact'),
        texte = "<p>This website have been designed for a data visualization course from <a href='http://www.ensae.fr' target='_blank'>Ensae ParisTech</a>. You can contact us using the following links, or <a href='mailto:sociosexologuesdudimanche@ntymail.com?Subject=A%20propos%20de%20votre%20site%20de%20dataviz'> write to the whole team as well !</a></p>",
        contacts = [ {
                nom : 'The one who has the good ideas',
                lien : 'https://www.linkedin.com/in/marie-beigelman-955a8397'
            },{
                nom : 'The one who has been super motivated from the start',
                lien : 'https://www.linkedin.com/in/ptanneau' ,
            },{
                nom : "The one whose mother likes to help for english stuff",
                lien : 'https://fr.linkedin.com/in/kim-montalibet-1a01a265' ,
            },{
                nom :'The one who likes to code at night',
                lien : 'https://fr.linkedin.com/in/romaindamian' ,
            }
        ];

    for (i = 0,n=contacts.length;i<n;i++){
        texte = texte + "<p><a href=" + contacts[i].lien + " target='_blank'>"+contacts[i].nom+"</a></p>"
    }

    contact.innerHTML = texte ;
})();

// ScrollTo
$(document).ready(function() {
				$('.scrollTo').click( function() { // Au clic sur un élément
					var page = $(this).attr('href'); // Page cible
					var speed = 900; // Durée de l'animation (en ms)
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
					return false;
				});
			});
