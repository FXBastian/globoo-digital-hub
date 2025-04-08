import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BuildingBank, CreditCard, BanknoteIcon, ArrowRightLeft, PiggyBank, BarChart } from "lucide-react";

const GlobooBankPage = () => {
  const features = [
    {
      title: "Contas Digitais",
      description: "Abertura simplificada de contas 100% digitais, sem burocracia e sem taxas de manutenção.",
      icon: <BuildingBank className="h-5 w-5" />
    },
    {
      title: "Pagamentos",
      description: "Pague contas e boletos diretamente pelo app, com confirmação instantânea e comprovantes digitais.",
      icon: <BanknoteIcon className="h-5 w-5" />
    },
    {
      title: "Transferências",
      description: "Realize transferências via PIX, TED e outros métodos para qualquer banco, com segurança e rapidez.",
      icon: <ArrowRightLeft className="h-5 w-5" />
    },
    {
      title: "Cartões",
      description: "Cartões físicos e virtuais com tecnologia avançada para compras online e presenciais.",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "Investimentos",
      description: "Acesso a diversas opções de investimento, desde renda fixa até produtos mais sofisticados.",
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      title: "Controle Financeiro",
      description: "Acompanhe seus gastos e rendimentos em tempo real, com relatórios detalhados e categorização automática.",
      icon: <BarChart className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="BANK"
        description="Ambiente de Banco Digital com todos os serviços bancários essenciais, oferecendo uma experiência bancária completa, 100% online e integrada com outras soluções da plataforma."
        icon={<BuildingBank className="h-8 w-8 text-white" />}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
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
        <h2 className="text-2xl font-bold mb-4">Vantagens do GLOBOO Bank</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Integração total com outros serviços da plataforma GLOBOO</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Conversão simplificada entre moedas fiduciárias e criptomoedas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Segurança avançada com autenticação em múltiplos fatores</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Suporte ao cliente 24/7 via chat, e-mail e telefone</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Interface intuitiva e amigável, projetada para simplicidade</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default GlobooBankPage;
