
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, ArrowRightLeft, Bitcoin, Wallet, Shield, BarChart, CreditCard, Coins } from "lucide-react";

const GlobooExchangePage = () => {
  const features = [
    {
      title: "Compra e Venda",
      description: "Negocie Bitcoin, Ethereum, Litecoin, Cardano, Solana, Polkadot, Avalanche e mais de 30 criptomoedas com facilidade e segurança.",
      icon: <Bitcoin className="h-5 w-5" />
    },
    {
      title: "Transferências",
      description: "Envie e receba criptomoedas para qualquer carteira compatível no mundo todo com confirmações rápidas e taxas otimizadas.",
      icon: <ArrowRightLeft className="h-5 w-5" />
    },
    {
      title: "Conversão",
      description: "Troque entre diferentes moedas digitais com taxas competitivas e execução rápida através de pares de trading diretos e cruzados.",
      icon: <CircleDollarSign className="h-5 w-5" />
    },
    {
      title: "Carteira Segura",
      description: "Armazene seus ativos digitais em carteiras seguras com proteção de última geração, incluindo armazenamento cold wallet para grandes volumes.",
      icon: <Wallet className="h-5 w-5" />
    },
    {
      title: "Análise de Mercado",
      description: "Acesse gráficos avançados e ferramentas de análise técnica para tomar decisões informadas sobre suas operações de trading.",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      title: "Segurança Avançada",
      description: "Proteção de dados e ativos com padrões de segurança de nível institucional, autenticação de múltiplos fatores e monitoramento 24/7.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Cartão Cripto",
      description: "Use suas criptomoedas para pagamentos do dia a dia com nosso cartão que converte instantaneamente seus ativos digitais em moeda fiduciária.",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "Staking",
      description: "Obtenha rendimentos passivos ao fazer staking de suas criptomoedas, contribuindo para a segurança da rede e recebendo recompensas regulares.",
      icon: <Coins className="h-5 w-5" />
    }
  ];

  const cryptoList = [
    { name: "Bitcoin (BTC)", category: "Principal" },
    { name: "Ethereum (ETH)", category: "Smart Contracts" },
    { name: "Binance Coin (BNB)", category: "Exchange" },
    { name: "Cardano (ADA)", category: "Smart Contracts" },
    { name: "Solana (SOL)", category: "Smart Contracts" },
    { name: "XRP (XRP)", category: "Pagamentos" },
    { name: "Polkadot (DOT)", category: "Interoperabilidade" },
    { name: "Dogecoin (DOGE)", category: "Meme" },
    { name: "Avalanche (AVAX)", category: "Smart Contracts" },
    { name: "Chainlink (LINK)", category: "Oráculos" },
    { name: "Polygon (MATIC)", category: "Layer 2" },
    { name: "Litecoin (LTC)", category: "Pagamentos" },
    { name: "Uniswap (UNI)", category: "DeFi" },
    { name: "Algorand (ALGO)", category: "Smart Contracts" },
    { name: "Cosmos (ATOM)", category: "Interoperabilidade" },
    { name: "Tether (USDT)", category: "Stablecoin" },
    { name: "USD Coin (USDC)", category: "Stablecoin" },
    { name: "DAI (DAI)", category: "Stablecoin" }
  ];

  return (
    <Layout>
      <PageHeader
        title="EXCHANGE"
        description="Plataforma que permite operações com criptomoedas, funcionando como um mercado digital descentralizado baseado em blockchain, oferecendo segurança e liberdade para transações."
        icon={<CircleDollarSign className="h-8 w-8 text-white" />}
        color="bg-[#7030A0]"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-[#7030A0]/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#7030A0]">Vantagens da GLOBOO Exchange</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#7030A0] font-bold">•</span>
            <span>Alta liquidez em todos os pares de trading com ordem profunda</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7030A0] font-bold">•</span>
            <span>Taxas competitivas para todos os níveis de negociação com descontos para detentores do token GLOBOO</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7030A0] font-bold">•</span>
            <span>Conformidade com regulamentações locais e internacionais, garantindo segurança jurídica</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7030A0] font-bold">•</span>
            <span>Integração perfeita com o GLOBOO Bank e outros serviços do ecossistema para transferências instantâneas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7030A0] font-bold">•</span>
            <span>Plataforma estável que suporta grandes volumes de operações mesmo em momentos de alta volatilidade</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#7030A0] font-bold">•</span>
            <span>Depósitos e saques em múltiplas moedas fiduciárias, incluindo Real (BRL), Dólar (USD) e Euro (EUR)</span>
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-gradient-to-r from-[#7030A0]/10 to-transparent p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#7030A0]">Criptomoedas Disponíveis</h2>
        <p className="mb-6 text-muted-foreground">A GLOBOO Exchange oferece uma ampla variedade de criptomoedas para negociação, incluindo as principais do mercado:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cryptoList.map((crypto, index) => (
            <div key={index} className="bg-card rounded-lg p-3 border border-border hover:border-[#7030A0]/50 transition-colors">
              <p className="font-medium">{crypto.name}</p>
              <p className="text-sm text-muted-foreground">{crypto.category}</p>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">E mais de 30 outras criptomoedas e tokens disponíveis para trading, com novos ativos sendo adicionados regularmente após análises rigorosas de segurança e demanda.</p>
      </div>
    </Layout>
  );
};

export default GlobooExchangePage;
