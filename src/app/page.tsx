import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTAForm from "@/components/CTAForm";

export default function Home() {
  return (
    <div className="min-h-full bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_55%)]" />
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Benefits />
        <FAQ />
        <CTAForm />
      </main>
    </div>
  );
}
