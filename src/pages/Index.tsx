
import { useState } from "react";
import WeddingInvitation from "@/components/WeddingInvitation";
import InvitationForm from "@/components/InvitationForm";

const Index = () => {
  const [invitationData, setInvitationData] = useState({
    blessing: "॥ శ్రీ లక్షీవెంకటేశ్వరస్వామి ప్రసన్నః ॥",
    invitationTitle: "సువర్ణ వివాహ వేడుక ఆహ్వానం",
    groomName: "రామారావు గారు",
    brideName: "సరస్వతి గారు",
    date: "శనివారం, 21 జూన్ 2025",
    time: "సాయంత్రం 6 గంటలకు",
    venue: "అన్నపూర్ణ ఫంక్షన్ హాల్",
    address: "విద్యానగర్, హైదరాబాద్, తెలంగాణ, 500044"
  });

  const handleInvitationUpdate = (data: typeof invitationData) => {
    setInvitationData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-invitation-navy text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Telugu 40th Anniversary Invitation</h1>
          <p className="text-invitation-gold mt-2">Customize your beautiful 40th anniversary invitation</p>
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
          <p>&copy; 2025 Telugu 40th Anniversary Invitation Creator</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
