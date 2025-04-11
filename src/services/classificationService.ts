
interface ClassificationRequest {
  text: string;
}

interface ClassificationResponse {
  label: 'REAL' | 'FAKE';
}

export const classifyText = async (text: string): Promise<ClassificationResponse> => {
  try {
    const response = await fetch('https://myapi.com/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error classifying text:', error);
    throw error;
  }
};
