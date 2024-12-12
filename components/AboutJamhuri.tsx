import { jamhuri } from "@/public/assets/images/Images";
import Image from "next/image";
import React from "react";

const AboutJamhuri = () => {
  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-auto items-center gap-8 px-4 md:px-16 py-8">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-bold text-white">
          What is Jamhuri Day?
        </h3>
        <p className="mt-4 text-gray-700 text-lg">
          Jamhuri Day, celebrated on December 12th, commemorates Kenya's independence in 1963 and the establishment of its republic in 1964. The word "Jamhuri" is derived from Swahili, meaning "republic." It is a time to honor Kenya's rich history, the sacrifices of freedom fighters, and the strides made toward unity and progress.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          This national holiday brings Kenyans together to celebrate their culture, heritage, and shared aspirations. Events such as parades, speeches, and cultural exhibitions take place across the country to mark the occasion.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
          <Image
            src={jamhuri}
            alt="Jamhuri Day celebration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutJamhuri;
