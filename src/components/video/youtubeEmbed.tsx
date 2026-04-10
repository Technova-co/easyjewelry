'use client';

import React from 'react';

interface YoutubeEmbedProps {
  url?: string;
  title?: string;
  className?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  url = 'https://www.youtube.com/embed/oFSE_APl7ck?si=xOIzQdL0Le66wVLY',
  title = 'EasyJewelry — Jewelry Store Management Software Demo',
  className = '',
}) => {
  return (

    <section className="section-bottom-border relative z-[1]">
         <div className="container">
             <div className="border-container section-spacing-lg">
      

                <div className={`relative w-full aspect-video rounded-20 overflow-hidden ${className}`}>
                <iframe
                    src={url}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                />
                </div>
                </div>

            </div>

    </section>  
  );
};

YoutubeEmbed.displayName = 'YoutubeEmbed';

export default YoutubeEmbed;