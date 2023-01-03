import { memo } from "react";
import { View } from "react-native";
import StatBar from "./StatBar";

type StatRender = { display: string };
const statRenders: StatRender[] = [
  { display: "HP" },
  { display: "Atk" },
  { display: "Def" },
  { display: "SpA" },
  { display: "SpD" },
  { display: "Spe" },
];

type StatsProps = { stats: number[] };
const Stats = (props: StatsProps) => {
  const { stats } = props;
  return (
    <View style={{ flexDirection: "row" }}>
      {statRenders.map((stat, index) => (
        <StatBar key={index} name={stat.display} value={stats[index]} />
      ))}
    </View>
  );
};

export default memo(Stats);
