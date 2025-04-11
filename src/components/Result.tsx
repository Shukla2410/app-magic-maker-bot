
import { CheckCircle, AlertCircle } from "lucide-react";

interface ResultProps {
  label: 'REAL' | 'FAKE' | null;
  isLoading: boolean;
}

const Result = ({ label, isLoading }: ResultProps) => {
  if (isLoading) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center py-4">
        <div className="loading-spinner"></div>
        <p className="mt-2 text-sm text-gray-500">Analyzing the text...</p>
      </div>
    );
  }

  if (!label) return null;

  const isReal = label === 'REAL';
  
  return (
    <div className={`result-animation result-card ${isReal ? 'result-real' : 'result-fake'}`}>
      <div className="flex items-center">
        <div className={`result-icon ${isReal ? 'icon-real' : 'icon-fake'}`}>
          {isReal ? (
            <CheckCircle size={24} />
          ) : (
            <AlertCircle size={24} />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            {isReal ? 'This appears to be REAL' : 'This appears to be FAKE'}
          </h3>
          <p className="text-sm mt-1">
            {isReal 
              ? 'The information is likely reliable based on our analysis.' 
              : 'Be cautious as this information may be misleading or incorrect.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
