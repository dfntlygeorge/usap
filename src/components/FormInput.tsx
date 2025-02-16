import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  as?: React.ElementType;
  readOnly?: boolean;
  value?: string;
}

const FormInput = ({
  name,
  label,
  placeholder,
  control,
  as: Component = Input,
  readOnly = false,
  value,
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl className="">
            <Component
              placeholder={placeholder}
              {...field}
              readOnly={readOnly}
              value={value}
              disabled={readOnly}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
