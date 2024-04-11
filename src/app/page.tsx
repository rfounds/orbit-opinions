import Image from "next/image";
import { Button } from "@/components/ui/button";
import AttentionGetter from "@/components/AttentionGetter";
import Pricing from "@/components/Pricing";

export default function Home() {
    return (
        <>
            <AttentionGetter />
            <Pricing />
        </>
    );
}
