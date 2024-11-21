import SkillCard from "@/app/ui/skilltest/SkillCard";

export default function Home() {
  return (
    <>
      <p>Skill Test</p>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <SkillCard />
      </div>
    </>
  );
}
