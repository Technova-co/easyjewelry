// components/sections/SolutionsSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { solutionsData } from '@/data/solutionsData';
import SectionBanner from '@/components/shortCode/SectionBanner';
import UpArrow from '../icons/UpArrow';
import MarketingIcon from '../icons/MarketingIcon';
import ChartIcon from '../icons/ChartIcon';
import TtIcon from '../icons/TtIcon';
import SupportIcon from '../icons/SupportIcon';
import TalentIcon from '../icons/TalentIcon';
import InsightsIcon from '../icons/InsightsIcon';
import type { IconProps } from '../icons/types';

const iconMap: Record<string, React.FC<IconProps>> = {
  MarketingIcon,
  ChartIcon,
  TtIcon,
  SupportIcon,
  TalentIcon,
  InsightsIcon,
};

const SolutionsSection: React.FC = () => {
  return (
    <section className="section-bottom-border relative z-[1]">
      <div className="container">
        <div className="border-container section-spacing-lg">

          <SectionBanner
            outlineButtonText="Solutions"
            title="Built for both retailers & wholesalers"
            description="Whether you run a single retail store, a wholesale office, or multiple branches, EasyJewelry adapts to the way you work."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 md:mt-14" >
            {solutionsData.map((solution) => {
              const IconComponent = iconMap[solution.iconId];

              return (
                <div
                  key={solution.id}
                  className="px-5 pt-5 pb-6 md:pb-8 bg-blue rounded-20 border border-lineColor/70 relative group border-moving before:rounded-xl sm:before:rounded-2xl lg:before:rounded-[20px] z-[1]"
                  data-sttr-card
                >
                  {/* Top row — icon + arrow */}
                  <div className="flex items-center justify-between gap-5 mb-5">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-[10px] p-2.5">
                      
                        <span className="text-white text-xs"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 3h12l4 6-10 13L2 9z"/>
  <path d="M2 9h20"/>
  <path d="M12 22L6 9l6-6 6 6z"/>
</svg></span>
                      
                    </div>
                    {/* Title */}
                      <h3 className="text-xl text-offWhite font-medium leading-normal">
                        {solution.title}
                      </h3>
                  
                  </div>

                  

                  {/* Divider */}
                  <div className="my-4 gradient-border w-full h-[1px]" />

                  {/* Description */}
                  <p className="text-offWhite/60 text-sm mb-5">
                    {solution.description}
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2.5">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit.id}
                        className="flex items-start gap-2.5 text-sm text-offWhite/70"
                      >
                        <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3L3 5L7 1" stroke="#b8960c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {benefit.text}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <Link
                    href={`/${solution.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-primary mt-6 hover:gap-2.5 transition-all float-right"
                  >
                    Learn more →
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

SolutionsSection.displayName = 'SolutionsSection';

export default SolutionsSection;