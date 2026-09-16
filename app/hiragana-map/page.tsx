import type { Metadata } from "next";
import KanaMap from "../components/KanaMap";

export const metadata: Metadata = {
  title: "ひらがなマップ | Onakawash",
  description: "ひとつずつ、ゆっくり覚えよう。Explore the basic hiragana, one row at a time.",
};

export default function HiraganaMapPage() {
  return <KanaMap />;
}
