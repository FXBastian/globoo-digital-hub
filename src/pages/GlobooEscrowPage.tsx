
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, FileCheck, Clock, Shield, Building, HandCoins } from "lucide-react";

const GlobooEscrowPage = () => {
  const features = [
    {
      title: "Depósito em Garantia",
      description: "Sistema seguro onde valores são retidos até que as condições contratuais sejam cumpridas.",
      icon: <LockKeyhole className="h-5 w-5" />
    },
    {
      title: "Contratos Inteligentes",
      description: "Automação de processos e condições através de smart contracts baseados em blockchain.",
      icon: <FileCheck className="h-5 w-5" />
    },
    {
      title: "Transações Imobiliárias",
      description: "Serviço especial para compra e venda de imóveis com garantia e segurança jurídica.",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Transações Comerciais",
      description: "Proteção para compras e vendas de alto valor entre empresas ou pessoas físicas.",
      icon: <HandCoins className="h-5 w-5" />
    },
    {
      title: "Verificação de Condições",
      description: "Verificação independente do cumprimento das condições contratuais por todas as partes.",
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: "Proteção Multilateral",
      description: "Sistema que protege todas as partes envolvidas, garantindo o cumprimento dos acordos.",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="ESCROW"
        description="Serviço de depósito em garantia no qual a plataforma mantém valores ou ativos em custódia até que condições específicas contratuais sejam cumpridas por todas as partes envolvidas."
        icon={<LockKeyhole className="h-8 w-8 text-white" />}
        color="bg-globoo-darkBlue"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-globoo-darkBlue/10 flex items-center justify-center">
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
        <h2 className="text-2xl font-bold mb-4">Como Funciona o GLOBOO Escrow</h2>
        <ol className="space-y-4 list-decimal pl-5">
          <li className="pl-2">
            <span className="font-medium">Acordo Inicial:</span> As partes definem as condições e termos do contrato.
          </li>
          <li className="pl-2">
            <span className="font-medium">Depósito:</span> O comprador deposita o valor ou ativo na plataforma GLOBOO.
          </li>
          <li className="pl-2">
            <span className="font-medium">Verificação:</span> A GLOBOO verifica o cumprimento das condições estabelecidas.
          </li>
          <li className="pl-2">
            <span className="font-medium">Liberação:</span> Após confirmação, os valores são liberados para o vendedor.
          </li>
          <li className="pl-2">
            <span className="font-medium">Resolução de Conflitos:</span> Em caso de desacordo, a plataforma oferece mediação.
          </li>
        </ol>
      </div>
    </Layout>
  );
};

export default GlobooEscrowPage;
