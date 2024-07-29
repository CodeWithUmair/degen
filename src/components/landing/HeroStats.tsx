import { heroStats } from "@/assets/mock";
import Image from "next/image";

export default function HeroStats() {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#0A000457] to-[#23232376] p-6 text-white backdrop-blur-[10px]">
      <h2 className="mb-6 _uppercase_">Stats</h2>
      <div className="space-y-4">
        {heroStats.map(({ label, value, icon }, i) => {
          return (
            <div key={i} className="flex items-center">
              <Image src={icon} width={25} height={25} className="mr-3  text-yellow-300 object-contain" alt="Icon" />
              <div>
                <div className="text-[11px] text-neutral-500 font-medium">{label}</div>
                <div className={`${i == 2? "text-redColor": "text-green" } font-semibold text-sm`}>{value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


