
import React from "react";

interface WeddingInvitationProps {
  blessing: string;
  invitationTitle: string;
  groomName: string;
  brideName: string;
  date: string;
  time: string;
  venue: string;
  address: string;
}

const WeddingInvitation: React.FC<WeddingInvitationProps> = ({
  blessing,
  invitationTitle,
  groomName,
  brideName,
  date,
  time,
  venue,
  address,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-xl aspect-[3/4] relative group">
        <div className="absolute inset-0 bg-invitation-navy border-2 border-invitation-gold p-8 flex flex-col items-center">
          {/* Top-left corner floral decoration */}
          <div className="absolute top-0 left-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
            </svg>
          </div>
          
          {/* Top-right corner floral decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-90">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
            </svg>
          </div>
          
          {/* Bottom-left corner floral decoration */}
          <div className="absolute bottom-0 left-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-270">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
            </svg>
          </div>
          
          {/* Bottom-right corner floral decoration */}
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-180">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
            </svg>
          </div>
          
          {/* Left edge floral decoration */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-40 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-90">
            <svg viewBox="0 0 40 100" className="w-full h-full">
              <g className="fill-invitation-gold/60">
                <path d="M0,40 Q10,35 15,45 Q20,55 10,60 Q0,65 0,50 Z" />
                <path d="M15,25 Q25,20 30,30 Q35,40 25,45 Q15,50 15,35 Z" />
                <path d="M0,70 Q10,65 15,75 Q20,85 10,90 Q0,95 0,80 Z" />
                <circle cx="12" cy="50" r="3" />
                <circle cx="18" cy="60" r="2" />
                <circle cx="8" cy="70" r="2" />
              </g>
            </svg>
          </div>
          
          {/* Right edge floral decoration */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-40 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-90">
            <svg viewBox="0 0 40 100" className="w-full h-full">
              <g className="fill-invitation-gold/60" transform="scale(-1,1) translate(-40,0)">
                <path d="M0,40 Q10,35 15,45 Q20,55 10,60 Q0,65 0,50 Z" />
                <path d="M15,25 Q25,20 30,30 Q35,40 25,45 Q15,50 15,35 Z" />
                <path d="M0,70 Q10,65 15,75 Q20,85 10,90 Q0,95 0,80 Z" />
                <circle cx="12" cy="50" r="3" />
                <circle cx="18" cy="60" r="2" />
                <circle cx="8" cy="70" r="2" />
              </g>
            </svg>
          </div>
          
          {/* Inner decorative border with floral accents */}
          <div className="absolute inset-4 border border-invitation-gold bg-transparent transition-all duration-500 group-hover:border-2 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 opacity-80">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <g className="fill-invitation-gold/70">
                  <path d="M50,0 Q60,10 50,20 Q40,10 50,0 Z" />
                  <path d="M30,5 Q40,15 30,15 Q20,15 30,5 Z" />
                  <path d="M70,5 Q80,15 70,15 Q60,15 70,5 Z" />
                  <path d="M10,8 Q20,18 10,18 Q0,18 10,8 Z" />
                  <path d="M90,8 Q100,18 90,18 Q80,18 90,8 Z" />
                </g>
              </svg>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 opacity-80 rotate-180">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <g className="fill-invitation-gold/70">
                  <path d="M50,0 Q60,10 50,20 Q40,10 50,0 Z" />
                  <path d="M30,5 Q40,15 30,15 Q20,15 30,5 Z" />
                  <path d="M70,5 Q80,15 70,15 Q60,15 70,5 Z" />
                  <path d="M10,8 Q20,18 10,18 Q0,18 10,8 Z" />
                  <path d="M90,8 Q100,18 90,18 Q80,18 90,8 Z" />
                </g>
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="z-10 w-full h-full flex flex-col items-center justify-between py-10">
            <div className="text-center">
              <h1 className="text-invitation-gold text-sm sm:text-base">{blessing}</h1>
              <h2 className="text-invitation-gold text-lg sm:text-xl mt-4 font-medium">{invitationTitle}</h2>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-invitation-gold text-xl sm:text-2xl font-semibold">{groomName}</h3>
              <p className="text-invitation-gold dancing-script text-lg sm:text-xl">&</p>
              <h3 className="text-invitation-gold text-xl sm:text-2xl font-semibold">{brideName}</h3>
              <div className="mt-4 border-t border-invitation-gold/30 pt-4 px-6">
                <p className="text-invitation-gold text-base sm:text-lg font-medium">40 సంవత్సరాల వివాహ వేడుకలు</p>
                <p className="text-invitation-gold text-sm italic mt-1">(40 Years of Marriage Celebration)</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-invitation-gold text-sm sm:text-base font-medium mb-2">వేడుక తేదీ</h4>
              <p className="text-invitation-gold text-xs sm:text-sm mb-1">{date}, {time}</p>
              <h4 className="text-invitation-gold text-sm sm:text-base font-medium mt-4 mb-2">{venue}</h4>
              <p className="text-invitation-gold text-xs sm:text-sm px-8">{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
