
import { Button } from "@/components/ui/button";
import { Loader2, Microscope } from "lucide-react";

interface CheckButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

const CheckButton = ({ onClick, isLoading, disabled }: CheckButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      disabled={disabled || isLoading}
      className="telegram-primary-button w-full mt-6 text-base font-medium h-12 rounded-xl shadow-md transition-all hover:shadow-lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Microscope className="mr-2 h-5 w-5" />
          Check Misinformation
        </>
      )}
    </Button>
  );
};

export default CheckButton;
