import Image from 'next/image';

export default function Infographic() {
  return (
    <section className="w-full">
      <div className="hidden lg:block">
        <Image
          src="/images/infographic-desktop.png"
          alt="How it works infographic"
          width={1920}
          height={1080}
          className="object-cover"
          loading="eager"
        />
      </div>
      <div className="block lg:hidden">
        <Image
          src="/images/infographic-mobile.png"
          alt="How it works infographic"
          width={1920}
          height={1080}
          loading="eager"
        />
      </div>
    </section>
  );
}
