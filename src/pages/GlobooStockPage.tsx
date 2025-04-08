
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandCoins, TrendingUp, Building2, Clock, BarChart, Percent } from "lucide-react";

const GlobooStockPage = () => {
  const features = [
    {
      title: "Ações",
      description: "Compre e venda ações de empresas nacionais e internacionais com facilidade e custos competitivos.",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      title: "Fundos Imobiliários",
      description: "Acesse o mercado de FIIs com uma plataforma completa de análise e negociação.",
      icon: <HandCoins className="h-5 w-5" />
    },
    {
      title: "ETFs",
      description: "Invista em cestas diversificadas de ativos através de fundos negociados em bolsa.",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Trading em Tempo Real",
      description: "Execute ordens instantaneamente com ferramentas de trading avançadas e baixa latência.",
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: "Análise Técnica",
      description: "Utilize ferramentas profissionais de análise gráfica e indicadores técnicos.",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      title: "Proventos e Dividendos",
      description: "Acompanhe e receba automaticamente dividendos, JCP e outros proventos em sua conta.",
      icon: <Percent className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="STOCK"
        description="Serviço que oferece intermediação para operações com ações e outros ativos financeiros, funcionando como uma corretora digital integrada ao ecossistema GLOBOO."
        icon={<HandCoins className="h-8 w-8 text-white" />}
        color="bg-accent"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center">
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
        <h2 className="text-2xl font-bold mb-4">Vantagens da GLOBOO Stock</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Plataforma de negociação intuitiva para iniciantes e avançada para profissionais</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Acesso a mercados nacionais e internacionais em uma única conta</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Relatórios de análise e recomendações de especialistas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Corretagem competitiva e planos para diferentes perfis de investidores</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span>Integração com outros serviços GLOBOO para diversificação de investimentos</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default GlobooStockPage;
