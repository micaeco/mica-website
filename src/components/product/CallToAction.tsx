import React from 'react';

import CtaButton from '@/src/components/ui/CTAButton';

const CallToAction = () => {
  return (
    <section>
      <div className="bg-gray-100 px-4 pb-10 text-center">
        <CtaButton text="En vull un!" href="/beta" />
      </div>
    </section>
  );
};

export default CallToAction;