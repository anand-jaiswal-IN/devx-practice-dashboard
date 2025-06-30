import { IdCard, Venus, BrushCleaning } from "lucide-react";
function BasicDetails() {
  return (
    <div className="mr-1">
      <div className="flex items-center bg-llg p-2 rounded-xl mb-1">
        <div className="mr-2 text-dark-green">
          <IdCard />
        </div>
        <div>
          <p className="font-bold ">Student ID</p>
          <p className="text-xs">Name XYZ</p>
        </div>
      </div>
      <div className="flex items-center bg-llg p-2 rounded-xl mb-1">
        <div className="mr-2 text-pink-800">
          <Venus />
        </div>
        <div>
          <p className="font-bold">Gender</p>
          <p className="text-xs">Female</p>
        </div>
      </div>
      <div className="flex items-center bg-llg p-2 rounded-xl mb-1">
        <div className="mr-2 text-dark-green">
          <BrushCleaning />
        </div>
        <div>
          <p className="font-bold">DOB</p>
          <p className="text-xs">dd/mm/yyyy</p>
        </div>
      </div>
      <div className="bg-llg p-2 rounded-xl mb-1">
        <p className="font-bold mb-6 pb-2 border-b-2 border-dashed text-center">
          Memberships
        </p>
        <ul className="text-xs list-disc pl-4">
          <li className="border-2 rounded-2xl p-1">personalized mentorship</li>
        </ul>
      </div>
    </div>
  );
}
export default BasicDetails;
