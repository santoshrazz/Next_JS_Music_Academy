import { HeroSection } from "@/Components/HeroSection/HeroSection";
import { Mask_Reveal } from "@/Components/Mask_Reveal/Mask_Reveal";
import Courses from "@/Components/Our_Courses/Courses";
import { WhyChooseUs } from "@/Components/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Mask_Reveal />
      <Courses />
      <WhyChooseUs />
    </>
  );
}
