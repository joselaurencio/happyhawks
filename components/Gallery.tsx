"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

const images = [
  "55208981042_35dc2c11ee_o.jpg",
  "55208995177_ff7b1c29e0_o.jpg",
  "55209901241_39100e0109_o.jpg",
  "55210089954_b7e48fd54c_o.jpg",
  "55210141789_3773f14d8c_o.jpg",
  "55210295685_64886bcdbb_o.jpg",
  "img_0041_55209072437_o.jpg",
  "img_0140_55210129698_o.jpg",
  "img_0244_55210219559_o.jpg",
  "img_0263_55210389245_o.jpg",
  "img_0266_55210139393_o.jpg",
  "img_0269_55209085517_o.jpg",
  "img_0277_55209991491_o.jpg",
  "img_0280_55210387165_o.jpg",
  "img_0283_55210387095_o.jpg",
  "img_0286_55209989431_o.jpg",
  "img_0289_55209989356_o.jpg",
  "img_0297_55210233464_o.jpg",
  "img_0301_55210137578_o.jpg",
  "img_0304_55209083337_o.jpg",
  "img_0309_55209989221_o.jpg",
  "img_0314_55210230819_o.jpg",
  "img_0317_55209083037_o.jpg",
  "img_0320_55210136583_o.jpg",
  "img_0323_55209082072_o.jpg",
  "img_0326_55210229759_o.jpg",
  "img_0329_55210135743_o.jpg",
  "img_0332_55210135263_o.jpg",
  "img_0335_55210135148_o.jpg",
  "img_0339_55210228509_o.jpg",
  "img_0343_55209986526_o.jpg",
  "img_0348_55210134608_o.jpg",
  "img_0352_55210383750_o.jpg",
  "img_0359_55209079672_o.jpg",
  "img_0364_55210382975_o.jpg",
  "img_0367_55209079237_o.jpg",
  "img_0371_55210226784_o.jpg",
  "img_0376_55210382430_o.jpg",
  "img_0379_55209984541_o.jpg",
  "img_0382_55209078512_o.jpg",
  "img_0386_55210132603_o.jpg",
  "img_0389_55209984166_o.jpg",
  "img_0392_55210126338_o.jpg",
  "img_0395_55209984016_o.jpg",
  "img_0398_55210131913_o.jpg",
  "img_0402_55210126328_o.jpg",
  "img_0405_55209072082_o.jpg",
  "img_0409_55210219824_o.jpg",
  "img_0412_55210375510_o.jpg",
  "img_0415_55210381290_o.jpg",
  "img_0419_55210131548_o.jpg",
  "img_0423_55210131303_o.jpg",
  "img_0426_55209071892_o.jpg",
  "img_0432_55210131133_o.jpg",
  "img_0435_55209982076_o.jpg",
  "img_0439_55209978216_o.jpg",
  "img_0442_55209981816_o.jpg",
  "img_0445_55209085502_o.jpg",
  "img_0449_55210389075_o.jpg",
  "img_0452_55209085082_o.jpg",
  "img_0455_55209085142_o.jpg",
  "img_0459_55210232664_o.jpg",
  "img_0463_55210388545_o.jpg",
  "img_0466_55210232369_o.jpg",
  "img_0469_55210388270_o.jpg",
  "img_0472_55210388090_o.jpg",
  "img_0475_55210388055_o.jpg",
  "img_0478_55210387940_o.jpg",
  "img_0481_55209075697_o.jpg",
  "img_0484_55209084132_o.jpg",
  "img_0488_55209075382_o.jpg",
  "img_0492_55209083847_o.jpg",
  "img_0496_55210231384_o.jpg",
  "img_9440_55210379620_o.jpg",
  "img_9444_55210223784_o.jpg",
  "img_9454_55210223864_o.jpg",
  "img_9457_55210379765_o.jpg",
  "img_9460_55210130138_o.jpg",
  "img_9464_55210379825_o.jpg",
  "img_9471_55210379875_o.jpg",
  "img_9480_55210379940_o.jpg",
  "img_9485_55210224134_o.jpg",
  "img_9488_55210224159_o.jpg",
  "img_9492_55210380010_o.jpg",
  "img_9498_55210224254_o.jpg",
  "img_9504_55210380070_o.jpg",
  "img_9509_55210130653_o.jpg",
  "img_9514_55210130668_o.jpg",
  "img_9518_55210380165_o.jpg",
  "img_9522_55210130723_o.jpg",
  "img_9528_55210130788_o.jpg",
  "img_9537_55210380300_o.jpg",
  "img_9558_55210130858_o.jpg",
  "img_9564_55210380350_o.jpg",
  "img_9568_55210380390_o.jpg"
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {images.map((filename, i) => (
          <motion.div
            key={filename}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.01 }}
            className="relative aspect-square bg-slate-900 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(i)}
          >
            <Image
              src={`${BASE_PATH}/images/gallery/${filename}`}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            />
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white p-2 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-4 transition-colors z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-4 transition-colors z-[110]"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full h-full max-w-6xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`${BASE_PATH}/images/gallery/${images[selectedImage]}`}
                alt="Selected Image"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white/60 text-sm">
                Image {selectedImage + 1} of {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
