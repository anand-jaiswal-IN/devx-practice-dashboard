import { Contact, Phone, Mail } from "lucide-react";
function ContactDetails() {
  return (
    <div className="bg-llg p-2 rounded-xl">
      <div className="text-center border-b-2 border-dashed mb-4 pb-2">
        <Contact className="text-dark-green mx-auto" size={30} />
        <p className="font-bold">Contact Info</p>
      </div>
      <div className="flex border-b-2 border-dashed pb-2 mb-4">
        <div className="mr-2 text-dark-green">
          <Phone />
        </div>
        <div className="w-full">
          <p className="font-bold">Phone Number</p>
          <div className="flex justify-between">
            <p className="text-xs">+91 985XXXXXXX</p>
            <button className="text-xs underline text-right cursor-pointer">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-b-2 border-dashed pb-2 mb-4">
        <div className="mr-2 text-dark-green">
          <Mail />
        </div>
        <div className="w-full">
          <p className="font-bold">E-mail Address</p>
          <div className="flex justify-between">
            <p className="text-xs">khusi420@gmail.com</p>
            <button className="text-xs underline text-right cursor-pointer">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-b-2 border-dashed pb-2 mb-4">
        <div className="mr-2 text-dark-green">
          <Phone />
        </div>
        <div className="w-full">
          <p className="font-bold">Guardian Phone Number</p>
          <div className="flex justify-between">
            <p className="text-xs">+91 985XXXXXXX</p>
            <button className="text-xs underline text-right cursor-pointer">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactDetails;
