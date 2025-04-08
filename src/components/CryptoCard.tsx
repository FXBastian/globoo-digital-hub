
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, InfoIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";

interface CryptoCardProps {
  name: string;
  symbol: string;
  description: string;
  security: string;
  backed: string;
  imageUrl: string;
  color: string;
}

export const CryptoCard = ({
  name,
  symbol,
  description,
  security,
  backed,
  imageUrl,
  color,
}: CryptoCardProps) => {
  const [expandedDesc, setExpandedDesc] = useState(false);
  const [expandedSecurity, setExpandedSecurity] = useState(false);

  return (
    <Card 
      className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4 flex flex-col" 
      style={{ borderTopColor: color }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: color + '20' }}>
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={symbol} 
                className="w-10 h-10 object-contain" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png`;
                }}
              />
            ) : (
              <Skeleton className="w-10 h-10 rounded-full" />
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-sm font-medium">{symbol}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <Collapsible open={expandedDesc} onOpenChange={setExpandedDesc} className="rounded-md">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold flex items-center">
                  <InfoIcon className="w-3.5 h-3.5 mr-1 text-muted-foreground" /> 
                  Descrição
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
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={expandedSecurity} onOpenChange={setExpandedSecurity} className="rounded-md">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold flex items-center">
                  <InfoIcon className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
                  Segurança
                </h4>
                <CollapsibleTrigger className="text-xs flex items-center text-primary">
                  {expandedSecurity ? (
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
            {!expandedSecurity && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {security}
              </p>
            )}
            <CollapsibleContent>
              <p className="text-sm text-muted-foreground">
                {security}
              </p>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex items-center justify-between mt-auto pt-2 border-t">
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
