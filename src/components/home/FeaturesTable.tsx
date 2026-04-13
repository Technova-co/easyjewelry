'use client';

import React, { useState } from 'react';
import { featuresTableData, FeatureStatus } from '@/data/featuresTableData';
import SectionBanner from '@/components/shortCode/SectionBanner';
import InfoIcon from '../icons/InfoIcon';

const StatusIcon: React.FC<{ status: FeatureStatus }> = ({ status }) => {
  if (status === 'yes') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#b8960c" fillOpacity="0.15" />
        <path d="M5 9L7.5 11.5L13 6" stroke="#b8960c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === 'partial') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#888" fillOpacity="0.15" />
        <path d="M5.5 9H12.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#ef4444" fillOpacity="0.15" />
      <path d="M6 6L12 12M12 6L6 12" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const FeaturesTable: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <section className="section-bottom-border">
      <div className="container">
        <div className="border-container section-spacing-lg">

          <SectionBanner
            variant="two"
            outlineButtonText="Features"
            title="Built for Every Part of Your Jewelry Business"
            description="From inventory and billing to accounting and finance EasyJewelry got you covered."
          />

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuresTableData.map((group) => (
              <div
                key={group.id}
                className="bg-blue rounded-20 border border-lineColor/50 overflow-hidden flex flex-col"
              >
                {/* Group Header */}
                <div className="px-5 py-4 border-b border-lineColor/50 bg-gradient-to-r from-primary/10 to-transparent">
                  <h3 className="text-base font-semibold text-offWhite tracking-wide">
                    {group.groupName}
                  </h3>
                </div>

                {/* Feature Rows */}
                <div className="divide-y divide-lineColor/30 flex-1">
                  {group.features.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center justify-between px-5 py-3 hover:bg-lineColor/10 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-paragraph">
                          {feature.name}
                        </span>
                        {feature.tooltip && (
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() =>
                                setActiveTooltip(
                                  activeTooltip === feature.id ? null : feature.id
                                )
                              }
                              className="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                              aria-label={`More information about ${feature.name}`}
                            >
                              <InfoIcon className="w-4 h-4 cursor-pointer" />
                            </button>
                            {activeTooltip === feature.id && (
                              <div className="absolute w-[200px] left-1/2 -translate-x-1/2 bottom-full mb-3 p-3 bg-secondary rounded-lg text-center z-10 shadow-lg">
                                <p className="text-xs text-offWhite">{feature.tooltip}</p>
                                <div className="w-3 h-3 rotate-45 bg-secondary absolute left-1/2 -translate-x-1/2 -bottom-1.5" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <StatusIcon status={feature.status} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

FeaturesTable.displayName = 'FeaturesTable';

export default FeaturesTable;