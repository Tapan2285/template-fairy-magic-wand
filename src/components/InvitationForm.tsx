
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface InvitationFormProps {
  onUpdateInvitation: (data: {
    blessing: string;
    invitationTitle: string;
    groomName: string;
    brideName: string;
    date: string;
    time: string;
    venue: string;
    address: string;
  }) => void;
}

const InvitationForm: React.FC<InvitationFormProps> = ({ onUpdateInvitation }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    blessing: "॥ శ్రీ లక్షీవెంకటేశ్వరస్వామి ప్రసన్నః ॥",
    invitationTitle: "సువర్ణ వివాహ వేడుక ఆహ్వానం",
    groomName: "రామారావు గారు",
    brideName: "సరస్వతి గారు",
    date: "శనివారం, 21 జూన్ 2025",
    time: "సాయంత్రం 6 గంటలకు",
    venue: "అన్నపూర్ణ ఫంక్షన్ హాల్",
    address: "విద్యానగర్, హైదరాబాద్, తెలంగాణ, 500044",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateInvitation(formData);
    toast({
      title: "Invitation Updated",
      description: "Your 40th anniversary invitation has been updated successfully.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-6">Customize Your 40th Anniversary Invitation</h2>
      
      <div className="space-y-2">
        <Label htmlFor="blessing">Blessing Line</Label>
        <Input
          id="blessing"
          name="blessing"
          value={formData.blessing}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="invitationTitle">Invitation Title</Label>
        <Input
          id="invitationTitle"
          name="invitationTitle"
          value={formData.invitationTitle}
          onChange={handleChange}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="groomName">Husband's Name</Label>
          <Input
            id="groomName"
            name="groomName"
            value={formData.groomName}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="brideName">Wife's Name</Label>
          <Input
            id="brideName"
            name="brideName"
            value={formData.brideName}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Input
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="venue">Venue</Label>
        <Input
          id="venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
        />
      </div>
      
      <Button type="submit" className="w-full">Update Invitation</Button>
    </form>
  );
};

export default InvitationForm;
