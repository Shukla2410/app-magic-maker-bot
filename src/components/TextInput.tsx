
import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput = ({ value, onChange, placeholder, disabled }: TextInputProps) => {
  return (
    <div className="space-y-2">
      <label 
        htmlFor="medical-text" 
        className="block text-sm font-medium"
      >
        Enter medical information to check
      </label>
      <Textarea
        id="medical-text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Paste a medical claim or advice here..."}
        disabled={disabled}
        className="min-h-[120px] w-full px-3 py-2"
      />
    </div>
  );
};

export default TextInput;
