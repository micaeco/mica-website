import Image from 'next/image';

export default function Infographic() {
  return (
    <section className="max-w-4xl px-4 md:px-8 md:pb-20">
      <div className="hidden md:block">
        <Image
          src="/images/timeline.png"
          alt="Timeline"
          width={1920}
          height={1080}
          loading="eager"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src="/images/timeline-mobile.png"
          alt="Timeline"
          width={1920}
          height={1080}
          loading="eager"
        />
      </div>
    </section>
  );
}
