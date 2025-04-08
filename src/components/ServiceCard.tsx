
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color?: string;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  link,
  color = "bg-primary"
}: ServiceCardProps) => {
  return (
    <Card className="service-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to={link}>Saiba Mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
