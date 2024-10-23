import React from 'react';
import { useTranslations } from 'next-intl';
import { getTimelineItems } from '@/lib/constants';

export default function Timeline() {
  const t = useTranslations('timeline');
  const timelineItems = getTimelineItems(t);

  return (
    <section className="px-8 py-16">
      {timelineItems.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex flex-row items-start justify-center space-x-4">
            <div className="max-w-8 text-right text-sm font-light">{item.date}</div>
            <div className={`h-full min-w-4 rounded-full ${item.color}`} />
            <div
              className={`z-10 flex min-h-10 min-w-10 items-center justify-center rounded-full ${item.color}`}
            >
              {React.createElement(item.icon, { className: 'h-7 w-7 text-white' })}
            </div>
            <div className="flex-grow pb-6">
              <p className="mb-2 font-bold">{item.title}</p>
              <ul className="space-y-1">
                {item.items.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
