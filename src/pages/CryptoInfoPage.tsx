
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Bitcoin, Coins, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CryptoCard } from "@/components/CryptoCard";
import { cryptoData } from "@/data/cryptoData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const CryptoInfoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  const [displayLimit, setDisplayLimit] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredCryptos = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorizedCryptos = {
    all: filteredCryptos,
    popular: filteredCryptos.filter((crypto) => crypto.category.includes("popular")),
    stablecoins: filteredCryptos.filter((crypto) => crypto.category.includes("stablecoin")),
    defi: filteredCryptos.filter((crypto) => crypto.category.includes("defi")),
    nft: filteredCryptos.filter((crypto) => crypto.category.includes("nft")),
    layer1: filteredCryptos.filter((crypto) => crypto.category.includes("layer1")),
    layer2: filteredCryptos.filter((crypto) => crypto.category.includes("layer2")),
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const loadMore = () => {
    setDisplayLimit(prev => prev + 9);
  };

  // Reset display limit when changing tabs or search
  useEffect(() => {
    setDisplayLimit(9);
  }, [currentTab, searchTerm]);

  const currentCryptos = categorizedCryptos[currentTab as keyof typeof categorizedCryptos].slice(0, displayLimit);
  const hasMore = currentCryptos.length < categorizedCryptos[currentTab as keyof typeof categorizedCryptos].length;

  return (
    <Layout>
      <PageHeader
        title="Criptomoedas e Ativos Digitais"
        description="Explore detalhes sobre as principais criptomoedas, suas tecnologias, segurança e se possuem lastro."
        icon={<Bitcoin className="h-8 w-8 text-white" />}
        color="bg-gradient-to-r from-[#7030A0] to-[#4A148C]"
      />

      <div className="relative w-full max-w-xl mx-auto mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Buscar criptomoeda por nome ou símbolo..."
          className="pl-10 pr-10 h-12 bg-white shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-3 hover:bg-slate-100 p-1 rounded-full"
            aria-label="Clear search"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentTab}>
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <TabsList className="inline-flex w-auto min-w-full sm:min-w-0 space-x-1 p-1 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="all">
              <Coins className="w-4 h-4 mr-1" /> Todas
            </TabsTrigger>
            <TabsTrigger value="popular">Populares</TabsTrigger>
            <TabsTrigger value="stablecoins">Stablecoins</TabsTrigger>
            <TabsTrigger value="defi">DeFi</TabsTrigger>
            <TabsTrigger value="nft">NFT/Gaming</TabsTrigger>
            <TabsTrigger value="layer1">Layer 1</TabsTrigger>
            <TabsTrigger value="layer2">Layer 2</TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(categorizedCryptos).map(([category, cryptos]) => (
          <TabsContent key={category} value={category} className="mt-0">
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="h-64">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <div>
                          <Skeleton className="h-6 w-32" />
                          <Skeleton className="h-4 w-16 mt-2" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-full mt-2" />
                          <Skeleton className="h-4 w-full mt-1" />
                          <Skeleton className="h-4 w-full mt-1" />
                        </div>
                        <div>
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-full mt-2" />
                          <Skeleton className="h-4 w-full mt-1" />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <Skeleton className="h-4 w-28" />
                          <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : currentCryptos.length > 0 ? (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {currentCryptos.map((crypto) => (
                    <CryptoCard
                      key={crypto.id}
                      name={crypto.name}
                      symbol={crypto.symbol}
                      description={crypto.description}
                      security={crypto.security}
                      backed={crypto.backed}
                      imageUrl={crypto.imageUrl}
                      color={crypto.color}
                    />
                  ))}
                </div>
                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <Button 
                      onClick={loadMore} 
                      variant="outline"
                      className="px-8 py-2 bg-white shadow-sm hover:bg-slate-50"
                    >
                      Carregar Mais Criptomoedas
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <h3 className="text-lg font-medium">Nenhuma criptomoeda encontrada</h3>
                <p className="text-muted-foreground mt-2">Tente outro termo de busca</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Layout>
  );
};

export default CryptoInfoPage;
