
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
          {/* Top-left corner decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-invitation-gold">
              <path d="M0,0 Q30,15 25,40 Q40,30 50,40 Q60,30 75,40 Q70,15 100,0 L100,0 L0,0 Z" />
              <path d="M15,10 Q25,20 35,10 Q45,20 55,10 Q65,20 75,10 Q85,20 95,10" strokeWidth="1" stroke="#d4b26a" fill="none" />
              <path d="M5,20 Q15,30 25,20 Q35,30 45,20 Q55,30 65,20 Q75,30 85,20" strokeWidth="1" stroke="#d4b26a" fill="none" />
            </svg>
          </div>
          
          {/* Top-right corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-invitation-gold rotate-90">
              <path d="M0,0 Q30,15 25,40 Q40,30 50,40 Q60,30 75,40 Q70,15 100,0 L100,0 L0,0 Z" />
              <path d="M15,10 Q25,20 35,10 Q45,20 55,10 Q65,20 75,10 Q85,20 95,10" strokeWidth="1" stroke="#d4b26a" fill="none" />
              <path d="M5,20 Q15,30 25,20 Q35,30 45,20 Q55,30 65,20 Q75,30 85,20" strokeWidth="1" stroke="#d4b26a" fill="none" />
            </svg>
          </div>
          
          {/* Bottom-left corner decoration */}
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-invitation-gold -rotate-90">
              <path d="M0,0 Q30,15 25,40 Q40,30 50,40 Q60,30 75,40 Q70,15 100,0 L100,0 L0,0 Z" />
              <path d="M15,10 Q25,20 35,10 Q45,20 55,10 Q65,20 75,10 Q85,20 95,10" strokeWidth="1" stroke="#d4b26a" fill="none" />
              <path d="M5,20 Q15,30 25,20 Q35,30 45,20 Q55,30 65,20 Q75,30 85,20" strokeWidth="1" stroke="#d4b26a" fill="none" />
            </svg>
          </div>

          {/* Bottom-right corner decoration */}
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-invitation-gold rotate-180">
              <path d="M0,0 Q30,15 25,40 Q40,30 50,40 Q60,30 75,40 Q70,15 100,0 L100,0 L0,0 Z" />
              <path d="M15,10 Q25,20 35,10 Q45,20 55,10 Q65,20 75,10 Q85,20 95,10" strokeWidth="1" stroke="#d4b26a" fill="none" />
              <path d="M5,20 Q15,30 25,20 Q35,30 45,20 Q55,30 65,20 Q75,30 85,20" strokeWidth="1" stroke="#d4b26a" fill="none" />
            </svg>
          </div>
          
          {/* Border */}
          <div className="absolute inset-4 border border-invitation-gold bg-transparent transition-all duration-500 group-hover:border-2"></div>
          
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
