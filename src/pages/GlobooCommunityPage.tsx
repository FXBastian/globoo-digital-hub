
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, ArrowRight, PiggyBank, Share2, Zap, Award, TrendingUp } from "lucide-react";

const GlobooCommunityPage = () => {
  const features = [
    {
      title: "Indicações",
      description: "Convide amigos, familiares e colegas para a plataforma GLOBOO e construa sua rede de indicados com um sistema simplificado de referência.",
      icon: <UserPlus className="h-5 w-5" />
    },
    {
      title: "Comunidade",
      description: "Desenvolva uma comunidade de usuários que utilizam os serviços da plataforma através de você, acompanhando seu crescimento em tempo real.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Receita Recorrente",
      description: "Ganhe parte do lucro gerado pelos seus indicados de forma contínua e automática, com pagamentos realizados diretamente em sua conta GLOBOO.",
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      title: "Crescimento em Rede",
      description: "Beneficie-se do crescimento exponencial à medida que seus indicados também trazem novos usuários, multiplicando suas fontes de receita.",
      icon: <Share2 className="h-5 w-5" />
    },
    {
      title: "Ciclo Virtuoso",
      description: "Crie um sistema que gera valor para todos os participantes, formando um ecossistema colaborativo onde todos se beneficiam mutuamente.",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      title: "Recompensas Extras",
      description: "Destrave bonificações especiais ao atingir determinados níveis de atividade em sua comunidade, incluindo prêmios exclusivos e taxas reduzidas.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Níveis Premium",
      description: "Acesse níveis exclusivos com benefícios ampliados conforme sua comunidade cresce, incluindo maiores percentuais de comissão e acesso antecipado a novos produtos.",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Análise de Desempenho",
      description: "Acompanhe métricas detalhadas sobre o crescimento e atividade da sua comunidade através de dashboards intuitivos e relatórios personalizados.",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="COMMUNITY CYCLE"
        description="Sistema de recompensas comunitárias onde você indica pessoas para a plataforma, monta sua própria comunidade e ganha parte do lucro gerado pelos indicados - uma forma de remuneração contínua baseada na economia colaborativa e de rede."
        icon={<Users className="h-8 w-8 text-white" />}
        color="bg-[#F57C00]"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border border-border hover:border-[#F57C00]/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-10 w-10 rounded-md bg-[#F57C00]/10 flex items-center justify-center">
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
        <div className="bg-gradient-to-r from-[#F57C00]/10 to-transparent p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#F57C00]">Como Funciona o Community Cycle</h2>
          <ol className="space-y-4 list-decimal pl-5">
            <li className="pl-2">
              <span className="font-medium text-[#F57C00]">Gere seu código de indicação:</span> Após se cadastrar na plataforma, você recebe um código único que identifica suas indicações.
            </li>
            <li className="pl-2">
              <span className="font-medium text-[#F57C00]">Compartilhe com sua rede:</span> Envie seu código para pessoas que possam se interessar pelos serviços GLOBOO através de links personalizados ou QR Codes.
            </li>
            <li className="pl-2">
              <span className="font-medium text-[#F57C00]">Novos usuários se cadastram:</span> Quando alguém usa seu código, ele se torna parte da sua comunidade permanentemente.
            </li>
            <li className="pl-2">
              <span className="font-medium text-[#F57C00]">Gere receita:</span> Você ganha uma porcentagem de todas as taxas que a plataforma recebe dos usuários da sua comunidade.
            </li>
            <li className="pl-2">
              <span className="font-medium text-[#F57C00]">Expanda exponencialmente:</span> Seus indicados podem trazer outros usuários, ampliando sua comunidade através de múltiplos níveis.
            </li>
            <li className="pl-2">
              <span className="font-medium text-[#F57C00]">Acompanhe resultados:</span> Monitore o crescimento da sua rede e seus ganhos através do painel exclusivo Community Cycle.
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border hover:border-[#F57C00]/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#F57C00]">Níveis de Participação</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Nível 1 (Direto):</span> Receba até 50% das taxas geradas pelos seus indicados imediatos em todas as operações realizadas na plataforma.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Nível 2 (Indireto):</span> Ganhe até 25% das taxas geradas pelos indicados dos seus indicados, expandindo seu alcance.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Nível 3 (Rede Extendida):</span> Receba até 10% das taxas geradas no terceiro nível da sua rede comunitária.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Níveis adicionais:</span> Desbloqueados quando você atinge determinados marcos de desempenho, permitindo ganhos ainda mais profundos na rede.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Status VIP:</span> Atingindo volumes significativos, você pode alcançar o status VIP com percentuais aumentados em todos os níveis.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-[#F57C00]/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#F57C00]">Benefícios Exclusivos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Renda Passiva:</span> Ganhos recorrentes sem necessidade de ação contínua, recebendo enquanto sua comunidade utiliza a plataforma.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Descontos Especiais:</span> Taxas reduzidas em até 50% nos serviços GLOBOO proporcionais ao tamanho da sua comunidade.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Acesso VIP:</span> Prioridade em novos lançamentos, produtos exclusivos e suporte dedicado para membros ativos.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Eventos Exclusivos:</span> Participação em webinars, encontros de networking e conferências anuais da comunidade GLOBOO.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F57C00] font-bold">•</span>
                <div>
                  <span className="font-medium">Bônus Sazonais:</span> Campanhas especiais com multiplicadores de comissão e prêmios exclusivos para os melhores indicadores.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-[#F57C00]/5 p-8 rounded-lg border border-[#F57C00]/20">
          <h3 className="text-xl font-bold mb-4 text-[#F57C00]">Programa de Embaixadores GLOBOO</h3>
          <p className="mb-4">Os membros mais ativos e influentes do Community Cycle podem ser convidados a participar do exclusivo Programa de Embaixadores GLOBOO, que oferece:</p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[#F57C00]/20">
              <span className="font-medium block text-[#F57C00]">Comissões Premium</span>
              <span className="text-sm text-muted-foreground">Percentuais aumentados em todos os níveis da sua rede comunitária</span>
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[#F57C00]/20">
              <span className="font-medium block text-[#F57C00]">Material Exclusivo</span>
              <span className="text-sm text-muted-foreground">Acesso a materiais de marketing personalizados e ferramentas de divulgação</span>
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[#F57C00]/20">
              <span className="font-medium block text-[#F57C00]">Reconhecimento</span>
              <span className="text-sm text-muted-foreground">Destaque no site oficial e eventos da GLOBOO como parceiro estratégico</span>
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-[#F57C00]/20">
              <span className="font-medium block text-[#F57C00]">Mentoria Direta</span>
              <span className="text-sm text-muted-foreground">Sessões de mentoria com a equipe executiva da GLOBOO para maximizar resultados</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default GlobooCommunityPage;
