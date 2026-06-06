import React from 'react';
import { VideoIntro } from '../components/Hero/VideoIntro';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#060606]">
      <VideoIntro />
    </section>
  );
};
