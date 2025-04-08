
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileImage, PenTool, ShoppingBag, ArrowRightLeft, Gem, Gavel } from "lucide-react";

const GlobooTokenizerPage = () => {
  const features = [
    {
      title: "Criação de NFTs",
      description: "Transforme arquivos digitais, arte, música e outros ativos em tokens não fungíveis (NFTs) exclusivos.",
      icon: <PenTool className="h-5 w-5" />
    },
    {
      title: "Marketplace",
      description: "Compre e venda NFTs em um ambiente seguro, com verificação e proteção contra fraudes.",
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      title: "Transferências",
      description: "Envie e receba NFTs entre carteiras compatíveis, com confirmações na blockchain.",
      icon: <ArrowRightLeft className="h-5 w-5" />
    },
    {
      title: "Colecionáveis Digitais",
      description: "Crie e gerencie coleções exclusivas de ativos digitais com rastreabilidade e autenticidade garantidas.",
      icon: <Gem className="h-5 w-5" />
    },
    {
      title: "Leilões",
      description: "Participe de leilões digitais para itens exclusivos, com lances e pagamentos automatizados.",
      icon: <Gavel className="h-5 w-5" />
    },
    {
      title: "Tokenização de Ativos Reais",
      description: "Transforme ativos do mundo real como imóveis e arte física em tokens digitais negociáveis.",
      icon: <FileImage className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="TOKENIZADORA (NFT)"
        description="Ambiente onde usuários podem criar, comprar, vender e gerenciar tokens não fungíveis (NFTs) registrados na blockchain, transformando ativos digitais únicos em tokens verificáveis e negociáveis."
        icon={<FileImage className="h-8 w-8 text-white" />}
        color="bg-globoo-purple"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-globoo-purple/10 flex items-center justify-center">
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
        <h2 className="text-2xl font-bold mb-4">Tipos de NFTs na Plataforma GLOBOO</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Arte Digital</h3>
            <p className="text-muted-foreground">Obras de arte únicas criadas por artistas digitais, com propriedade verificável.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Colecionáveis</h3>
            <p className="text-muted-foreground">Itens colecionáveis digitais, como cartas, figuras e memorabilia virtual.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Imóveis Tokenizados</h3>
            <p className="text-muted-foreground">Frações de propriedades imobiliárias representadas como tokens negociáveis.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Certidões e Documentos</h3>
            <p className="text-muted-foreground">Certificados de autenticidade, diplomas e outros documentos oficiais digitalizados.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GlobooTokenizerPage;
