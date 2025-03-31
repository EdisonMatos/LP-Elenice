import bgImg from "../assets/imgs/hero/bgHeroLp.jpg";
import logo from "../assets/imgs/logo/logo.png";
import aboutImgLpv from "../assets/imgs/about/aboutLpv.jpg";
import { infos } from "./content";
import { Baby } from "lucide-react";
import { Users } from "lucide-react";
import { Link } from "lucide-react";
import { Accessibility } from "lucide-react";
import { SmilePlus } from "lucide-react";
import { Gavel } from "lucide-react";
import { Scale } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Clock } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { DollarSign } from "lucide-react";
import { BellOff } from "lucide-react";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Edvaldo Costa Gomes Advocacia | Verba Rescisória e Direitos Trabalhistas em Cuiabá - MT",
    description:
      "Especialista em direito trabalhista em Cuiabá - MT, Edvaldo Costa Gomes Advocacia atua na defesa dos direitos dos trabalhadores, garantindo o recebimento de verbas rescisórias, horas extras, aviso prévio e outros direitos não pagos.",
    keywords:
      "Verba Rescisória, Direitos Trabalhistas, Advogado Trabalhista, Rescisão Contratual, Horas Extras Não Pagas, Atraso no Pagamento, Falta de Aviso Prévio, Multa Rescisória, Demissão Sem Justa Causa, Direitos do Trabalhador, Indenização Trabalhista, Justiça do Trabalho, Advocacia Especializada, Advogado em Cuiabá, Edvaldo Costa Gomes Advocacia, Escritório de Advocacia Trabalhista, Acordo Trabalhista, Processo Trabalhista, FGTS Não Pago, Reclamação Trabalhista.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Não recebeu suas verbas rescisórias?
          <span className="text-lpTitle text-primary">
            {" "}
            Seu direito não pode esperar!
          </span>
        </h1>
      ),
      subtitle:
        "Seus direitos trabalhistas precisam ser respeitados. Agimos rápido para garantir o que é seu por direito.",
      buttonLabel: "Quero falar com um especialista",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "DIREITO TRABALHISTA",
      title: "Cenários onde garantimos sua defesa",
    },
    cards: {
      card1: {
        icon: <Clock/>,
        title: "Hora extra e Verba rescisória",
        description:
          "Se suas horas extras não foram pagas ou sua rescisão veio incompleta, garantimos a correção e o pagamento integral dos seus direitos.",
      },
      card2: {
        icon: <CircleDollarSign/>,
        title: "Multa por atraso no pagamento da rescisão",
        description:
          "Se a empresa não pagou sua rescisão dentro do prazo legal, você tem direito a uma indenização. Exigimos o cumprimento da lei para que seu direito seja respeitado.",
      },
      card3: {
        icon: <BellOff/>,
        title: "Falta de Aviso Prévio",
        description:
          "Foi demitido sem aviso prévio ou não recebeu a indenização correspondente? Entramos com ação para garantir esse pagamento.",
      },
      card4: {
        icon: <DollarSign/>,
        title: "Atraso salarial",
        description:
          "Se sua empresa atrasa salários, entramos com ação para garantir o pagamento com correção e sem mais espera.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    imgAbout: aboutImgLpv,
    ariaLabel: "imagem do advogado",
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "TRADIÇÃO EM DIREITO TRABALHISTA",
      title: "Compromisso e agilidade na defesa dos seus direitos",
    },
    paragraph: (
      <p>
        Sei que, em questões trabalhistas, o tempo é essencial. Por isso, atuo
        de forma rápida e estratégica, sem abrir mão da qualidade, garantindo
        que seus direitos sejam protegidos com eficiência e determinação.
        <br />
        <br /> Seja qual for a sua demanda trabalhista, estou pronto para
        oferecer a melhor solução jurídica. Entre em contato com Edvaldo Costa
        Gomes Advocacia e tenha ao seu lado uma defesa ágil e eficaz
      </p>
    ),
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A MELHOR ESCOLHA",
      title: "Por que nos escolher pra te defender?",
    },
    cards: {
      card1: {
        icon: <Scale/>,
        title: "Estratégia personalizada para garantir seus direitos",
        description:
          "Oferecemos uma análise detalhada do seu caso trabalhista, criando a melhor estratégia visando a efetivação do seu direito.",
      },
      card2: {
        icon: <ShieldCheck/>,
        title: "Soluções sob medida para o seu problema",
        description:
          "Desenvolvemos um plano de ação específico, focado em resolver suas questões trabalhistas rapidamente e com resultados concretos. Cada decisão é tomada pensando no seu melhor interesse.",
      },
      card3: {
        icon: <Gavel/>,
        title: "Compromisso total com sua causa",
        description:
          "Nos dedicamos inteiramente à sua defesa, lutando pelos seus direitos em cada fase do processo.",
      },
      card4: {
        icon: <SmilePlus/>,
        title: "Experiência que traz tranquilidade",
        description:
          "Com vasta experiência em casos trabalhistas, seu processo será conduzido com segurança e confiança. Estamos ao seu lado para assegurar que seus direitos sejam respeitados.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA MAIS TEMPO",
      title:
        "Trabalhador: Busque ajuda de um advogado para garantir os seus direitos trabalhistas!",
      subtitle: `O escritório Edvaldo Costa Gomes Advocacia está pronto para te auxiliar. Nossa equipe especializada em direito trabalhista pode orientá-lo no processo para garantir seu direito, seja por atraso salarial, assédio moral, adicionais devidos e não pagos, não pagamento de horas extras ou verbas rescisórias. Independente da violação de direito, não deixe que essas situações prejudiquem sua moral, sua vida profissional e financeira.`,
    },
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
