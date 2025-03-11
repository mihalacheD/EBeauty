import { HStack } from "@chakra-ui/react";
import { Star } from "lucide-react";

const RenderStar = ({ rating }: { rating: number }) => {
  // Rating-ul e întreg sau decimal, API returnează între 0 și 5
  const fullStars = Math.round(rating);

  return (
    <HStack>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          fill={i < fullStars ? "#FFD700" : "none"} // Umple stelele până la rating
          stroke="#FFD700"
          className="w-5 h-5"
        />
      ))}
    </HStack>
  );
};

export default RenderStar;
