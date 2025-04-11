
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
      className="telegram-primary-button w-full mt-4"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Checking...
        </>
      ) : (
        "Check Misinformation"
      )}
    </Button>
  );
};

export default CheckButton;
