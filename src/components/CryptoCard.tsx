
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [expanded, setExpanded] = useState(false);

  return (
    <Card 
      className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden border-t-4" 
      style={{ borderTopColor: color }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center">
            <img src={imageUrl} alt={symbol} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-sm font-medium">{symbol}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Descrição</h4>
            <p className={`text-sm text-muted-foreground ${!expanded && description.length > 100 ? 'line-clamp-3' : ''}`}>
              {description}
            </p>
            {description.length > 100 && (
              <button 
                onClick={() => setExpanded(!expanded)} 
                className="text-xs mt-1 flex items-center text-primary"
              >
                {expanded ? (
                  <>
                    <ChevronUp className="w-3 h-3 mr-1" /> Mostrar menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3 mr-1" /> Ler mais
                  </>
                )}
              </button>
            )}
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Segurança</h4>
            <p className={`text-sm text-muted-foreground ${!expanded && security.length > 100 ? 'line-clamp-3' : ''}`}>
              {security}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Possui lastro?</h4>
            <Badge variant={backed.includes("Sim") ? "success" : backed.includes("Parcial") ? "warning" : "destructive"}>
              {backed}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
