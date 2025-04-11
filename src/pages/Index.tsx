
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import TextInput from "@/components/TextInput";
import CheckButton from "@/components/CheckButton";
import Result from "@/components/Result";
import { classifyText } from "@/services/classificationService";
import useTelegramWebApp from "@/hooks/useTelegramWebApp";
import { Stethoscope } from "lucide-react";

const Index = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<'REAL' | 'FAKE' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isReady, webApp } = useTelegramWebApp();

  useEffect(() => {
    // Apply Telegram theme if available
    if (isReady && webApp) {
      document.body.classList.add('telegram-app');
    }
  }, [isReady, webApp]);

  const handleCheck = async () => {
    if (!text.trim()) {
      setError("Please enter some text to check");
      return;
    }

    setError(null);
    setIsLoading(true);
    setResult(null);

    try {
      const response = await classifyText(text);
      setResult(response.label);
    } catch (err) {
      setError("An error occurred while checking the text. Please try again.");
      console.error("Classification error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="telegram-app min-h-screen p-4 flex flex-col items-center justify-center medical-gradient-bg">
      <div className="w-full max-w-md">
        <Card className="glass-card shadow-lg border-0">
          <CardHeader className="pb-2 text-center">
            <div className="flex justify-center mb-2">
              <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                <Stethoscope className="h-8 w-8 text-accent" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Medical Misinformation Detector
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Verify if medical claims are likely real or fake
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <TextInput
              value={text}
              onChange={setText}
              disabled={isLoading}
            />
            
            {error && (
              <p className="text-red-500 text-sm mt-3 bg-red-50 p-2 rounded-lg border border-red-200">{error}</p>
            )}
            
            <CheckButton
              onClick={handleCheck}
              isLoading={isLoading}
              disabled={!text.trim()}
            />

            <Result label={result} isLoading={isLoading} />
          </CardContent>
        </Card>
        <p className="text-xs text-center mt-4 text-gray-500">Always consult healthcare professionals for medical advice.</p>
      </div>
    </div>
  );
};

export default Index;
