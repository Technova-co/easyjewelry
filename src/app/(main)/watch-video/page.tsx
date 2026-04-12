'use client';

import React from 'react';
import YoutubeEmbed from '@/components/video/youtubeEmbed';
import Heading from '@/components/ui/heading';

export default function watchVideoPage() {
  return (
    <>

       <section className="section-bottom-border relative z-[1]">
         <div className="container">
             <div className="border-container section-spacing-lg">
      


         <Heading as="h1" >
          See EasyJewelry in Action
        </Heading>
        <p  className="mt-4 md:mt-5 text-offWhite/80">
        Watch our demo and see how easy it is to manage your entire jewelry business from one screen.
          </p>
        
      <YoutubeEmbed />

           </div>

            </div>

    </section>  
    </>
  );
}
