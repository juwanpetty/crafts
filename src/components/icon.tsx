import { AIIcon } from "@/icons/ai-icon";
import { BoldIcon } from "@/icons/bold-icon";
import { CodeIcon } from "@/icons/code-icon";
import { EquationIcon } from "@/icons/equation-icon";
import { ItalicIcon } from "@/icons/italic-icon";
import { MessageContentIcon } from "@/icons/message-content-icon";
import { PlaceholderIcon } from "@/icons/placeholder-icon";
import { StrikethroughIcon } from "@/icons/strikethrough-icon";
import { UnderlineIcon } from "@/icons/underline-icon";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const icons = {
  ai: AIIcon,
  bold: BoldIcon,
  code: CodeIcon,
  equation: EquationIcon,
  italic: ItalicIcon,
  "message-content": MessageContentIcon,
  placeholder: PlaceholderIcon,
  strikethrough: StrikethroughIcon,
  underline: UnderlineIcon,
} as const;

export type IconName = keyof typeof icons;

type IconProps = ComponentProps<"svg"> & {
  name: IconName;
  className?: string;
};

export function Icon({ name, className, ...props }: IconProps) {
  const SvgIcon = icons[name];
  return <SvgIcon className={cn("size-5 shrink-0", className)} {...props} />;
}
