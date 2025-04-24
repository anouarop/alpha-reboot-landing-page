import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CountdownTimer } from "@/components/CountdownTimer";

const Index = () => {
  const handleUnlock = () => {
    window.location.href = "https://biohackroot.com/unlocked-content";
  };

  return (
    <div className="min-h-screen bg-masculine-primary text-white">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Biohack Root: The Untold Secret to 
            <span className="text-masculine-blue"> Naturally Boost Your Testosterone</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            92% of men are running on LOW T — and have no idea why they feel tired, weak, or
            emotionally flat.
          </p>
          <Button
            onClick={handleUnlock}
            className="bg-masculine-accent hover:bg-masculine-accent/90 text-white px-8 py-6 text-lg rounded-md transition-all transform hover:scale-105"
          >
            Unlock the Biohack Protocol Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What They Don&apos;t Want You to Know...
          </h2>
          <p className="text-gray-300 mb-12 text-center">
            Doctors push pills, society weakens men, and fake influencers sell lies — but there&apos;s
            a natural way back to full masculine power.
          </p>

          {/* Benefits Section */}
          <div className="bg-white/5 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-6">✅ What You&apos;ll Discover Inside:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-masculine-blue mr-2">🍳</span>
                The exact foods and herbs that restart your hormonal engine
              </li>
              <li className="flex items-start">
                <span className="text-masculine-blue mr-2">💪</span>
                A 7-day testosterone reset protocol (results in 3 days)
              </li>
              <li className="flex items-start">
                <span className="text-masculine-blue mr-2">🚿</span>
                One shower trick that spikes T levels 187%
              </li>
              <li className="flex items-start">
                <span className="text-masculine-blue mr-2">🔥</span>
                How to rewire your brain to desire dominance, not dopamine
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <h3 className="text-2xl font-bold mb-8 text-center">📈 Real Results from Real Men</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <TestimonialCard
              quote="My confidence shot up after day 3. This stuff actually works."
              name="Jake M."
              age={32}
              location="Florida"
            />
            <TestimonialCard
              quote="I got my drive back without touching any pills."
              name="Omar B."
              age={40}
              location="Texas"
            />
          </div>

          {/* Urgency Section */}
          <div className="text-center space-y-6">
            <CountdownTimer />
            <p className="text-red-400">🕒 Hurry — limited access to this method!</p>
            <Button
              onClick={handleUnlock}
              className="bg-masculine-accent hover:bg-masculine-accent/90 text-white px-8 py-6 text-lg rounded-md transition-all transform hover:scale-105"
            >
              Unlock the Free PDF Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-400">
              💣 Bonus: Also receive a printable T-Booster Cheat Sheet & DIY Test Tracker (for free)!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
