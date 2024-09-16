import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Import images
import LogoImg from '../img/logo.svg';
// Nike Air Max
import NikeImg from '../img/nike.png';
// Jordan 1 Low Fragment x Travis Scott
import JordanImg from '../img/nike2.png';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = ['#b6a179', '#272425', '#6389cb', '#f2c758', '#ffffff'];

  return (
    <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[150px]">
      {/* First Card - Nike Air Max */}
      <div className="relative perspective-1000">
        <motion.div
          style={{ x, y, rotateX, rotateY }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
          className="relative w-[360px] min-h-[500px] bg-[#181818] rounded-[20px] border-[4px] border-black p-6 cursor-grab"
        >
          <img src={LogoImg} alt="Logo" className="mb-4" />
          <h1 className="text-3xl mb-4 text-white/50 font-extrabold">Nike Air Dunk Jumbo</h1>
          <p className="max-w-[250px] text-white mb-4">
            Taking the classic look of heritage Nike Running into a new realm, the Nike Air Jumbo brings you a fast-paced look ready and cool for today's world.
          </p>
          <div className="flex items-center gap-x-4 mb-8">
            <button className="bg-white text-black text-base font-medium py-3 px-8 rounded-lg border border-transparent transition-all duration-300 ease-in-out transform hover:bg-transparent hover:text-white hover:border-white hover:scale-105">
              Add to Bag
            </button>
            <p className="text-xl font-bold text-white">$495.00</p>
          </div>
          <ul className="flex gap-x-2 mb-4">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                className="w-[50px] h-6 rounded-full cursor-pointer"
              />
            ))}
          </ul>
          {/* Image positioned absolutely */}
          <img src={NikeImg} alt="Nike" draggable="false" className="absolute left-[260px] top-[50px] w-[230px]" />
        </motion.div>
      </div>

      {/* Second Card - Jordan 1 Low Fragment x Travis Scott */}
      <div className="relative perspective-1000">
        <motion.div
          style={{ x, y, rotateX, rotateY }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
          className="relative w-[360px] min-h-[500px] bg-[#e4dfdc] rounded-[20px] border-[4px] border-white p-6 cursor-grab"
        >
          <img src={LogoImg} alt="Logo" className="mb-4" />
          <h1 className="text-3xl mb-4 font-extrabold">Jordan 1 Low Fragment x Travis Scott</h1>
          <p className="max-w-[250px] text-black mb-4">
            Collaboration between Jordan, Travis Scott, and Fragment Design to bring you a unique spin on the Jordan 1 Low.
          </p>
          <div className="flex items-center gap-x-4 mb-8">
            <button className="bg-[#2d2b2c] text-white text-base font-medium py-3 px-8 rounded-lg border border-transparent transition-all duration-300 ease-in-out transform hover:bg-transparent hover:text-black hover:border-black hover:scale-105">
              Add to Bag
            </button>
            <p className="text-xl font-bold text-black">$931.00</p>
          </div>
          <ul className="flex gap-x-2 mb-4">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                className="w-[50px] h-6 rounded-full cursor-pointer"
              />
            ))}
          </ul>
          {/* Image positioned absolutely */}
          <img src={JordanImg} alt="Jordan" draggable="false" className="absolute left-[260px] top-[80px] w-[250px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
