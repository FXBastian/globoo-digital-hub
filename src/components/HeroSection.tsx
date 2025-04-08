
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
      <div className="relative px-6 py-12 sm:py-20 sm:px-10 rounded-3xl overflow-hidden border border-border">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-primary">GLOBOO</span>
              <span className="block">Digital Hub</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Uma plataforma inovadora que reúne soluções financeiras e 
              blockchain em um único ecossistema digital seguro e regulamentado.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/bank">Explorar Serviços</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/concepts">Aprender Conceitos</Link>
              </Button>
            </div>
          </div>
          <div className="relative order-first md:order-last animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-24 flex items-center justify-center">
                  <span className="font-bold text-lg text-primary">Bank</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-24 flex items-center justify-center">
                  <span className="font-bold text-lg text-secondary">Exchange</span>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-24 flex items-center justify-center">
                  <span className="font-bold text-lg text-accent">Stock</span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-24 flex items-center justify-center">
                  <span className="font-bold text-lg text-primary">NFT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
