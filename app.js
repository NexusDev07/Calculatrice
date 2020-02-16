document.getElementById('addition');
function addition() {
    var nbr1 = prompt('Choisissez un premier nombre :');
    var nbr2 = prompt('Choisissez un deuxième nombre :');
    if (nbr1 >= 0) {

        if (nbr2 >= 0) {

            var addnbr1 = prompt('Voulez-vous ajouter un autre nombre à calculer ? Oui (o), Non (n)');

            if (addnbr1 == 'O' || addnbr1 == 'o') {

                nbradded1 = prompt('Choisisez un troisième nombre :');

                if (nbradded1 >= 0) {

                    var resultat = alert(Number(nbr1) + Number(nbr2) + Number(nbradded1));

                } else {

                    alert('Le troisième facteur est erroné');

                }

            } else {

                var resultat = alert(Number(nbr1) + Number(nbr2));
            }

        } else {

            alert('Le deuxième facteur est erroné');

        }

    } else {

        alert('Le premier facteur est erroné');

    }
}

document.getElementById('soustraction');
function soustraction() {
    var nbr3 = prompt('Choisissez un premier nombre :');
    var nbr4 = prompt('Choisissez un deuxième nombre :');
    if (nbr3 >= 0) {

        if (nbr4 >= 0) {

            var addnbr2 = prompt('Voulez-vous ajouter un autre nombre à calculer ? Oui (o), Non (n)');

            if (addnbr2 == 'o' || addnbr2 == 'O') {

                var nbradded2 = prompt('Choisisez un troisième nombre :');

                if (nbradded2 >= 0) {

                    var resultat2 = alert(Number(nbr3) - Number(nbr4) - Number(nbradded2));

                } else {

                    alert('Le troisième facteur est erroné');

                }

            } else {

                var resultat2 = alert(Number(nbr3) - Number(nbr4));

            }

        } else {

            alert('Le deuxième facteur est erroné');

        }

    } else {

        alert('Le premier facteur est erroné');

    }
}

document.getElementById('multiplication');
function multiplication() {
    var nbr5 = prompt('Choisissez un premier nombre :');
    var nbr6 = prompt('Choisissez un deuxième nombre :');
    if (nbr5 >= 0) {

        if (nbr6 >= 0) {

            var addnbr3 = prompt('Voulez-vous ajouter un autre nombre à calculer ? Oui (o), Non (n)');

            if (addnbr3 == 'o' || addnbr3 == 'O') {

                var nbradded3 = prompt('Choisissez un troisième nombre :');

                if (nbradded3 >= 0) {

                    var resultat3 = alert(Number(nbr5) * Number(nbr6) * Number(nbradded3));

                } else {

                    alert('Le troisième nombre est erroné');

                }

            } else {

                var resultat3 = alert(Number(nbr5) * Number(nbr6));

            }

        } else {

            alert('Le deuxième facteur est erroné');

        }

    } else {

        alert('Le premier facteur est erroné');

    }
}

document.getElementById('division');
function division() {
    var nbr7 = prompt('Choisissez un premier nombre :');
    var nbr8 = prompt('Choisissez un deuxième nombre :');
    if (nbr7 >= 0) {

        if (nbr8 >= 0) {

            var addnbr4 = prompt('Voulez-vous ajouter un autre nombre à calculer ? Oui (o), Non (n)');

            if (addnbr4 == 'o' || addnbr4 == 'O') {

                var nbradded4 = prompt('Choisissez un troisième nombre :');

                if (nbradded4 >= 0) {

                    var resultat4 = alert(Number(nbr7) / Number(nbr8) / Number(nbradded4));
                    var reste = alert('Reste : ' + Number(nbr7) % Number(nbr8) % Number(nbradded4));

                } else {

                    alert('Le troisième facteur est erroné');

                }

            } else {

                var resultat4 = alert(Number(nbr7) / Number(nbr8));
                var reste = alert('Reste : ' + Number(nbr7) % Number(nbr8));

            }

        } else {

            alert('Le deuxième facteur est erroné');

        }

    } else {

        alert('Le premier facteur est erroné');

    }
}