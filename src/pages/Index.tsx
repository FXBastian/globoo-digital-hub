
import React from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ServicesList } from "@/components/ServicesList";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesList />
      
      <section className="mt-20 bg-muted rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Aprenda os Conceitos Essenciais</h2>
            <p className="text-muted-foreground mb-6">
              Entenda os termos e tecnologias fundamentais do mundo das finanças 
              digitais e blockchain para aproveitar ao máximo o ecossistema GLOBOO.
            </p>
            <Button asChild size="lg">
              <Link to="/concepts">Explorar Conceitos</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <BookOpen className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium">Blockchain</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A tecnologia por trás das criptomoedas
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <BookOpen className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-medium">DeFi</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Finanças descentralizadas
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <BookOpen className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-medium">NFTs</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Tokens não fungíveis
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <BookOpen className="h-8 w-8 text-globoo-purple mb-3" />
              <h3 className="font-medium">Staking</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Rendimento passivo em cripto
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
