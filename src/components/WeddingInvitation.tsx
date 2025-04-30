
import React from "react";
import { Flower, Leaf } from "lucide-react";

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
        <div className="absolute inset-0 bg-invitation-navy border-2 border-invitation-gold p-8 flex flex-col items-center overflow-hidden">
          {/* Animated floating flowers */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[15%] left-[10%] text-invitation-gold/30 animate-float-slow">
              <Flower size={16} className="rotate-45" />
            </div>
            <div className="absolute top-[25%] right-[15%] text-invitation-gold/20 animate-float-medium">
              <Flower size={14} />
            </div>
            <div className="absolute bottom-[30%] left-[12%] text-invitation-gold/25 animate-float-fast">
              <Flower size={12} className="-rotate-15" />
            </div>
            <div className="absolute bottom-[15%] right-[20%] text-invitation-gold/30 animate-float-slow">
              <Flower size={18} className="rotate-30" />
            </div>
            <div className="absolute top-[40%] left-[18%] text-invitation-gold/20 animate-float-medium">
              <Leaf size={16} className="rotate-45" />
            </div>
            <div className="absolute top-[60%] right-[15%] text-invitation-gold/25 animate-float-fast">
              <Leaf size={14} className="-rotate-15" />
            </div>
          </div>
          
          {/* Top-left corner floral decoration */}
          <div className="absolute top-0 left-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold animate-pulse-slow">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
              
              {/* Additional floral elements */}
              <circle cx="20" cy="12" r="2" className="fill-invitation-gold/80 animate-pulse-fast" />
              <circle cx="32" cy="22" r="1.5" className="fill-invitation-gold/80 animate-pulse-medium" />
              <circle cx="15" cy="28" r="2" className="fill-invitation-gold/80 animate-pulse-slow" />
            </svg>
          </div>
          
          {/* Top-right corner floral decoration (enhanced) */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-90">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold animate-pulse-medium">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
              
              {/* Additional floral elements */}
              <path d="M12,18 C15,15 18,18 15,21 C12,24 9,21 12,18" className="fill-invitation-gold/80 animate-spin-slow" />
              <path d="M25,32 C28,29 31,32 28,35 C25,38 22,35 25,32" className="fill-invitation-gold/80 animate-spin-slow" />
            </svg>
          </div>
          
          {/* Bottom-left corner floral decoration (enhanced) */}
          <div className="absolute bottom-0 left-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-270">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold animate-pulse-fast">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
              
              {/* New vine pattern */}
              <path d="M5,5 C10,10 15,5 20,10 C25,15 30,10 25,5" className="fill-none stroke-invitation-gold/60 stroke-1 animate-draw" />
              <circle cx="20" cy="10" r="1.5" className="fill-invitation-gold/80 animate-pulse-medium" />
              <circle cx="10" cy="7" r="1" className="fill-invitation-gold/80 animate-pulse-slow" />
            </svg>
          </div>
          
          {/* Bottom-right corner floral decoration (enhanced) */}
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-180">
              <path d="M0,0 Q20,5 30,20 Q40,35 20,40 Q10,45 0,30 L0,0 Z" className="fill-invitation-gold/30" />
              <g className="fill-invitation-gold animate-pulse-medium">
                <path d="M15,15 Q25,5 22,15 Q19,25 10,20 Q5,15 15,15 Z" />
                <path d="M30,25 Q40,15 37,25 Q34,35 25,30 Q20,25 30,25 Z" />
                <path d="M10,35 Q20,25 17,35 Q14,45 5,40 Q0,35 10,35 Z" />
              </g>
              <path d="M5,10 C10,5 20,15 15,20 C10,25 0,15 5,10" className="fill-invitation-gold/60" />
              <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25" className="fill-invitation-gold/60" />
              <path d="M3,35 C8,30 18,40 13,45 C8,50 -2,40 3,35" className="fill-invitation-gold/60" />
              
              {/* Flowering pattern */}
              <g className="animate-grow">
                <path d="M20,20 Q25,15 30,20 Q35,25 30,30 Q25,35 20,30 Q15,25 20,20" className="fill-invitation-gold/40" />
                <circle cx="25" cy="25" r="3" className="fill-invitation-gold/80" />
              </g>
            </svg>
          </div>
          
          {/* Left edge floral decoration (enhanced) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-40 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-90">
            <svg viewBox="0 0 40 100" className="w-full h-full">
              <g className="fill-invitation-gold/60">
                <path d="M0,40 Q10,35 15,45 Q20,55 10,60 Q0,65 0,50 Z" />
                <path d="M15,25 Q25,20 30,30 Q35,40 25,45 Q15,50 15,35 Z" className="animate-sway-slow" />
                <path d="M0,70 Q10,65 15,75 Q20,85 10,90 Q0,95 0,80 Z" />
                <circle cx="12" cy="50" r="3" className="animate-pulse-medium" />
                <circle cx="18" cy="60" r="2" className="animate-pulse-fast" />
                <circle cx="8" cy="70" r="2" className="animate-pulse-slow" />
              </g>
              
              {/* Additional vine pattern */}
              <path d="M5,20 C8,25 12,22 15,25 C18,28 20,25 22,28" 
                className="fill-none stroke-invitation-gold/60 stroke-1 animate-draw-slow" />
              <circle cx="15" cy="25" r="1.2" className="fill-invitation-gold/80" />
              <circle cx="22" cy="28" r="1" className="fill-invitation-gold/80" />
            </svg>
          </div>
          
          {/* Right edge floral decoration (enhanced) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-40 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-90">
            <svg viewBox="0 0 40 100" className="w-full h-full">
              <g className="fill-invitation-gold/60" transform="scale(-1,1) translate(-40,0)">
                <path d="M0,40 Q10,35 15,45 Q20,55 10,60 Q0,65 0,50 Z" />
                <path d="M15,25 Q25,20 30,30 Q35,40 25,45 Q15,50 15,35 Z" className="animate-sway-slow" />
                <path d="M0,70 Q10,65 15,75 Q20,85 10,90 Q0,95 0,80 Z" />
                <circle cx="12" cy="50" r="3" className="animate-pulse-medium" />
                <circle cx="18" cy="60" r="2" className="animate-pulse-slow" />
                <circle cx="8" cy="70" r="2" className="animate-pulse-fast" />
              </g>
              
              {/* Decorative flower elements */}
              <g transform="scale(-1,1) translate(-40,0)">
                <path d="M12,30 C15,27 18,30 15,33 C12,36 9,33 12,30" className="fill-invitation-gold/70 animate-spin-slow" />
                <path d="M20,70 C23,67 26,70 23,73 C20,76 17,73 20,70" className="fill-invitation-gold/70 animate-spin-slow" />
              </g>
            </svg>
          </div>
          
          {/* Horizontal decorative vines (new) */}
          <div className="absolute top-20 left-0 w-full h-6 opacity-70 pointer-events-none">
            <svg viewBox="0 0 400 24" className="w-full h-full">
              <path d="M0,12 C20,8 40,16 60,12 C80,8 100,16 120,12 C140,8 160,16 180,12 C200,8 220,16 240,12 C260,8 280,16 300,12 C320,8 340,16 360,12 C380,8 400,16 400,12"
                className="fill-none stroke-invitation-gold/30 stroke-1" />
              <g className="animate-sway-slow">
                <circle cx="30" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="90" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="150" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="210" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="270" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="330" cy="12" r="2" className="fill-invitation-gold/40" />
              </g>
            </svg>
          </div>
          
          {/* Bottom horizontal decorative vines (new) */}
          <div className="absolute bottom-20 left-0 w-full h-6 opacity-70 pointer-events-none">
            <svg viewBox="0 0 400 24" className="w-full h-full">
              <path d="M0,12 C20,16 40,8 60,12 C80,16 100,8 120,12 C140,16 160,8 180,12 C200,16 220,8 240,12 C260,16 280,8 300,12 C320,16 340,8 360,12 C380,16 400,8 400,12"
                className="fill-none stroke-invitation-gold/30 stroke-1" />
              <g className="animate-sway-medium">
                <circle cx="60" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="120" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="180" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="240" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="300" cy="12" r="2" className="fill-invitation-gold/40" />
                <circle cx="360" cy="12" r="2" className="fill-invitation-gold/40" />
              </g>
            </svg>
          </div>
          
          {/* Inner decorative border with floral accents (enhanced) */}
          <div className="absolute inset-4 border border-invitation-gold bg-transparent transition-all duration-500 group-hover:border-2 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 opacity-80">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <g className="fill-invitation-gold/70">
                  <path d="M50,0 Q60,10 50,20 Q40,10 50,0 Z" className="animate-pulse-slow" />
                  <path d="M30,5 Q40,15 30,15 Q20,15 30,5 Z" className="animate-pulse-medium" />
                  <path d="M70,5 Q80,15 70,15 Q60,15 70,5 Z" className="animate-pulse-medium" />
                  <path d="M10,8 Q20,18 10,18 Q0,18 10,8 Z" className="animate-pulse-fast" />
                  <path d="M90,8 Q100,18 90,18 Q80,18 90,8 Z" className="animate-pulse-fast" />
                </g>
              </svg>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 opacity-80 rotate-180">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <g className="fill-invitation-gold/70">
                  <path d="M50,0 Q60,10 50,20 Q40,10 50,0 Z" className="animate-pulse-slow" />
                  <path d="M30,5 Q40,15 30,15 Q20,15 30,5 Z" className="animate-pulse-medium" />
                  <path d="M70,5 Q80,15 70,15 Q60,15 70,5 Z" className="animate-pulse-medium" />
                  <path d="M10,8 Q20,18 10,18 Q0,18 10,8 Z" className="animate-pulse-fast" />
                  <path d="M90,8 Q100,18 90,18 Q80,18 90,8 Z" className="animate-pulse-fast" />
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
              <div className="mt-4 border-t border-invitation-gold/30 pt-4 px-6 relative">
                {/* Small decorative elements next to anniversary text */}
                <div className="absolute -top-2 left-1/3 transform -translate-x-1/2">
                  <div className="w-4 h-4 text-invitation-gold/60 animate-pulse-medium">
                    <Flower size={16} />
                  </div>
                </div>
                <div className="absolute -top-2 right-1/3 transform translate-x-1/2">
                  <div className="w-4 h-4 text-invitation-gold/60 animate-pulse-slow">
                    <Flower size={16} />
                  </div>
                </div>
                <p className="text-invitation-gold text-base sm:text-lg font-medium">40వ సంవత్సర వివాహ వార్షికోత్సవం</p>
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
