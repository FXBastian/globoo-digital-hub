
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, LightbulbIcon, Users, PieChart, TrendingUp, Sparkles } from "lucide-react";

const GlobooCrowdfundingPage = () => {
  const features = [
    {
      title: "Investimento em Startups",
      description: "Torne-se investidor anjo em empresas inovadoras com potencial de crescimento exponencial.",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      title: "Projetos Inovadores",
      description: "Acesso a uma seleção de projetos curados pela equipe GLOBOO com análise de viabilidade.",
      icon: <LightbulbIcon className="h-5 w-5" />
    },
    {
      title: "Tokenização de Cotas",
      description: "Investimentos fracionados através de tokens que representam participação em empresas.",
      icon: <PieChart className="h-5 w-5" />
    },
    {
      title: "Comunidade de Investidores",
      description: "Interaja com outros investidores para discutir oportunidades e compartilhar conhecimento.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Acompanhamento de Desempenho",
      description: "Monitore o desenvolvimento e resultados dos projetos que você investiu.",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Equity Crowdfunding",
      description: "Participe em ofertas públicas de startups regulamentadas pela CVM através da Resolução 88.",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="CROWDFUNDING"
        description="Funcionalidade que permite investir em startups e projetos inovadores, participar de ofertas públicas de ativos tokenizados e apoiar empreendedores com pequenas cotas, regulamentada pela Resolução CVM 88."
        icon={<Rocket className="h-8 w-8 text-white" />}
        color="bg-globoo-green"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-globoo-green/10 flex items-center justify-center">
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
        <h2 className="text-2xl font-bold mb-4">Como Investir em Startups na GLOBOO</h2>
        <ol className="space-y-4 list-decimal pl-5">
          <li className="pl-2">
            <span className="font-medium">Crie sua conta:</span> Cadastre-se e complete seu perfil de investidor.
          </li>
          <li className="pl-2">
            <span className="font-medium">Explore projetos:</span> Navegue pela plataforma e conheça startups disponíveis.
          </li>
          <li className="pl-2">
            <span className="font-medium">Analise oportunidades:</span> Acesse documentos, pitches e projeções financeiras.
          </li>
          <li className="pl-2">
            <span className="font-medium">Invista:</span> Escolha um valor compatível com seu perfil e faça seu investimento.
          </li>
          <li className="pl-2">
            <span className="font-medium">Acompanhe:</span> Receba atualizações periódicas sobre o desenvolvimento do negócio.
          </li>
        </ol>
      </div>

      <div className="mt-12 p-8 border border-border rounded-lg bg-card">
        <h2 className="text-2xl font-bold mb-4">Regulamentação CVM 88</h2>
        <p className="text-muted-foreground mb-4">
          As operações de crowdfunding de investimento na plataforma GLOBOO são regulamentadas 
          pela Resolução CVM 88, que estabelece as regras para ofertas públicas de valores 
          mobiliários de emissão de sociedades empresárias de pequeno porte realizadas com 
          dispensa de registro.
        </p>
        <p className="text-muted-foreground">
          Isso garante maior segurança jurídica para investidores e empreendedores, com 
          regras claras para transparência, limites de captação e requisitos de divulgação 
          de informações essenciais.
        </p>
      </div>
    </Layout>
  );
};

export default GlobooCrowdfundingPage;
