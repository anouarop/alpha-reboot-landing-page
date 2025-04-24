
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Secret = () => {
  const handleDownload = () => {
    // In a real-world scenario, you'd implement secure PDF download logic
    window.location.href = "https://biohackroot.com/testosterone-protocol.pdf";
  };

  return (
    <div className="min-h-screen bg-masculine-primary text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The Alpha Male <span className="text-masculine-blue">Reboot Protocol</span>
        </h1>
        
        <div className="bg-white/10 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">🔓 Unlocked Content</h2>
          <p className="text-gray-300 mb-6">
            Congratulations on gaining access to the most powerful testosterone optimization guide ever created.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center bg-masculine-dark p-4 rounded-md">
              <span className="text-masculine-blue mr-4">📘</span>
              <span>Complete 7-Day Testosterone Reset Protocol</span>
            </div>
            <div className="flex items-center bg-masculine-dark p-4 rounded-md">
              <span className="text-masculine-blue mr-4">🌿</span>
              <span>Hormone-Boosting Nutrition Guide</span>
            </div>
            <div className="flex items-center bg-masculine-dark p-4 rounded-md">
              <span className="text-masculine-blue mr-4">💪</span>
              <span>Mental Reprogramming Techniques</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleDownload}
          className="bg-masculine-accent hover:bg-masculine-accent/90 text-white px-8 py-6 text-lg rounded-md transition-all transform hover:scale-105"
        >
          Download PDF Protocol
          <Download className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-sm text-gray-400 mt-4">
          📌 This is a limited-time access. Download and save your copy now.
        </p>
      </div>
    </div>
  );
};

export default Secret;
