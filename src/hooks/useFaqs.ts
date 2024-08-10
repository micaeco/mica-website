import { IQuestion } from '@/src/types';

const faqs: IQuestion[] = [
  {
    title: 'Com puc contactar amb vosaltres?',
    slug: 'com-puc-contactar-amb-vosaltres',
    answer:
      'Pots contactar amb nosaltres a través del formulari de contacte o enviant un correu a info@mica.eco.',
  },
  {
    title: "Com s'instal·la el sensor?",
    slug: 'com-s-instal-la-el-sensor',
    answer:
      "El sensor l'instal·larà un lampista qualificat a l'entrada d'aigua de casa teva, on es troba el comptador. Aquesta instal·lació no tindrà cap impacte en el cabal d'aigua.",
  },
  {
    title: 'Com em puc unir al programa beta?',
    slug: 'com-em-puc-unir-al-programa-beta',
    answer:
      "Contestant al formulari de registre, que és a la pàgina 'En vull un'. Un cop rebem la teva sol·licitud, si passes el nostre procés de selecció, ens posarem en contacte amb tu.",
  },
];

export function useFaqs() {
  return {
    faqs,
  };
}
