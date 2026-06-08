import React from 'react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px] space-y-12">
        
        {/* Certifications Card Container */}
        <section className="relative py-16 px-8 overflow-hidden rounded-3xl border border-outline-variant/10 max-w-6xl mx-auto bg-surface-low/30 backdrop-blur-md">
          {/* Subtle Grid backdrop */}
          <div className="absolute inset-0 bg-surface-low/60 backdrop-blur-md -z-10"></div>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(#dbfcff 1px, transparent 1px), linear-gradient(90deg, #dbfcff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs text-secondary tracking-[0.3em] uppercase font-bold">Credentials</span>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {/* Cert 1 */}
              <div className="flex flex-col sm:flex-row gap-6 items-start bg-surface-lowest/40 p-6 rounded-2xl border border-outline-variant/5 hover:border-primary-container/20 transition-all h-full">
                <img src="/AIforprod.png" alt="AI for Product Management" className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0 rounded-lg" />
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-on-surface leading-snug">AI for Product Management</h4>
                  <p className="font-mono text-xs text-on-surface-variant/80">Google Cloud | Pendo &bull; Jun 2026</p>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Trained in LLM application, AI-powered product strategy, data-driven decision making, and product-led growth tactics.
                  </p>
                  <a href="https://www.credly.com/badges/ae42dd2a-0c41-4e0d-83cc-9b350c83c1cd/public_url" target="_blank" rel="noreferrer" className="inline-block pt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:underline">
                    View Credential
                  </a>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="flex flex-col sm:flex-row gap-6 items-start bg-surface-lowest/40 p-6 rounded-2xl border border-outline-variant/5 hover:border-primary-container/20 transition-all h-full">
                <img src="/PMbasics.png" alt="Product Management Basics" className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0 rounded-lg" />
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-on-surface leading-snug">Product Management Basics</h4>
                  <p className="font-mono text-xs text-on-surface-variant/80">Pendo | Mind the Product &bull; Jun 2026</p>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Trained in the PM lifecycle, focusing on product discovery, roadmapping, prioritization, and stakeholder management.
                  </p>
                  <a href="https://www.credly.com/badges/a1fc1cce-a690-42e9-89b0-2b509417f972/public_url" target="_blank" rel="noreferrer" className="inline-block pt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:underline">
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};
