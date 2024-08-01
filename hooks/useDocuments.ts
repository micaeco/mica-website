'use client';

import { useState, useMemo, useEffect } from 'react';
import { Document, DocsCategory } from '@/types/types';

const Documents: Document[] = [
  {
    title: 'Preguntes freqüents sobre Mica',
    summary: 'Respostes a les preguntes més comunes sobre el sistema de monitoratge d\'aigua Mica.',
    category: 'FAQs',
    content: `
## Què és Mica i com funciona?

Mica és un sistema innovador dissenyat per ajudar les llars a reduir el consum d'aigua. El nostre sistema utilitza un sensor intel·ligent instal·lat a la canonada principal d'entrada d'aigua de casa vostra. Aquest sensor recull dades sobre el vostre consum d'aigua i les envia a una passarel·la mitjançant ràdio. La passarel·la, connectada al vostre Wi-Fi domèstic, transmet aquestes dades de forma segura a la nostra base de dades.

El que fa que Mica sigui únic és el nostre model d'intel·ligència artificial avançat. Aquest model analitza les vostres dades de consum d'aigua i les categoritza en diferents esdeveniments, com ara dutxes, ús de l'aigüera, rentadora, etc. Això us proporciona una visió detallada del vostre consum d'aigua, ajudant-vos a identificar àrees on podeu estalviar.

## Quant costa el sistema Mica?

Com a organització sense ànim de lucre, el nostre objectiu és fer que Mica sigui el més assequible possible. El preu exacte pot variar segons els costos dels components i la instal·lació, però ens esforcem per mantenir-lo al mínim. El cost cobreix els components de maquinari (sensor i passarel·la), el desenvolupament de programari i la instal·lació professional. Per obtenir un pressupost precís, us recomanem que us poseu en contacte amb el nostre equip.

## Com s'instal·la Mica?

La instal·lació de Mica la realitza un lampista professional per garantir que es faci correctament i de manera segura. El procés implica la instal·lació del sensor a la canonada principal d'entrada d'aigua i la configuració de la passarel·la amb el vostre Wi-Fi domèstic. No cal que feu res més que proporcionar accés al lampista i a la vostra xarxa Wi-Fi.

## Les meves dades estan segures amb Mica?

La privadesa i la seguretat de les vostres dades són una prioritat màxima per a Mica. Complim amb totes les regulacions de protecció de dades aplicables a Barcelona i Espanya, inclòs el Reglament General de Protecció de Dades (RGPD) de la UE. Les vostres dades es transmeten de forma segura i s'emmagatzemen en servidors xifrats. Només utilitzem les vostres dades per analitzar el vostre consum d'aigua i millorar el nostre servei. No compartim les vostres dades personals amb tercers sense el vostre consentiment explícit.

## Com puc veure les meves dades de consum d'aigua?

Estem desenvolupant una interfície mòbil que us permetrà veure les vostres dades de consum d'aigua en temps real. L'aplicació inclourà un tauler de control, pàgines de consum i anàlisi, i altres funcions útils. Mentrestant, podem proporcionar-vos informes periòdics sobre el vostre consum d'aigua.`,
    slug: 'preguntes-frequents-sobre-mica',
  },
  {
    title: 'Com interpretar les dades del vostre sistema Mica',
    summary: 'Guia pas a pas per entendre i utilitzar les dades proporcionades pel vostre sistema Mica per estalviar aigua.',
    category: 'Guía',
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
    title: 'L\'impacte ambiental de l\'estalvi d\'aigua: Com la tecnologia intel·ligent pot ajudar',
    summary: 'Exploració en profunditat de com l\'estalvi d\'aigua afecta el medi ambient i com la tecnologia intel·ligent com Mica pot marcar la diferència.',
    category: 'Article',
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
  {
    title: 'Política de privadesa i condicions de servei de Mica',
    summary: 'Informació detallada sobre com Mica protegeix les vostres dades i les condicions d\'ús del nostre servei.',
    category: 'Altres',
    content: `
A Mica, la vostra privadesa i la seguretat de les vostres dades són la nostra màxima prioritat. Aquest document descriu com recollim, utilitzem i protegim les vostres dades, així com les condicions d'ús del nostre servei.

## Política de privadesa

### 1. Recollida de dades

Recollim les següents dades:
- Dades de consum d'aigua
- Informació del dispositiu i de la xarxa Wi-Fi
- Informació de contacte proporcionada durant el registre

### 2. Ús de les dades

Utilitzem les vostres dades per:
- Analitzar i categoritzar el vostre consum d'aigua
- Proporcionar-vos informes i recomanacions personalitzades
- Millorar el nostre servei i model d'IA
- Complir amb les obligacions legals

### 3. Protecció de dades

Complim amb el Reglament General de Protecció de Dades (RGPD) de la UE i la Llei Orgànica de Protecció de Dades i Garantia dels Drets Digitals (LOPDGDD) d'Espanya. Les vostres dades es transmeten i s'emmagatzemen de forma segura i xifrada.

### 4. Drets dels usuaris

Teniu dret a:
- Accedir a les vostres dades
- Rectificar dades inexactes
- Suprimir les vostres dades
- Oposar-vos al tractament de les vostres dades
- Portabilitat de les dades

Per exercir aquests drets, contacteu-nos a [adreça de correu electrònic].

## Condicions de servei

### 1. Ús del servei

En utilitzar Mica, accepteu:
- Proporcionar informació precisa durant el registre
- Mantenir la seguretat de les vostres credencials d'accés
- Utilitzar el servei només per a fins legals i personals

### 2. Propietat intel·lectual

Tot el contingut i el programari associat amb Mica són propietat de la nostra empresa o dels nostres llicenciadors i estan protegits per les lleis de propietat intel·lectual.

### 3. Limitació de responsabilitat

Mica proporciona el servei "tal qual" i no garanteix que sigui ininterromput o lliure d'errors. No som responsables de danys indirectes o conseqüents derivats de l'ús del nostre servei.

### 4. Modificacions del servei

Ens reservem el dret de modificar o discontinuar el servei en qualsevol moment, amb o sense previ avís.

### 5. Llei aplicable

Aquestes condicions es regeixen per les lleis d'Espanya i qualsevol disputa es resoldrà als tribunals de Barcelona.

En utilitzar Mica, reconeixeu haver llegit i acceptat aquesta política de privadesa i condicions de servei.`,
    slug: 'politica-privadesa-condicions-servei-mica',
  },
];

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>(Documents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DocsCategory | 'All'>('All');

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const matchesSearch = document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            document.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || document.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [documents, searchTerm, selectedCategory]);

  useEffect(() => {
    setDocuments(Documents);
  }, []);

  return {
    documents,
    filteredDocuments,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  };
}