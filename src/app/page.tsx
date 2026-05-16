import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Urgency from "@/components/Urgency";
import CTAForm from "@/components/CTAForm";

export default function Home() {
  return (
    <div className="min-h-full bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.06),transparent_60%)]" />
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Benefits />
        <Urgency />
        <CTAForm />
      </main>
    </div>
  );
}
