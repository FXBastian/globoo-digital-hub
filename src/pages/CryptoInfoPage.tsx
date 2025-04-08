
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CircleDollarSign, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CryptoCard } from "@/components/CryptoCard";
import { cryptoData } from "@/data/cryptoData";
import { Button } from "@/components/ui/button";

const CryptoInfoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  const [displayLimit, setDisplayLimit] = useState(9);

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
        icon={<CircleDollarSign className="h-8 w-8 text-white" />}
        color="bg-[#7030A0]"
      />

      <div className="relative w-full max-w-xl mx-auto mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Buscar criptomoeda..."
          className="pl-10 pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-3"
            aria-label="Clear search"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentTab}>
        <div className="mb-8 overflow-x-auto">
          <TabsList className="inline-flex w-auto min-w-full sm:min-w-0 space-x-1 p-1">
            <TabsTrigger value="all">Todas</TabsTrigger>
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
            {currentCryptos.length > 0 ? (
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
                    <Button onClick={loadMore} variant="outline">
                      Carregar Mais
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
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
