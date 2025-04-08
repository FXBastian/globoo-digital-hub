
import React from "react";
import { ServiceCard } from "./ServiceCard";
import {
  Building,
  CircleDollarSign,
  HandCoins,
  LockKeyhole,
  FileImage,
  Rocket,
  Users,
  Bitcoin,
  Banknote,
  Wallet,
} from "lucide-react";

const services = [
  {
    title: "BANK",
    description: "Banco Digital com todos os serviços bancários essenciais, como contas digitais, pagamentos, transferências e muito mais. Integração completa com carteiras digitais de criptomoedas.",
    icon: <Building className="h-6 w-6 text-white" />,
    link: "/bank",
    color: "bg-[#0974F1]"
  },
  {
    title: "EXCHANGE",
    description: "Plataforma para operações com criptomoedas, permitindo compra, venda e troca de ativos digitais com segurança. Negociações disponíveis: Bitcoin, Ethereum, Litecoin, Cardano, Solana, e outras 30+ criptomoedas.",
    icon: <CircleDollarSign className="h-6 w-6 text-white" />,
    link: "/exchange",
    color: "bg-[#7030A0]"
  },
  {
    title: "STOCK",
    description: "Intermediação para operações com ações e outros ativos financeiros do mercado de capitais integrado. Acesso a mercados nacionais e internacionais com taxas competitivas.",
    icon: <HandCoins className="h-6 w-6 text-white" />,
    link: "/stock",
    color: "bg-[#1AC688]"
  },
  {
    title: "ESCROW",
    description: "Serviço de depósito em garantia para transações seguras, mantendo valores em custódia até o cumprimento de condições contratuais. Ideal para transações imobiliárias e comerciais de alto valor.",
    icon: <LockKeyhole className="h-6 w-6 text-white" />,
    link: "/escrow",
    color: "bg-[#1565C0]"
  },
  {
    title: "TOKENIZADORA (NFT)",
    description: "Ambiente para criação, compra, venda e gestão de tokens não fungíveis (NFTs) registrados na blockchain. Tokenize arte digital, imóveis, contratos e outros ativos com registro imutável.",
    icon: <FileImage className="h-6 w-6 text-white" />,
    link: "/tokenizer",
    color: "bg-[#9C27B0]"
  },
  {
    title: "CROWDFUNDING",
    description: "Plataforma para investimento em startups e projetos inovadores através de ofertas públicas de ativos tokenizados. Oportunidades de investimento a partir de pequenos valores, democratizando o acesso ao capital.",
    icon: <Rocket className="h-6 w-6 text-white" />,
    link: "/crowdfunding",
    color: "bg-[#00C853]"
  },
  {
    title: "COMMUNITY CYCLE",
    description: "Sistema de recompensas comunitárias baseado em indicações, permitindo ganhos contínuos com sua rede de contatos. Receba percentuais das transações realizadas pela sua comunidade em até 3 níveis de profundidade.",
    icon: <Users className="h-6 w-6 text-white" />,
    link: "/community",
    color: "bg-[#F57C00]"
  }
];

export const ServicesList = () => {
  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0974F1]">Nossos Serviços</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça o ecossistema completo da GLOBOO Digital Hub, oferecendo soluções 
          financeiras inovadoras e tecnologia blockchain avançada para suas necessidades financeiras.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
            color={service.color}
          />
        ))}
      </div>
    </section>
  );
};
