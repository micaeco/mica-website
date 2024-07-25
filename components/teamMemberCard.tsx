import React from 'react';
import Image from 'next/image';
import { UserCircle } from 'lucide-react';

import { SocialLink, TeamMember } from '@/types/types'; 

const SocialIcon: React.FC<{ platform: SocialLink['platform'] }> = ({ platform }) => {
  switch (platform) {
    case 'linkedin':
      return <Image src={"/images/linkedin-icon.svg"} alt="Linkedin" width={20} height={20} />;
    case 'x':
      return <Image src={"/images/x-icon.svg"} alt="X" width={20} height={20} />;
    case 'github':
      return <Image src={"/images/github-icon.svg"} alt="Github" width={20} height={20} />;
    case 'instagram':
      return <Image src={"images/instagram-icon.svg"} alt="Instagram" width={20} height={20} />;
    default:
      return null;
  }
};

export default function TeamMemberCard({ src, name, description, socials }: TeamMember) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 h-full flex flex-col">
      <div className="relative w-full pb-[100%]"> {/* 1:1 aspect ratio */}
        {src ? (
          <Image
            src={src}
            alt={`${name}'s profile picture`}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
            <UserCircle className="w-24 h-24 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
        </div>
        {socials && socials.length > 0 && (
          <div className="flex space-x-3 mt-auto">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
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