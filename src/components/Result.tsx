
import { CheckCircle, AlertCircle, ShieldCheck, Shield, AlertTriangle, X } from "lucide-react";

interface ResultProps {
  label: 'REAL' | 'FAKE' | null;
  isLoading: boolean;
}

const Result = ({ label, isLoading }: ResultProps) => {
  if (isLoading) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center py-6 bg-white/50 rounded-xl backdrop-blur-sm">
        <div className="loading-spinner"></div>
        <p className="mt-3 text-sm font-medium text-gray-600">Analyzing the information...</p>
      </div>
    );
  }

  if (!label) return null;

  const isReal = label === 'REAL';
  
  return (
    <div className={`result-animation result-card glass-card ${isReal ? 'result-real' : 'result-fake'}`}>
      <div className="flex items-center">
        <div className={`result-icon ${isReal ? 'icon-real' : 'icon-fake'}`}>
          {isReal ? (
            <ShieldCheck size={28} />
          ) : (
            <AlertTriangle size={28} />
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold">
            {isReal 
              ? (
                <span className="flex items-center">
                  <span className="text-emerald-600">This appears to be REAL</span>
                  <CheckCircle className="ml-2 h-5 w-5 text-emerald-500" />
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="text-red-600">This appears to be FAKE</span>
                  <X className="ml-2 h-5 w-5 text-red-500" />
                </span>
              )
            }
          </h3>
          <p className="text-sm mt-2">
            {isReal 
              ? 'The information is likely reliable based on our analysis.' 
              : 'Be cautious as this information may be misleading or incorrect.'}
          </p>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          {isReal 
            ? 'This assessment is based on pattern matching against verified medical information.' 
            : 'This assessment found patterns consistent with misinformation or unverified claims.'}
        </p>
      </div>
    </div>
  );
};

export default Result;
