import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator as SeparatorPrimitive } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingToolbar() {
  return (
    <div className="border border-border rounded-lg p-1 flex items-center justify-start">
      <TooltipProvider delayDuration={700} skipDelayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Bold</span>
              <Icon name="bold" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Bold</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>B</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Italicize</span>
              <Icon name="italic" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Italicize</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>I</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Underline</span>
              <Icon name="underline" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Underline</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>U</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Strike-through</span>
              <Icon name="strikethrough" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Strike-through</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>X</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Mark as code</span>
              <Icon name="code" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Mark as code</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>E</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <span className="sr-only">Mark as equation</span>
              <Icon name="equation" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Mark as equation</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>E</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Separator />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              <Icon name="message-content" />
              <span className="px-0.5 text-sm font-medium">Comment</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Comment</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>M</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>

        <Separator />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              <Icon name="ai" />
              <span className="px-0.5 text-sm font-medium">Ask AI</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <span className="font-medium">Ask AI</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>J</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function Separator() {
  return (
    <SeparatorPrimitive
      orientation="vertical"
      className="data-[orientation=vertical]:h-6 mx-1.5"
    />
  );
}
