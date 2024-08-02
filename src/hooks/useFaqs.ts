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
      "El sensor s'instal·larà a la canonada principal d'aigua de casa teva. Un cop superat el programa beta, en cas de comprar el sensor, t'enviarem un fontaner perque s'encarregui de la instal·lació.",
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
