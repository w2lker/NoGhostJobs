import { Badge } from "@/components/ui/badge";

const getRatingColor = (reliabilityScore: number) => {
  if (reliabilityScore >= 80) return "bg-red-500";
  if (reliabilityScore >= 60) return "bg-yellow-500";
  if (reliabilityScore >= 40) return "bg-blue-500";
  return "bg-green-500";
};

type ReliabilityScoreBadgeProps = {
  score: number;
  className?: string;
};

export const ReliabilityScoreBadge = (props: ReliabilityScoreBadgeProps) => {
  return (
    <Badge
      className={`text-white ${getRatingColor(props.score)} ${props.className || ""}`}
    >
      {props.score}%
    </Badge>
  );
};
