
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, InfoIcon, Coins, Server, ZapIcon, Database, BarChart3, Globe, ShieldCheck } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CryptoCardProps {
  name: string;
  symbol: string;
  description: string;
  security: string;
  backed: string;
  imageUrl: string;
  color: string;
  type: string;
  purpose: string;
  techSpecs: string;
  network: string;
  useCases: string;
  exchanges: string;
  tokenomics: string;
  relevance: string;
  funFacts: string;
}

export const CryptoCard = ({
  name,
  symbol,
  description,
  security,
  backed,
  imageUrl,
  color,
  type,
  purpose,
  techSpecs,
  network,
  useCases,
  exchanges,
  tokenomics,
  relevance,
  funFacts,
}: CryptoCardProps) => {
  const [expandedDesc, setExpandedDesc] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);
  const [expandedUsage, setExpandedUsage] = useState(false);
  const [expandedMarket, setExpandedMarket] = useState(false);

  return (
    <Card 
      className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 flex flex-col" 
      style={{ borderTopColor: color }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
            <img 
              src={imageUrl} 
              alt={symbol} 
              className="w-10 h-10 object-contain" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://cryptologos.cc/logos/${name.toLowerCase().replace(/ /g, '-')}-${symbol.toLowerCase()}-logo.png?v=029`;
              }}
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-sm font-medium">{symbol}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          {/* Seção de Descrição e Propósito */}
          <Collapsible open={expandedDesc} onOpenChange={setExpandedDesc} className="rounded-md">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold flex items-center">
                  <InfoIcon className="w-3.5 h-3.5 mr-1 text-muted-foreground" /> 
                  Sobre
                </h4>
                <CollapsibleTrigger className="text-xs flex items-center text-primary">
                  {expandedDesc ? (
                    <>
                      <ChevronUp className="w-3 h-3 mr-1" /> Mostrar menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3 mr-1" /> Ler mais
                    </>
                  )}
                </CollapsibleTrigger>
              </div>
            </div>
            {!expandedDesc && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            )}
            <CollapsibleContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
                
                <div className="pt-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <Coins className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Tipo:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Tipo e função principal da criptomoeda</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{type}</p>
                </div>
                
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <ZapIcon className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Finalidade:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Propósito principal desta criptomoeda</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{purpose}</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Seção de Tecnologia */}
          <Collapsible open={expandedTech} onOpenChange={setExpandedTech} className="rounded-md">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold flex items-center">
                  <Server className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                  Tecnologia
                </h4>
                <CollapsibleTrigger className="text-xs flex items-center text-primary">
                  {expandedTech ? (
                    <>
                      <ChevronUp className="w-3 h-3 mr-1" /> Mostrar menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3 mr-1" /> Ler mais
                    </>
                  )}
                </CollapsibleTrigger>
              </div>
            </div>
            {!expandedTech && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {techSpecs}
              </p>
            )}
            <CollapsibleContent>
              <div className="space-y-2">
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <Database className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Especificações técnicas:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Detalhes sobre blockchain, algoritmo e outras características técnicas</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{techSpecs}</p>
                </div>
                
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <Globe className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Rede:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Rede blockchain utilizada</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{network}</p>
                </div>
                
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Segurança:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Informações sobre a segurança da rede</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{security}</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Seção de Uso e Mercado */}
          <Collapsible open={expandedUsage} onOpenChange={setExpandedUsage} className="rounded-md">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold flex items-center">
                  <Globe className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                  Utilização
                </h4>
                <CollapsibleTrigger className="text-xs flex items-center text-primary">
                  {expandedUsage ? (
                    <>
                      <ChevronUp className="w-3 h-3 mr-1" /> Mostrar menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3 mr-1" /> Ler mais
                    </>
                  )}
                </CollapsibleTrigger>
              </div>
            </div>
            {!expandedUsage && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {useCases}
              </p>
            )}
            <CollapsibleContent>
              <div className="space-y-2">
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <ZapIcon className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Casos de uso:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Exemplos de uso real desta criptomoeda</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{useCases}</p>
                </div>
                
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <BarChart3 className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Exchanges:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Onde esta criptomoeda pode ser negociada</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{exchanges}</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Seção de Mercado e Tokenomics */}
          <Collapsible open={expandedMarket} onOpenChange={setExpandedMarket} className="rounded-md">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold flex items-center">
                  <BarChart3 className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                  Mercado
                </h4>
                <CollapsibleTrigger className="text-xs flex items-center text-primary">
                  {expandedMarket ? (
                    <>
                      <ChevronUp className="w-3 h-3 mr-1" /> Mostrar menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3 mr-1" /> Ler mais
                    </>
                  )}
                </CollapsibleTrigger>
              </div>
            </div>
            {!expandedMarket && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {tokenomics}
              </p>
            )}
            <CollapsibleContent>
              <div className="space-y-2">
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <Coins className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Tokenomics:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Informações sobre fornecimento e economia do token</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{tokenomics}</p>
                </div>
                
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <BarChart3 className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Relevância:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Posição e importância no mercado de criptomoedas</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{relevance}</p>
                </div>
                
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm">
                          <InfoIcon className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                          <span className="font-medium">Curiosidades:</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Fatos interessantes sobre esta criptomoeda</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-sm text-muted-foreground ml-5">{funFacts}</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <Separator className="my-2" />
          
          <div className="flex items-center justify-between mt-auto">
            <h4 className="text-sm font-semibold">Possui lastro?</h4>
            <Badge variant={backed.includes("Sim") ? "success" : backed.includes("Parcial") ? "warning" : "destructive"}>
              {backed}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
