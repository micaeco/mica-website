import React from 'react';
import Image from 'next/image';
import { UserCircle } from 'lucide-react';

import { SocialLink, TeamMember } from '@/src/types/types'; 

const SocialIcon: React.FC<{ platform: SocialLink['platform'] }> = ({ platform }) => {
  switch (platform) {
    case 'linkedin':
      return <Image src={"/icons/linkedin-icon.svg"} alt="Linkedin" width={20} height={20} />;
    case 'x':
      return <Image src={"/icons/x-icon.svg"} alt="X" width={20} height={20} />;
    case 'github':
      return <Image src={"/icons/github-icon.svg"} alt="Github" width={20} height={20} />;
    case 'instagram':
      return <Image src={"/icons/instagram-icon.svg"} alt="Instagram" width={20} height={20} />;
    default:
      return null;
  }
};

export default function TeamMemberCard({ src, name, description, socials }: TeamMember) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative w-full pb-[100%]"> {/* 1:1 aspect ratio */}
        {src ? (
          <Image
            src={src}
            alt={`${name}'s profile picture`}
            layout="fill"
            objectFit="cover"
            className="absolute left-0 top-0 size-full"
          />
        ) : (
          <div className="absolute left-0 top-0 flex size-full items-center justify-center bg-gray-200">
            <UserCircle className="size-24 text-gray-400" />
          </div>
        )}
      </div>
      <div className="flex grow flex-col justify-between p-4">
        <div>
          <h3 className="mb-1 text-lg font-bold">{name}</h3>
          <p className="mb-3 text-sm text-gray-600">{description}</p>
        </div>
        {socials && socials.length > 0 && (
          <div className="mt-auto flex space-x-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
                aria-label={`${name}'s ${social.platform}`}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}