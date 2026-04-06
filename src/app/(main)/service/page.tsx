
import BodyClass from '@/components/Layouts/BodyClass';
import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service - Riteflow AI",
  description:
    "Riteflow AI is a service that provides AI-powered solutions for businesses. It is a platform that allows businesses to use AI to automate their processes and improve their efficiency.",
};

const service = () => {
  return (
    <div>
      <BodyClass className="service-page" />
      <h2 className='font-nunito py-30 text-center '>this is service page</h2>
      
    </div>
  )
}

export default service
