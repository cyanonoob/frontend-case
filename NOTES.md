# Notities

- op home was wat content aanwezig, die heb ik nog even boven de meest recente blogs geplaats.
  - eventueel kan dit ook op /blog ook, maar omdat het niet duidelijk was of dat gewenst is, heb ik beide opties een keer toegepast (op home dus wel, op blog dus niet)
- simpele mobiele navigatie met een zwevende toggle
- op een aantal breakpoints textgroottes en andere kleine aanpassingen
- er is geen query mogelijk voor blog topics, dus in deze versie gekozen om dit hardcoded te doen
- geen apart gevuld excerpt oid, gekozen om eerste text-element van de paginacontent te truncaten
- .nvmrc toegevoegd voor de zekerheid, dan is duidelijk waar ik mee heb gedraaid lokaal
- componenten in /components gezet, gekozen voor zowel componenten met pure tailwind classNames, en een paar componenten niet als SFC, in een mapje met index.tsx en sass. Dit veroorzaakt de aanwezige warnings vanwege tailwindcss/no-custom-classnames. Zonder zou dus inderdaad ook kunnen, maar ik vond voor beiden wat te zeggen, en heb daarom als voorbeeld wel een paar keer deze werkwijze gebruikt
- de linter vindt het project zo niet super, mogelijk (deels?) vanwege het vorige punt; ik vermoed dat dat aan andere gewoontes ligt, en als dat zo is, is dat snel aangeleerd
