
import React from "react";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export const PageHeader = ({
  title,
  description,
  icon,
  color = "bg-primary"
}: PageHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      {icon && (
        <div className={`w-16 h-16 ${color} rounded-2xl mx-auto flex items-center justify-center mb-4`}>
          {icon}
        </div>
      )}
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </div>
  );
};
