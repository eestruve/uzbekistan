/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EcosystemMarquee } from './components/EcosystemMarquee';
import { BarriersSection } from './components/BarriersSection';
import { Step1LeadersSection } from './components/Step1LeadersSection';
import { Step2CatalogSection } from './components/Step2CatalogSection';
import { Step3FinanceSection } from './components/Step3FinanceSection';
import { Step4SovereigntySection } from './components/Step4SovereigntySection';
import { Step5SimulatorSection } from './components/Step5SimulatorSection';
import { RoadmapActionsSection } from './components/RoadmapActionsSection';
import { Footer } from './components/Footer';

import { SolutionPassportModal } from './components/SolutionPassportModal';
import { PsgApplicationModal } from './components/PsgApplicationModal';
import { MeetingModal } from './components/MeetingModal';
import { MemorandumModal } from './components/MemorandumModal';
import { Solution } from './types';

export default function App() {
  const [selectedPassportSolution, setSelectedPassportSolution] = useState<Solution | null>(null);
  const [applicationSolution, setApplicationSolution] = useState<Solution | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isMemorandumModalOpen, setIsMemorandumModalOpen] = useState(false);

  const handleSelectSolutionForApplication = (solution: Solution) => {
    setApplicationSolution(solution);
    setIsApplicationModalOpen(true);
  };

  const handleOpenPassport = (solution: Solution) => {
    setSelectedPassportSolution(solution);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenMeetingModal={() => setIsMeetingModalOpen(true)}
        onOpenMemorandumModal={() => setIsMemorandumModalOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-grow pt-[66px]">
        {/* Screen 1: Hero */}
        <HeroSection
          onOpenMemorandumModal={() => setIsMemorandumModalOpen(true)}
          onOpenMeetingModal={() => setIsMeetingModalOpen(true)}
        />

        {/* Partner Ecosystem Strip */}
        <EcosystemMarquee />

        {/* Screen 2: Barriers & Singapore Standard */}
        <BarriersSection />

        {/* Screen 3: Step 1 Leaders & Demand Audit */}
        <Step1LeadersSection onOpenMeetingModal={() => setIsMeetingModalOpen(true)} />

        {/* Screen 4: Step 2 GoBusiness PSG Catalog */}
        <Step2CatalogSection
          onSelectSolution={handleSelectSolutionForApplication}
          onOpenPassport={handleOpenPassport}
        />

        {/* Screen 5: Step 3 Financial Gateway */}
        <Step3FinanceSection onOpenMeetingModal={() => setIsMeetingModalOpen(true)} />

        {/* Screen 6: Step 4 Shopfloor & Law ЗРУ-547 */}
        <Step4SovereigntySection />

        {/* Screen 7: Step 5 Macro-Effect Simulator & Enterprise ROI */}
        <Step5SimulatorSection onOpenMeetingModal={() => setIsMeetingModalOpen(true)} />

        {/* Screen 8: Roadmap & Executive Call to Action */}
        <RoadmapActionsSection
          onOpenMeetingModal={() => setIsMeetingModalOpen(true)}
          onOpenMemorandumModal={() => setIsMemorandumModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenMemorandumModal={() => setIsMemorandumModalOpen(true)}
        onOpenMeetingModal={() => setIsMeetingModalOpen(true)}
      />

      {/* Interactive Modals */}
      <SolutionPassportModal
        solution={selectedPassportSolution}
        onClose={() => setSelectedPassportSolution(null)}
        onApply={handleSelectSolutionForApplication}
      />

      <PsgApplicationModal
        solution={applicationSolution}
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />

      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />

      <MemorandumModal
        isOpen={isMemorandumModalOpen}
        onClose={() => setIsMemorandumModalOpen(false)}
      />
    </div>
  );
}
