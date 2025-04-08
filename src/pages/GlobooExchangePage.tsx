
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, ArrowRightLeft, Bitcoin, Wallet, Shield, BarChart } from "lucide-react";

const GlobooExchangePage = () => {
  const features = [
    {
      title: "Compra e Venda",
      description: "Negocie Bitcoin, Ethereum e outras criptomoedas populares com facilidade e segurança.",
      icon: <Bitcoin className="h-5 w-5" />
    },
    {
      title: "Transferências",
      description: "Envie e receba criptomoedas para qualquer carteira compatível no mundo todo.",
      icon: <ArrowRightLeft className="h-5 w-5" />
    },
    {
      title: "Conversão",
      description: "Troque entre diferentes moedas digitais com taxas competitivas e execução rápida.",
      icon: <CircleDollarSign className="h-5 w-5" />
    },
    {
      title: "Carteira Segura",
      description: "Armazene seus ativos digitais em carteiras seguras com proteção de última geração.",
      icon: <Wallet className="h-5 w-5" />
    },
    {
      title: "Análise de Mercado",
      description: "Acesse gráficos avançados e ferramentas de análise para tomar decisões informadas.",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      title: "Segurança Avançada",
      description: "Proteção de dados e ativos com padrões de segurança de nível institucional.",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="EXCHANGE"
        description="Plataforma que permite operações com criptomoedas, funcionando como um mercado digital descentralizado baseado em blockchain, oferecendo segurança e liberdade para transações."
        icon={<CircleDollarSign className="h-8 w-8 text-white" />}
        color="bg-secondary"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center">
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
        <h2 className="text-2xl font-bold mb-4">Vantagens da GLOBOO Exchange</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span>Alta liquidez em todos os pares de trading</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span>Taxas competitivas para todos os níveis de negociação</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span>Conformidade com regulamentações locais e internacionais</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span>Integração perfeita com o GLOBOO Bank e outros serviços</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-secondary font-bold">•</span>
            <span>Plataforma estável que suporta grandes volumes de operações</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default GlobooExchangePage;
