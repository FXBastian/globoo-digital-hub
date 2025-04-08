
import React from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ConceptsList } from "@/components/ConceptsList";
import { BookOpen } from "lucide-react";

const GlobooConceptsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Conceitos Importantes"
        description="Entenda os termos e tecnologias fundamentais do mundo das finanças digitais e blockchain para aproveitar melhor o ecossistema GLOBOO."
        icon={<BookOpen className="h-8 w-8 text-white" />}
        color="bg-globoo-gray"
      />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Glossário do Ecossistema Digital</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Para navegar com confiança no mundo das finanças digitais e blockchain, 
          é essencial compreender alguns conceitos-chave que fundamentam todas as 
          operações no ecossistema GLOBOO.
        </p>
        <p className="text-lg text-muted-foreground">
          Familiarize-se com estes termos para tomar decisões mais informadas e 
          aproveitar ao máximo as oportunidades disponíveis na plataforma.
        </p>
      </div>

      <ConceptsList />

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Recursos Educacionais</h2>
        <p className="text-muted-foreground mb-6">
          A GLOBOO está comprometida com a educação financeira e tecnológica dos usuários. 
          Explore nossos recursos para aprofundar seus conhecimentos:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <BookOpen className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Artigos e Tutoriais</h3>
            <p className="text-muted-foreground">
              Material didático sobre blockchain, criptomoedas e investimentos.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <BookOpen className="h-8 w-8 text-secondary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Webinars e Workshops</h3>
            <p className="text-muted-foreground">
              Eventos online com especialistas do mercado financeiro e tecnológico.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <BookOpen className="h-8 w-8 text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-2">FAQ e Suporte</h3>
            <p className="text-muted-foreground">
              Respostas para dúvidas frequentes e assistência personalizada.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GlobooConceptsPage;
