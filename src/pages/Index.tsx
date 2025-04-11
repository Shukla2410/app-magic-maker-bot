
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import TextInput from "@/components/TextInput";
import CheckButton from "@/components/CheckButton";
import Result from "@/components/Result";
import { classifyText } from "@/services/classificationService";
import useTelegramWebApp from "@/hooks/useTelegramWebApp";

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
    <div className="telegram-app min-h-screen p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-center mb-1">
              Medical Misinformation Detector
            </CardTitle>
            <CardDescription className="text-center">
              Check if medical information is likely real or fake
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TextInput
              value={text}
              onChange={setText}
              disabled={isLoading}
            />
            
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            
            <CheckButton
              onClick={handleCheck}
              isLoading={isLoading}
              disabled={!text.trim()}
            />

            <Result label={result} isLoading={isLoading} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
