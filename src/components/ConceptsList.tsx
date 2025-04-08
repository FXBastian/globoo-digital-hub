
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bitcoin,
  BanknoteIcon,
  LinkIcon,
  PiggyBank,
  BarChart,
  Building,
  DatabaseIcon,
  Landmark
} from "lucide-react";

const concepts = [
  {
    title: "STABLECOINS",
    description: "Criptomoedas com valor atrelado a ativos estáveis (geralmente moedas fiduciárias como o dólar). Exemplo: USDT, USDC.",
    info: "Usadas para evitar a volatilidade do mercado cripto e facilitar negociações.",
    icon: <BanknoteIcon className="h-6 w-6 text-primary" />
  },
  {
    title: "ALTCOIN",
    description: "Todas as criptomoedas que não são o Bitcoin. Incluem tokens como Ethereum, Solana, Cardano, entre outras.",
    info: "",
    icon: <Bitcoin className="h-6 w-6 text-secondary" />
  },
  {
    title: "STARTUP",
    description: "Empresa jovem com modelo de negócio escalável e foco em inovação.",
    info: "Na GLOBOO, você pode investir nelas através do crowdfunding tokenizado.",
    icon: <Building className="h-6 w-6 text-accent" />
  },
  {
    title: "BLOCKCHAIN",
    description: "Tecnologia que registra transações de forma descentralizada, imutável e transparente.",
    info: "Base da segurança e funcionamento de criptomoedas, NFTs, contratos inteligentes, etc.",
    icon: <LinkIcon className="h-6 w-6 text-globoo-darkBlue" />
  },
  {
    title: "STAKING",
    description: "Processo de \"travar\" criptomoedas em uma rede blockchain para validar transações, ajudar no funcionamento da rede e receber recompensas em cripto.",
    info: "Uma forma de rendimento passivo no mundo cripto.",
    icon: <PiggyBank className="h-6 w-6 text-globoo-purple" />
  },
  {
    title: "DEFI",
    description: "Sistema financeiro construído sobre blockchain, sem intermediários (como bancos).",
    info: "Oferece empréstimos, pool de liquidez, rendimento com staking ou yield farming, tudo via contratos inteligentes.",
    icon: <Landmark className="h-6 w-6 text-globoo-green" />
  },
  {
    title: "CEX",
    description: "Exchange centralizada, gerenciada por uma empresa que controla os fundos dos usuários.",
    info: "Mais amigável ao usuário, porém com menos controle individual.",
    icon: <DatabaseIcon className="h-6 w-6 text-globoo-orange" />
  },
  {
    title: "DEX",
    description: "Exchange descentralizada, onde os usuários negociam diretamente entre si via contratos inteligentes.",
    info: "Maior liberdade, menos censura, mas exige maior conhecimento técnico.",
    icon: <BarChart className="h-6 w-6 text-globoo-red" />
  }
];

export const ConceptsList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 mt-8">
      {concepts.map((concept) => (
        <Card key={concept.title} className="definition-card">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="flex-shrink-0">{concept.icon}</div>
            <CardTitle className="text-xl">{concept.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{concept.description}</p>
            {concept.info && (
              <p className="mt-2 text-sm text-muted-foreground">➡️ {concept.info}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
