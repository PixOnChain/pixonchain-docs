// data/constants.tsx

import downloadPolicy from "@/app/assets/privacy_and_policy/download-policy.svg";
// const presentation = "/PDF/apresentacao.pdf";
const kyc = "/kyc.pdf";
const kyt = "/kyt.pdf";
const terms = "/termo_servico.pdf";
const antiCorruption = "/antissubornoeanticorrupcao.pdf";
import line from "@/app/assets/privacy_and_policy/line.svg";

export const PRIVACY_AND_POLICY = {
  texts: {
    firstText: {
      pt: "Menu",
      en: "Menu",
      es: "Menú",
      ar: "قائمة",
      zh: "菜单",
    },
    totalPolicy: {
      href: "/total-policies",
      label: {
        pt: "Todas as políticas",
        en: "All policies",
        es: "Todas las políticas",
        ar: "جميع السياسات",
        zh: "所有政策",
      },
    },
    backToPolicy: {
      href: "/policies-and-terms",
      label: {
        pt: "Voltar para Políticas em PDF",
        en: "Back to PDF Policies",
        es: "Volver a Políticas en PDF",
        ar: "العودة إلى سياسات PDF",
        zh: "返回 PDF 政策",
      },
    },

    links: [
      {
        id: 1,
        mainText: {
          pt: "Políticas",
          en: "Policies",
          es: "Políticas",
          ar: "السياسات",
          zh: "政策",
        },
        description: {
          pt: "Política Anticorrupção e Antissuborno",
          en: "Anti-Corruption and Anti-Bribery Policy",
          es: "Política Anticorrupción y Antisoborno",
          ar: "سياسة مكافحة الفساد ومكافحة الرشوة",
          zh: "反腐败和反贿赂政策",
        },
        secondDescription: {
          pt: "Política KYT",
          en: "Due Diligence Policy",
          es: "Política de Diligencia Debida",
          ar: "سياسة العناية الواجبة",
          zh: "尽职调查政策",
        },
        thirdDescription: {
          pt: "Política KYC",
          en: "Due Diligence Policy",
          es: "Política de Diligencia Debida",
          ar: "سياسة العناية الواجبة",
          zh: "尽职调查政策",
        },
        href: antiCorruption,
        hrefSecond: kyt,
        hrefThird: kyc,
      },
      // {
      //   id: 2,
      //   mainText: {
      //     pt: "Privacidade",
      //     en: "Privacy",
      //     es: "Privacidad",
      //     ar: "الخصوصية",
      //     zh: "隐私",
      //   },
      //   description: {
      //     pt: "Política de KYC",
      //     en: "LGPD Guidelines",
      //     es: "Directrices LGPD",
      //     ar: "إرشادات LGPD",
      //     zh: "LGPD 指南",
      //   },
      //   href: kyc,
      // },
      // {
      //   id: 3,
      //   mainText: {
      //     pt: "Ética",
      //     en: "Ethics",
      //     es: "Ética",
      //     ar: "أخلاق",
      //     zh: "伦理",
      //   },
      //   description: {
      //     pt: "Código de Ética e Conduta para Fornecedores",
      //     en: "Code of Ethics and Conduct for Suppliers",
      //     es: "Código de Ética y Conducta para Proveedores",
      //     ar: "مدونة أخلاقيات وسلوك الموردين",
      //     zh: "供应商道德和行为准则",
      //   },
      //   href: presentation,
      // },
      {
        id: 4,
        mainText: {
          pt: "Termos de Serviços",
          en: "LGPD",
          es: "LGPD",
          ar: "LGPD",
          zh: "LGPD",
        },
        description: {
          pt: "Termos de Serviços",
          en: "General Data Protection Law (LGPD)",
          es: "Ley General de Protección de Datos Personales (LGPD)",
          ar: "قانون حماية البيانات العامة (LGPD)",
          zh: "个人数据保护法 (LGPD)",
        },
        href: terms,
      },
    ],
    policy: {
      pt: "Políticas",
      en: "Policies",
      es: "Políticas",
      ar: "السياسات",
      zh: "政策",
    },
    policyAndAntiCorruption: {
      pt: "Política Anticorrupção e Antissuborno",
      en: "Anti-Corruption and Anti-Bribery Policy",
      es: "Política Anticorrupción y Antisoborno",
      ar: "سياسة مكافحة الفساد ومكافحة الرشوة",
      zh: "反腐败和反贿赂政策",
    },
    // date: {
    //   pt: "Atualizado em 13 de março de 2024",
    //   en: "Updated on January 9, 2024",
    //   es: "Actualizado el 9 de enero de 2024",
    //   ar: "تم التحديث في 9 يناير 2024",
    //   zh: "2024年1月9日更新",
    // },
  },

  images: {
    downloadPolicy: {
      label: {
        pt: "Download",
        en: "Download",
        es: "Descargar",
        ar: "تحميل",
        zh: "下载",
      },
      src: downloadPolicy,
      alt: {
        pt: "Imagem de Download",
        en: "Download Image",
        es: "Imagen de Descargar",
        ar: "صورة التحميل",
        zh: "下载图片",
      },
    },
    line: {
      src: line,
      alt: {
        pt: "Imagem de Linha",
        en: "Line Image",
        es: "Imagen de Línea",
        ar: "صورة الخط",
        zh: "线条图片",
      },
    },
  },
};
