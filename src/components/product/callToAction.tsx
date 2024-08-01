import React from 'react';

import CtaButton from '@/src/components/ui/ctaButton';

const CallToAction = () => {
  return (
    <section>
      <div className="pb-10 bg-gray-100 px-4 text-center">
        <CtaButton text="En vull un!" href="/beta" />
      </div>
    </section>
  );
};

export default CallToAction;