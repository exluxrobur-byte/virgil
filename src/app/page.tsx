import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import Intelligence from "@/sections/Intelligence";
import MCI from "@/sections/MCI";
import Citation from "@/sections/Citation";
import Stats from "@/sections/Stats";
import CTA from "@/sections/CTA";
import StoryWrapper from "@/components/StoryWrapper";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryWrapper>
        <Problem />
        <Solution />
        <Intelligence />
        <MCI />
      </StoryWrapper>
      <Citation />
      <Stats />
      <CTA />
    </main>
  );
}
