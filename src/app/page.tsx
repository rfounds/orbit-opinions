import Image from "next/image";
import { Button } from "@/components/ui/button";
import AttentionGetter from "@/components/AttentionGetter";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <AttentionGetter />
      <Features />
      <Pricing />
    </>
  );
}
