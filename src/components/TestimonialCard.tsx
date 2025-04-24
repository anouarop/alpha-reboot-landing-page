
import { Avatar } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  name: string;
  age: number;
  location: string;
}

export const TestimonialCard = ({ quote, name, age, location }: TestimonialProps) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-masculine-blue">
          <div className="w-full h-full bg-masculine-blue flex items-center justify-center text-white font-bold">
            {name[0]}
          </div>
        </Avatar>
        <div className="text-left">
          <p className="font-bold text-white">{name}</p>
          <p className="text-gray-400 text-sm">
            {age} • {location}
          </p>
        </div>
      </div>
      <p className="text-gray-300 italic">&quot;{quote}&quot;</p>
    </div>
  );
};
