
import { useState } from "react";
import WeddingInvitation from "@/components/WeddingInvitation";
import InvitationForm from "@/components/InvitationForm";

const Index = () => {
  const [invitationData, setInvitationData] = useState({
    blessing: "॥ శ్రీ లక్షీవెంకటేశ్వరస్వామి ప్రసన్నః ॥",
    invitationTitle: "వివాహ మహోత్సవ ఆహ్వాన పత్రిక",
    groomName: "ప్రజ్వల దేవరాజు",
    brideName: "భాగ్యలక్ష్మి",
    date: "మంగళవారం, 12 సెప్టెంబర్ 2024",
    time: "ఉదయం 10 గంటలకు",
    venue: "కళ్యాణ వేదిక",
    address: "ప్యాలెస్ కల్యాణ మండపం, 4వ అవెన్యూ, గణేష్ టెంపుల్ మెయిన్ రోడ్, శ్రీ గురు యూనివర్శిటీ దగ్గర, విద్యానగర్, 1234567"
  });

  const handleInvitationUpdate = (data: typeof invitationData) => {
    setInvitationData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-invitation-navy text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Telugu Wedding Invitation</h1>
          <p className="text-invitation-gold mt-2">Customize your beautiful wedding invitation</p>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <WeddingInvitation
              blessing={invitationData.blessing}
              invitationTitle={invitationData.invitationTitle}
              groomName={invitationData.groomName}
              brideName={invitationData.brideName}
              date={invitationData.date}
              time={invitationData.time}
              venue={invitationData.venue}
              address={invitationData.address}
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <InvitationForm onUpdateInvitation={handleInvitationUpdate} />
          </div>
        </div>
      </main>
      
      <footer className="bg-invitation-navy text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Telugu Wedding Invitation Creator</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
