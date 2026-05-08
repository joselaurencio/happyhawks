"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = ["55208981042_35dc2c11ee_o.jpg","55208981047_4e4bb3947f_o.jpg","55208981052_4d07f6484a_o.jpg","55208995177_ff7b1c29e0_o.jpg","55209844326_95061c47a9_o.jpg","55209875821_8acf51e802_o.jpg","55209901241_39100e0109_o.jpg","55209901246_d496f3c70a_o.jpg","55210048123_2657ab79a8_o.jpg","55210089954_b7e48fd54c_o.jpg","55210117219_c47392d483_o.jpg","55210127314_349eb03a40_o.jpg","55210141789_3773f14d8c_o.jpg","55210281380_3f18d37002_o.jpg","55210281385_efecb6c104_o.jpg","55210295685_64886bcdbb_o.jpg","55210295690_84715d7e6b_o.jpg","img_0039_55209978696_o.jpg","img_0041_55209072437_o.jpg","img_0073_55210223449_o.jpg","img_0137_55209075892_o.jpg","img_0140_55210129698_o.jpg","img_0144_55210379320_o.jpg","img_0145_55210129723_o.jpg","img_0244_55210219559_o.jpg","img_0246_55210139453_o.jpg","img_0247_55210389250_o.jpg","img_0263_55210389245_o.jpg","img_0264_55209991561_o.jpg","img_0265_55210139388_o.jpg","img_0266_55210139393_o.jpg","img_0267_55209991596_o.jpg","img_0268_55210233239_o.jpg","img_0269_55209085517_o.jpg","img_0270_55210139318_o.jpg","img_0273_55210139273_o.jpg","img_0277_55209991491_o.jpg","img_0278_55210387700_o.jpg","img_0279_55209083612_o.jpg","img_0280_55210387165_o.jpg","img_0281_55209083372_o.jpg","img_0282_55210137353_o.jpg","img_0283_55210387095_o.jpg","img_0284_55209989401_o.jpg","img_0285_55210387035_o.jpg","img_0286_55209989431_o.jpg","img_0287_55210137253_o.jpg","img_0288_55210387010_o.jpg","img_0289_55209989356_o.jpg","img_0294_55210389585_o.jpg","img_0296_55210233514_o.jpg","img_0297_55210233464_o.jpg","img_0298_55209085837_o.jpg","img_0299_55209083597_o.jpg","img_0301_55210137578_o.jpg","img_0302_55209989601_o.jpg","img_0303_55210387150_o.jpg","img_0304_55209083337_o.jpg","img_0306_55209989376_o.jpg","img_0308_55210137213_o.jpg","img_0309_55209989221_o.jpg","img_0310_55210230939_o.jpg","img_0312_55209083087_o.jpg","img_0314_55210230819_o.jpg","img_0315_55209988976_o.jpg","img_0316_55210230749_o.jpg","img_0317_55209083037_o.jpg","img_0318_55209082842_o.jpg","img_0319_55210235479_o.jpg","img_0320_55210136583_o.jpg","img_0321_55209988136_o.jpg","img_0322_55210136183_o.jpg","img_0323_55209082072_o.jpg","img_0324_55210386120_o.jpg","img_0325_55210385525_o.jpg","img_0326_55210229759_o.jpg","img_0327_55210229304_o.jpg","img_0328_55210385335_o.jpg","img_0329_55210135743_o.jpg","img_0330_55209987506_o.jpg","img_0331_55210229139_o.jpg","img_0332_55210135263_o.jpg","img_0333_55210228839_o.jpg","img_0334_55209987181_o.jpg","img_0335_55210135148_o.jpg","img_0336_55209987091_o.jpg","img_0338_55210228639_o.jpg","img_0339_55210228509_o.jpg","img_0340_55210384505_o.jpg","img_0341_55210227929_o.jpg","img_0343_55209986526_o.jpg","img_0345_55210134318_o.jpg","img_0347_55210383910_o.jpg","img_0348_55210134608_o.jpg","img_0349_55209080507_o.jpg","img_0350_55210134493_o.jpg","img_0352_55210383750_o.jpg","img_0355_55210383575_o.jpg","img_0356_55210133773_o.jpg","img_0359_55209079672_o.jpg","img_0361_55209985571_o.jpg","img_0362_55209985491_o.jpg","img_0364_55210382975_o.jpg","img_0365_55209985276_o.jpg","img_0366_55210133338_o.jpg","img_0367_55209079237_o.jpg","img_0368_55209985126_o.jpg","img_0370_55210226799_o.jpg","img_0371_55210226784_o.jpg","img_0372_55210133018_o.jpg","img_0375_55210226609_o.jpg","img_0376_55210382430_o.jpg","img_0377_55210132938_o.jpg","img_0378_55209078627_o.jpg","img_0379_55209984541_o.jpg","img_0380_55210226389_o.jpg","img_0381_55209984331_o.jpg","img_0382_55209078512_o.jpg","img_0384_55209078362_o.jpg","img_0385_55210226224_o.jpg","img_0386_55210132603_o.jpg","img_0387_55210381935_o.jpg","img_0388_55209078227_o.jpg","img_0389_55209984166_o.jpg","img_0390_55210225919_o.jpg","img_0391_55210381815_o.jpg","img_0392_55210126338_o.jpg","img_0393_55209078102_o.jpg","img_0394_55210381600_o.jpg","img_0395_55209984016_o.jpg","img_0396_55210225649_o.jpg","img_0397_55209983871_o.jpg","img_0398_55210131913_o.jpg","img_0399_55209983931_o.jpg","img_0401_55209983746_o.jpg","img_0402_55210126328_o.jpg","img_0403_55210126303_o.jpg","img_0404_55210219929_o.jpg","img_0405_55209072082_o.jpg","img_0406_55210126228_o.jpg","img_0408_55209072022_o.jpg","img_0409_55210219824_o.jpg","img_0410_55210375535_o.jpg","img_0411_55209978376_o.jpg","img_0412_55210375510_o.jpg","img_0413_55210375425_o.jpg","img_0414_55209983526_o.jpg","img_0415_55210381290_o.jpg","img_0417_55209983416_o.jpg","img_0418_55210225159_o.jpg","img_0419_55210131548_o.jpg","img_0420_55210225124_o.jpg","img_0422_55209983396_o.jpg","img_0423_55210131303_o.jpg","img_0424_55210380785_o.jpg","img_0425_55210225024_o.jpg","img_0426_55209071892_o.jpg","img_0429_55210380580_o.jpg","img_0430_55210224764_o.jpg","img_0432_55210131133_o.jpg","img_0433_55210223909_o.jpg","img_0434_55210379600_o.jpg","img_0435_55209982076_o.jpg","img_0436_55209076197_o.jpg","img_0437_55209071667_o.jpg","img_0439_55209978216_o.jpg","img_0440_55210375295_o.jpg","img_0441_55209071692_o.jpg","img_0442_55209981816_o.jpg","img_0443_55209991686_o.jpg","img_0444_55209085582_o.jpg","img_0445_55209085502_o.jpg","img_0446_55210233089_o.jpg","img_0447_55209085447_o.jpg","img_0449_55210389075_o.jpg","img_0450_55209085357_o.jpg","img_0451_55210139098_o.jpg","img_0452_55209085082_o.jpg","img_0453_55210388940_o.jpg","img_0454_55209085267_o.jpg","img_0455_55209085142_o.jpg","img_0457_55210232759_o.jpg","img_0458_55210232694_o.jpg","img_0459_55210232664_o.jpg","img_0461_55210138808_o.jpg","img_0462_55209990751_o.jpg","img_0463_55210388545_o.jpg","img_0464_55210232529_o.jpg","img_0465_55209084712_o.jpg","img_0466_55210232369_o.jpg","img_0467_55210388255_o.jpg","img_0468_55209990626_o.jpg","img_0469_55210388270_o.jpg","img_0470_55209990516_o.jpg","img_0471_55209084447_o.jpg","img_0472_55210388090_o.jpg","img_0473_55209084217_o.jpg","img_0474_55210138163_o.jpg","img_0475_55210388055_o.jpg","img_0476_55210379225_o.jpg","img_0477_55210379210_o.jpg","img_0478_55210387940_o.jpg","img_0479_55210129513_o.jpg","img_0480_55210379035_o.jpg","img_0481_55209075697_o.jpg","img_0482_55210379005_o.jpg","img_0483_55210223149_o.jpg","img_0484_55209084132_o.jpg","img_0485_55209981226_o.jpg","img_0487_55209084037_o.jpg","img_0488_55209075382_o.jpg","img_0490_55210387775_o.jpg","img_0491_55209083872_o.jpg","img_0492_55209083847_o.jpg","img_0494_55210231519_o.jpg","img_0495_55210137693_o.jpg","img_0496_55210231384_o.jpg","img_1570_55209978911_o.jpg","img_9439_55210379590_o.jpg","img_9440_55210379620_o.jpg","img_9441_55209076262_o.jpg","img_9442_55210379655_o.jpg","img_9444_55210223784_o.jpg","img_9446_55210379690_o.jpg","img_9452_55210379710_o.jpg","img_9454_55210223864_o.jpg","img_9455_55210379745_o.jpg","img_9456_55210223884_o.jpg","img_9457_55210379765_o.jpg","img_9458_55210223919_o.jpg","img_9459_55210379785_o.jpg","img_9460_55210130138_o.jpg","img_9461_55210130143_o.jpg","img_9463_55209982266_o.jpg","img_9464_55210379825_o.jpg","img_9469_55210379855_o.jpg","img_9470_55209076427_o.jpg","img_9471_55210379875_o.jpg","img_9476_55210224019_o.jpg","img_9478_55209076507_o.jpg","img_9480_55210379940_o.jpg","img_9483_55210130383_o.jpg","img_9484_55209076572_o.jpg","img_9485_55210224134_o.jpg","img_9486_55210130403_o.jpg","img_9487_55209982481_o.jpg","img_9488_55210224159_o.jpg","img_9489_55210130448_o.jpg","img_9491_55209982521_o.jpg","img_9492_55210380010_o.jpg","img_9493_55210380020_o.jpg","img_9497_55209982581_o.jpg","img_9498_55210224254_o.jpg","img_9500_55209982566_o.jpg","img_9503_55210224284_o.jpg","img_9504_55210380070_o.jpg","img_9505_55210224299_o.jpg","img_9508_55210130628_o.jpg","img_9509_55210130653_o.jpg","img_9510_55210130663_o.jpg","img_9512_55210224349_o.jpg","img_9514_55210130668_o.jpg","img_9516_55209982711_o.jpg","img_9517_55210380190_o.jpg","img_9518_55210380165_o.jpg","img_9519_55210224374_o.jpg","img_9520_55210380195_o.jpg","img_9522_55210130723_o.jpg","img_9523_55209982746_o.jpg","img_9525_55210130773_o.jpg","img_9528_55210130788_o.jpg","img_9533_55210224469_o.jpg","img_9535_55210130818_o.jpg","img_9537_55210380300_o.jpg","img_9538_55209982831_o.jpg","img_9548_55209076852_o.jpg","img_9558_55210130858_o.jpg","img_9559_55209982886_o.jpg","img_9560_55210130853_o.jpg","img_9564_55210380350_o.jpg","img_9565_55210130903_o.jpg","img_9566_55209982936_o.jpg","img_9568_55210380390_o.jpg"];

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
              src={`/images/gallery/${filename}`}
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
                src={`/images/gallery/${images[selectedImage]}`}
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
