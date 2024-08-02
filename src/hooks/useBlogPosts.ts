'use client';

import { useState, useMemo, useEffect } from 'react';
import { IPost, TPostTag } from '@/src/types';

const posts: IPost[] = [
  {
    title: 'Com interpretar les dades del vostre sistema Mica',
    summary:
      'Guia pas a pas per entendre i utilitzar les dades proporcionades pel vostre sistema Mica per estalviar aigua.',
    tag: 'Manual',
    content: `
Entendre les dades que proporciona el vostre sistema Mica és clau per reduir el consum d'aigua. Aquesta guia us ajudarà a interpretar la informació i a prendre decisions informades sobre el vostre ús d'aigua.

## Entenent el tauler de control

El tauler de control de Mica us proporciona una visió general del vostre consum d'aigua. Aquí trobareu:

1. Consum total diari
2. Comparació amb la mitjana del barri
3. Desglossament per categories d'ús

## Interpretació de les categories d'ús

El nostre model d'IA categoritza el vostre consum d'aigua en diferents tipus d'ús. Les categories més comunes són:

- Dutxa
- Aigüera de cuina
- Vàter
- Rentadora
- Rentavaixelles
- Reg

Per a cada categoria, podeu veure el volum d'aigua utilitzat i la freqüència d'ús.

## Consells per estalviar aigua basats en les dades

Basant-vos en les dades de Mica, aquí teniu alguns consells per reduir el consum:

1. Si el vostre ús de la dutxa és alt, considereu instal·lar un capçal de dutxa de baix flux o reduir el temps de dutxa.
2. Per a un alt consum en l'aigüera de la cuina, proveu d'utilitzar un bol per rentar les verdures en lloc d'aigua corrent.
3. Si el vàter consumeix molta aigua, valoreu la instal·lació d'un model de doble descàrrega.
4. Per a la rentadora i el rentavaixelles, assegureu-vos d'utilitzar-los només quan estiguin plens.

## Detecció de fuites

Mica pot ajudar-vos a detectar fuites identificant un consum d'aigua inusual o constant. Si veieu un ús d'aigua constant en períodes on normalment no n'hi hauria (com a la nit), podria indicar una fuita.

Recordeu, cada petit canvi compta. Amb Mica, teniu les eines per prendre decisions informades sobre el vostre consum d'aigua i contribuir a un futur més sostenible.`,
    slug: 'com-interpretar-les-dades-del-vostre-sistema-mica',
  },
  {
    title: "L'impacte ambiental de l'estalvi d'aigua: Com la tecnologia intel·ligent pot ajudar",
    summary:
      "Exploració en profunditat de com l'estalvi d'aigua afecta el medi ambient i com la tecnologia intel·ligent com Mica pot marcar la diferència.",
    tag: 'Article',
    content: `
L'aigua és un recurs preciós i limitat, i el seu ús responsable és crucial per a la sostenibilitat del nostre planeta. A mesura que les poblacions creixen i el canvi climàtic intensifica les sequeres, la conservació de l'aigua s'ha convertit en una prioritat global. En aquest article, explorarem l'impacte ambiental de l'estalvi d'aigua i com la tecnologia intel·ligent, com el sistema Mica, pot jugar un paper crucial en aquest esforç.

## L'estat actual del consum d'aigua

A Espanya, el consum mitjà d'aigua per persona és d'aproximadament 132 litres al dia. Això pot semblar poc, però quan es multiplica per milions de llars, l'impacte és significatiu. A més, en àrees propenses a la sequera com Barcelona, l'ús eficient de l'aigua és encara més crucial.

## L'impacte ambiental de l'estalvi d'aigua

1. **Conservació d'ecosistemes**: Reduir el consum d'aigua ajuda a mantenir els nivells dels rius i aqüífers, protegint així els ecosistemes aquàtics.

2. **Reducció d'emissions de CO2**: El tractament i la distribució d'aigua requereixen energia. Menys consum d'aigua significa menys energia utilitzada i, per tant, menys emissions de CO2.

3. **Preservació de recursos**: L'aigua dolça representa només el 3% de l'aigua del planeta. Conservar-la és crucial per a les generacions futures.

## Com la tecnologia intel·ligent està canviant el joc

Sistemes com Mica estan revolucionant la manera com entenem i gestionem el nostre consum d'aigua:

1. **Consciència en temps real**: Amb dades en temps real, els usuaris poden veure immediatament l'impacte dels seus hàbits.

2. **Detecció primerenca de problemes**: La tecnologia intel·ligent pot detectar fuites o anomalies abans que es converteixin en problemes greus.

3. **Anàlisi personalitzada**: L'IA pot proporcionar consells adaptats a cada llar, maximitzant l'eficiència.

4. **Gamificació de l'estalvi**: Algunes aplicacions converteixen l'estalvi d'aigua en un joc, incentivant canvis de comportament positius.

## El futur de la conservació de l'aigua

A mesura que la tecnologia avança, podem esperar:

- Integració amb altres sistemes domèstics intel·ligents per una gestió més holística dels recursos.
- Ús de l'aprenentatge automàtic per predir i optimitzar el consum d'aigua.
- Col·laboració entre ciutats intel·ligents i llars intel·ligents per una gestió de l'aigua a escala urbana.

## Conclusió

L'estalvi d'aigua no és només una responsabilitat individual, sinó un esforç col·lectiu amb un impacte ambiental significatiu. Amb l'ajuda de la tecnologia intel·ligent com Mica, cada llar pot contribuir a un futur més sostenible. Cada gota compta, i amb les eines adequades, podem assegurar-nos que cada gota s'utilitzi de manera intel·ligent.`,
    slug: 'impacte-ambiental-estalvi-aigua-tecnologia-intelligent',
  },
];

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<IPost[]>(posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<TPostTag | 'Tot'>('Tot');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'Tot' || post.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  useEffect(() => {
    setBlogPosts(posts);
  }, []);

  return {
    posts,
    filteredPosts,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
  };
}
