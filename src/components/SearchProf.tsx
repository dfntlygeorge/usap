import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { professors } from "@/data";
import { SearchProfProps } from "@/types/types";

export default function SearchProf({ setSelectedProfessor }: SearchProfProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedProfessor, setLocalSelectedProfessor] = React.useState<
    string | null
  >(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between lg:w-5/6"
        >
          {selectedProfessor || "Select professor..."}

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 sm:w-[200px]">
        <Command>
          <CommandInput placeholder="Search professor..." />
          <CommandList>
            <CommandEmpty>No professor found.</CommandEmpty>
            <CommandGroup>
              {professors.map((professor) => (
                <CommandItem
                  key={professor.name}
                  value={professor.name}
                  onSelect={() => {
                    setLocalSelectedProfessor(professor.name); // Update local state
                    setSelectedProfessor(professor.name); // Update parent state
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedProfessor === professor.name
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {professor.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
