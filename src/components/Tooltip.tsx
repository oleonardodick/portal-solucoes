import { ReactNode } from 'react';
import {
  ShadTooltip,
  ShadTooltipTrigger,
  ShadTooltipContent,
} from './ui/shadtooltip';

interface TooltipType {
  children: ReactNode;
  texto: string;
}

export default function Tooltip({ children, texto }: TooltipType) {
  return (
    <ShadTooltip>
      <ShadTooltipTrigger asChild>{children}</ShadTooltipTrigger>
      <ShadTooltipContent className="bg-gray-800 text-white p-1 rounded-sm text-sm">
        <p>{texto}</p>
      </ShadTooltipContent>
    </ShadTooltip>
  );
}
