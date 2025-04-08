
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
  Landmark,
  Shield,
  Key,
  Wallet,
  ArrowRightLeft,
  Layers,
  Hash,
  FileImage
} from "lucide-react";

const concepts = [
  {
    title: "STABLECOINS",
    description: "Criptomoedas com valor atrelado a ativos estáveis (geralmente moedas fiduciárias como o dólar). Exemplo: USDT, USDC, DAI, BUSD.",
    info: "Usadas para evitar a volatilidade do mercado cripto e facilitar negociações, oferecendo estabilidade para traders e comerciantes.",
    icon: <BanknoteIcon className="h-6 w-6 text-[#0974F1]" />
  },
  {
    title: "BITCOIN (BTC)",
    description: "A primeira e mais valiosa criptomoeda, criada em 2009 por Satoshi Nakamoto. Funciona como dinheiro digital peer-to-peer sem intermediários.",
    info: "Considerada 'ouro digital', tem um limite máximo de 21 milhões de unidades e é minerada através de proof-of-work.",
    icon: <Bitcoin className="h-6 w-6 text-[#F7931A]" />
  },
  {
    title: "ETHEREUM (ETH)",
    description: "Plataforma descentralizada que permite a criação de aplicativos e contratos inteligentes. Sua criptomoeda nativa é o Ether (ETH).",
    info: "Segunda maior criptomoeda por capitalização de mercado, é a base para DeFi, NFTs e milhares de tokens.",
    icon: <Hash className="h-6 w-6 text-[#627EEA]" />
  },
  {
    title: "ALTCOIN",
    description: "Todas as criptomoedas que não são o Bitcoin. Incluem tokens como Ethereum, Solana, Cardano, Polkadot, entre milhares de outras.",
    info: "Oferecem diferentes casos de uso, tecnologias e modelos econômicos, expandindo as possibilidades do ecossistema cripto.",
    icon: <Wallet className="h-6 w-6 text-[#7030A0]" />
  },
  {
    title: "STARTUP",
    description: "Empresa jovem com modelo de negócio escalável e foco em inovação, geralmente em busca de investimento para crescimento.",
    info: "Na GLOBOO, você pode investir nelas através do crowdfunding tokenizado, adquirindo participação em empresas promissoras.",
    icon: <Building className="h-6 w-6 text-[#1AC688]" />
  },
  {
    title: "BLOCKCHAIN",
    description: "Tecnologia que registra transações de forma descentralizada, imutável e transparente através de blocos encadeados criptograficamente.",
    info: "Base da segurança e funcionamento de criptomoedas, NFTs, contratos inteligentes e aplicações descentralizadas (dApps).",
    icon: <LinkIcon className="h-6 w-6 text-[#1565C0]" />
  },
  {
    title: "STAKING",
    description: "Processo de \"travar\" criptomoedas em uma rede blockchain para validar transações (proof-of-stake), ajudar no funcionamento da rede e receber recompensas em cripto.",
    info: "Uma forma de rendimento passivo no mundo cripto, com APYs que variam de 2% a 20% dependendo da blockchain.",
    icon: <PiggyBank className="h-6 w-6 text-[#9C27B0]" />
  },
  {
    title: "DEFI",
    description: "Sistema financeiro construído sobre blockchain, sem intermediários como bancos ou corretoras tradicionais.",
    info: "Oferece empréstimos, pool de liquidez, rendimento com staking ou yield farming, tudo via contratos inteligentes automatizados.",
    icon: <Landmark className="h-6 w-6 text-[#00C853]" />
  },
  {
    title: "CEX",
    description: "Exchange centralizada, gerenciada por uma empresa que controla os fundos dos usuários e facilita as negociações entre compradores e vendedores.",
    info: "Mais amigável ao usuário, com maior liquidez e ferramentas avançadas, porém com menos privacidade e controle individual.",
    icon: <DatabaseIcon className="h-6 w-6 text-[#F57C00]" />
  },
  {
    title: "DEX",
    description: "Exchange descentralizada, onde os usuários negociam diretamente entre si via contratos inteligentes, mantendo controle total sobre seus fundos.",
    info: "Maior liberdade, menos censura, mas exige maior conhecimento técnico e geralmente tem custos mais altos de transação.",
    icon: <BarChart className="h-6 w-6 text-[#E53935]" />
  },
  {
    title: "SMART CONTRACTS",
    description: "Contratos auto-executáveis com as regras do acordo entre comprador e vendedor diretamente escritas em linhas de código na blockchain.",
    info: "Permitem a criação de aplicativos descentralizados e eliminam a necessidade de intermediários em transações complexas.",
    icon: <Key className="h-6 w-6 text-[#FFB300]" />
  },
  {
    title: "NFT",
    description: "Token Não Fungível - ativo digital único que representa propriedade de itens específicos como arte, música, vídeos, itens em jogos, etc.",
    info: "Diferente de criptomoedas como Bitcoin, cada NFT é único e não pode ser trocado igualmente por outro NFT.",
    icon: <FileImage className="h-6 w-6 text-[#673AB7]" />
  },
  {
    title: "LAYER 2",
    description: "Soluções construídas sobre uma blockchain principal (Layer 1) para melhorar a escalabilidade, reduzir taxas e aumentar a velocidade de transações.",
    info: "Exemplos incluem Lightning Network (Bitcoin), Polygon e Optimism (Ethereum), permitindo milhares de transações por segundo.",
    icon: <Layers className="h-6 w-6 text-[#2196F3]" />
  },
  {
    title: "SWAP",
    description: "Troca direta entre diferentes criptomoedas sem a necessidade de converter para moedas fiduciárias intermediárias.",
    info: "Permite negociar instantaneamente pares como BTC/ETH, ETH/USDT e milhares de outras combinações de tokens.",
    icon: <ArrowRightLeft className="h-6 w-6 text-[#009688]" />
  },
  {
    title: "COLD WALLET",
    description: "Dispositivo físico ou método de armazenamento de criptomoedas desconectado da internet, oferecendo segurança máxima contra ataques online.",
    info: "Recomendado para armazenamento de longo prazo e grandes quantidades de criptomoedas.",
    icon: <Shield className="h-6 w-6 text-[#455A64]" />
  }
];

export const ConceptsList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {concepts.map((concept) => (
        <Card key={concept.title} className="definition-card hover:shadow-md transition-all duration-300">
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
