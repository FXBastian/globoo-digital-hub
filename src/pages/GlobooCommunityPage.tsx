
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, ArrowRight, PiggyBank, Share2, Zap } from "lucide-react";

const GlobooCommunityPage = () => {
  const features = [
    {
      title: "Indicações",
      description: "Convide amigos, familiares e colegas para a plataforma GLOBOO e construa sua rede de indicados.",
      icon: <UserPlus className="h-5 w-5" />
    },
    {
      title: "Comunidade",
      description: "Desenvolva uma comunidade de usuários que utilizam os serviços da plataforma através de você.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Receita Recorrente",
      description: "Ganhe parte do lucro gerado pelos seus indicados de forma contínua e automática.",
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      title: "Crescimento em Rede",
      description: "Beneficie-se do crescimento exponencial à medida que seus indicados também trazem novos usuários.",
      icon: <Share2 className="h-5 w-5" />
    },
    {
      title: "Ciclo Virtuoso",
      description: "Crie um sistema que gera valor para todos os participantes, formando um ecossistema colaborativo.",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      title: "Recompensas Extras",
      description: "Destrave bonificações especiais ao atingir determinados níveis de atividade em sua comunidade.",
      icon: <Zap className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="COMMUNITY CYCLE"
        description="Sistema de recompensas comunitárias onde você indica pessoas para a plataforma, monta sua própria comunidade e ganha parte do lucro gerado pelos indicados - uma forma de remuneração contínua baseada na economia colaborativa e de rede."
        icon={<Users className="h-8 w-8 text-white" />}
        color="bg-globoo-orange"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-globoo-orange/10 flex items-center justify-center">
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

      <div className="mt-16">
        <div className="bg-muted p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Como Funciona o Community Cycle</h2>
          <ol className="space-y-4 list-decimal pl-5">
            <li className="pl-2">
              <span className="font-medium">Gere seu código de indicação:</span> Após se cadastrar na plataforma, você recebe um código único.
            </li>
            <li className="pl-2">
              <span className="font-medium">Compartilhe com sua rede:</span> Envie seu código para pessoas que possam se interessar pelos serviços GLOBOO.
            </li>
            <li className="pl-2">
              <span className="font-medium">Novos usuários se cadastram:</span> Quando alguém usa seu código, ele se torna parte da sua comunidade.
            </li>
            <li className="pl-2">
              <span className="font-medium">Gere receita:</span> Você ganha uma porcentagem do que a plataforma lucra com seus indicados.
            </li>
            <li className="pl-2">
              <span className="font-medium">Expanda exponencialmente:</span> Seus indicados podem trazer outros usuários, ampliando sua comunidade.
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Níveis de Participação</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Nível 1:</span> Ganhos diretos de seus indicados imediatos.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Nível 2:</span> Percentual das atividades dos indicados pelos seus indicados.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Nível 3:</span> Participação em terceiro nível da rede.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Níveis adicionais:</span> Desbloqueados conforme seu desempenho.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Benefícios Exclusivos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Renda Passiva:</span> Ganhos recorrentes sem necessidade de ação contínua.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Descontos Especiais:</span> Taxas reduzidas nos serviços GLOBOO.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Acesso VIP:</span> Prioridade em novos lançamentos e recursos.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-globoo-orange font-bold">•</span>
                <div>
                  <span className="font-medium">Eventos Exclusivos:</span> Participação em webinars e encontros de networking.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GlobooCommunityPage;
