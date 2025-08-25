import React, { useState } from 'react';

const ParticleSizeCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardData = [
    {
      title: 'MICRON, D50 (SUPER FINE)',
      description:
        'Our precision grinding technology produces ultra-fine GCC with a micron size ranging between 2.5 to 3.5 microns (D50). Ideal for high-performance applications such as premium paints, plastics, and specialty papers, this grade offers exceptional brightness and smoothness while maintaining tight particle size control.',
      sizeRange: '2.5 – 3.5 μM',
      feature: 'EXCEPTIONAL BRIGHTNESS FOR PREMIUM PRODUCTS',
      yieldRate: '95%+',
      batchUniformity: '95%',
      consistency: '±0.1 μM',
      activeGrade: 'Micron, D50 (Super Fine)',
      imageSrc: '/assets/particles/image 6 (1).png',
      imageAlt: 'Super fine particle size visualization',
      grades: [
        { name: 'Micron, D50 (Super Fine)' },
        { name: 'Micron, D50 (Fine)' },
        { name: 'Micron, D50 (Medium Fine)' },
        { name: 'Micron, D50 (Coarse)' },
      ],
    },
    {
      title: 'MICRON, D50 (FINE)',
      description:
        'Produced with advanced micronizing systems, this grade has a particle size of 3.5 to 5.0 microns (D50), offering excellent opacity and smooth dispersion. Suitable for plastics, rubber, and coating industries, it ensures high purity and controlled particle size distribution for consistent performance.',
      sizeRange: '3.5 – 5.0 μM',
      feature: 'SUPERIOR OPACITY FOR QUALITY APPLICATIONS',
      yieldRate: '90%+',
      batchUniformity: '98%',
      consistency: '±0.15 μM',
      activeGrade: 'Micron, D50 (Fine)',
      imageSrc: '/assets/particles/image 6 (3).png',
      imageAlt: 'Fine particle size visualization',
      grades: [
        { name: 'Micron, D50 (Super Fine)' },
        { name: 'Micron, D50 (Fine)' },
        { name: 'Micron, D50 (Medium Fine)' },
        { name: 'Micron, D50 (Coarse)' },
      ],
    },
    {
      title: 'MICRON, D50 (MEDIUM FINE)',
      description:
        'This grade offers a balanced micron size range of 5.0 to 10 microns (D50), making it versatile for applications in paper manufacturing, adhesives, and construction materials. It provides reliable performance with optimal particle packing and improved mechanical properties.',
      sizeRange: '5.0 – 10 μM',
      feature: 'BALANCED PROPERTIES FOR VERSATILE USE',
      yieldRate: '92%+',
      batchUniformity: '97%',
      consistency: '±0.2 μM',
      activeGrade: 'Micron, D50 (Medium Fine)',
      imageSrc: '/assets/particles/image 6 (4).png',
      imageAlt: 'Medium fine particle size visualization',
      grades: [
        { name: 'Micron, D50 (Super Fine)' },
        { name: 'Micron, D50 (Fine)' },
        { name: 'Micron, D50 (Medium Fine)' },
        { name: 'Micron, D50 (Coarse)' },
      ],
    },
    {
      title: 'MICRON, D50 (COARSE)',
      description:
        'Our advanced processing ensures production of super-fine coarse-grade GCC with a size of 10 to 20 microns (D50). Designed for large-scale industrial needs, this grade maintains the highest quality standards while meeting robust monthly production capacities.',
      sizeRange: '10 – 20 μM',
      feature: 'MAINTAINING THE HIGHEST STANDARDS OF QUALITY',
      yieldRate: '93%+',
      batchUniformity: '95%',
      consistency: '±0.1 μM',
      activeGrade: 'Micron, D50 (Coarse)',
      imageSrc: '/assets/particles/image 6 (5).png',
      imageAlt: 'Coarse particle size visualization',
      grades: [
        { name: 'Micron, D50 (Super Fine)' },
        { name: 'Micron, D50 (Fine)' },
        { name: 'Micron, D50 (Medium Fine)' },
        { name: 'Micron, D50 (Coarse)' },
      ],
    },
  ];

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cardData.length);
  const currentData = cardData[currentCard];

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          {/* Left: content panel */}
          <div
            className="flex-1 cursor-pointer bg-[#FFF7E9]"
            onClick={nextCard}
          >
            <div className="flex min-h-[739px] flex-col lg:flex-row">
              {/* Copy block */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16">
                <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-black uppercase leading-none tracking-tight text-[#CF8700]">
                  PARTICAL SIZE
                </h1>

                <h2 className="mt-6 text-[26px] md:text-[34px] lg:text-[44px] font-semibold uppercase leading-tight text-black">
                  {currentData.title}
                </h2>

                <p className="mt-4 max-w-[520px] text-[16px] md:text-[18px] leading-7 md:leading-8 text-black">
                  {currentData.description}
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#CF8700] px-4 py-2 text-white">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="text-sm font-bold">{currentData.sizeRange}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-[#E6A835] px-4 py-2 text-white">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wide">
                      {currentData.feature}
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap items-start gap-10 lg:gap-12">
                  <div className="text-left">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
                      {currentData.yieldRate}
                    </div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-gray-600">
                      YIELD RATE
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
                      {currentData.batchUniformity}
                    </div>
                    <div className="mt-1 text-[11px] font-bold uppercase leading-4 tracking-wide text-gray-600">
                      BATCH OF
                      <br />
                      UNIFORMITY
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
                      {currentData.consistency}
                    </div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-gray-600">
                      CONSISTENCY
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-8 inline-flex h-[56px] items-center justify-center rounded-[4px] bg-[#CF8700] px-8 text-[16px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-[#B8770A]">
                  Learn More &gt;
                </button>
              </div>

              {/* Image panel */}
              <div className="flex w-full items-center justify-center p-8 lg:w-[340px] lg:pr-14">
                <div className="h-[520px] w-[340px] overflow-hidden rounded-lg bg-black">
                  <img
                    src={currentData.imageSrc}
                    alt={currentData.imageAlt}
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: orange rail with exact dimensions via Tailwind */}
          <aside
            className="
              relative
              flex items-center justify-center
              bg-[#CF8700]
              opacity-100
              rotate-0
              w-[483px] h-[475px]
              rounded-tr-[7px] rounded-br-[7px]
            "
            /* If you need absolute x-position at 1244px, uncomment below:
            style={{ left: 1244 }}
            className="absolute top-[YOUR_TOP_VALUE] ..."
            */
          >
            <div className="w-full p-5 lg:p-6">
              <div className="space-y-3">
                {currentData.grades.map((step, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCard(index);
                    }}
                  >
                    <div className="flex h-16 items-center rounded-[30px] border-2 border-[#CF8700] bg-white px-6">
                      <span className="text-[14px] font-medium uppercase text-black">
                        {step.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ParticleSizeCards;
