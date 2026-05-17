"use client";

import { useState } from "react";
import { BootScreen } from "@/components/boot";
import MissionBriefing from "@/components/MissionBriefing";
import ExchangeSimulator from "@/components/ExchangeSimulator";
import ProjectDecoded from "@/components/ProjectDecoded";
import WhyThisUser from "@/components/WhyThisUser";
import WhyThisMission from "@/components/WhyThisMission";
import AcademicEmergency from "@/components/AcademicEmergency";
import MemeAppendix from "@/components/MemeAppendix";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  if (!bootComplete) {
    return <BootScreen onAccessDossier={() => setBootComplete(true)} />;
  }

  return (
    <>
      <MissionBriefing />
      <ExchangeSimulator />
      <ProjectDecoded />
      <WhyThisUser />
      <WhyThisMission />
      <AcademicEmergency />
      <MemeAppendix />
    </>
  );
}