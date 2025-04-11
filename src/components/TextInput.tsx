
import { Textarea } from "@/components/ui/textarea";
import { FileQuestion } from "lucide-react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput = ({ value, onChange, placeholder, disabled }: TextInputProps) => {
  return (
    <div className="space-y-3">
      <label 
        htmlFor="medical-text" 
        className="block text-base font-medium flex items-center"
      >
        <FileQuestion className="h-5 w-5 mr-2 text-accent" />
        <span>Enter medical information to check</span>
      </label>
      <Textarea
        id="medical-text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Paste a medical claim or advice here..."}
        disabled={disabled}
        className="min-h-[140px] w-full px-4 py-3 rounded-xl text-base focus:border-accent focus:ring-accent transition-shadow shadow-sm"
      />
    </div>
  );
};

export default TextInput;
