import Image from 'next/image';

export default function Logo() {
  return (
    <a href="#" className="flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dw9v7jjrq/image/upload/v1788768114/ChatGPT_Image_Sep_7_2026_01_30_16_PM_mg5jcm.png"
        alt="Thayi Logo"
        width={225}
        height={50}
        priority
        className="h-12 w-auto"
        quality={80}
        sizes="225px"
      />
    </a>
  );
}
