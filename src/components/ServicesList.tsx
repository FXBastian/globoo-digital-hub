
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
} from "lucide-react";

const services = [
  {
    title: "BANK",
    description: "Banco Digital com todos os serviços bancários essenciais, como contas digitais, pagamentos, transferências e muito mais.",
    icon: <Building className="h-6 w-6 text-white" />,
    link: "/bank",
    color: "bg-primary"
  },
  {
    title: "EXCHANGE",
    description: "Plataforma para operações com criptomoedas, permitindo compra, venda e troca de ativos digitais com segurança.",
    icon: <CircleDollarSign className="h-6 w-6 text-white" />,
    link: "/exchange",
    color: "bg-secondary"
  },
  {
    title: "STOCK",
    description: "Intermediação para operações com ações e outros ativos financeiros do mercado de capitais integrado.",
    icon: <HandCoins className="h-6 w-6 text-white" />,
    link: "/stock",
    color: "bg-accent"
  },
  {
    title: "ESCROW",
    description: "Serviço de depósito em garantia para transações seguras, mantendo valores em custódia até o cumprimento de condições contratuais.",
    icon: <LockKeyhole className="h-6 w-6 text-white" />,
    link: "/escrow",
    color: "bg-globoo-darkBlue"
  },
  {
    title: "TOKENIZADORA (NFT)",
    description: "Ambiente para criação, compra, venda e gestão de tokens não fungíveis (NFTs) registrados na blockchain.",
    icon: <FileImage className="h-6 w-6 text-white" />,
    link: "/tokenizer",
    color: "bg-globoo-purple"
  },
  {
    title: "CROWDFUNDING",
    description: "Plataforma para investimento em startups e projetos inovadores através de ofertas públicas de ativos tokenizados.",
    icon: <Rocket className="h-6 w-6 text-white" />,
    link: "/crowdfunding",
    color: "bg-globoo-green"
  },
  {
    title: "COMMUNITY CYCLE",
    description: "Sistema de recompensas comunitárias baseado em indicações, permitindo ganhos contínuos com sua rede de contatos.",
    icon: <Users className="h-6 w-6 text-white" />,
    link: "/community",
    color: "bg-globoo-orange"
  }
];

export const ServicesList = () => {
  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça o ecossistema completo da GLOBOO Digital Hub, oferecendo soluções 
          financeiras inovadoras e tecnologia blockchain avançada.
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
