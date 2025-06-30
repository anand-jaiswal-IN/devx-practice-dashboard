import {
  House,
  Users,
  BookMarked,
  DollarSign,
  CircleCheck,
} from "lucide-react";
function MiddleDetails() {
  return (
    <div>
      <div className="bg-llg p-2 rounded-xl mb-1 mr-1">
        <div className="flex">
          <div className="mr-2 text-dark-green">
            <House />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="font-bold">Address</p>
              <button className="text-xs text-right underline cursor-pointer">
                Edit
              </button>
            </div>
            <textarea
              name="address"
              className="w-full text-xs resize-none border-none outline-none"
              placeholder="Your Address"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-2/5 mr-1">
          <div className="flex items-center bg-llg p-2 rounded-xl mb-1">
            <div className="mr-2 text-dark-green">
              <Users />
            </div>
            <div>
              <p className="font-bold">Guardian</p>
              <input
                type="text"
                name="guardian"
                placeholder="Guardian name"
                className="text-xs outline-none border-none"
              />
            </div>
          </div>
          <div className="bg-llg p-2 rounded-xl mb-1">
            <p className="font-bold mb-2 text-center border-b-2 border-dashed pb-2">
              <span>
                <DollarSign className="text-dark-green inline mr-2" />
              </span>
              Payment Status
            </p>
            <div className="text-center">
              <CircleCheck className="text-dark-green mx-auto" size={50} />
              <p className="uppercase font-bold">paid</p>
            </div>
          </div>
        </div>
        <div className="w-3/5 mr-1">
          <div className="bg-llg p-2 rounded-xl mb-1">
            <p className="font-bold mb-6 border-b-2 border-dashed pb-2 text-center">
              <span>
                <BookMarked className="text-dark-green inline mr-2" />
              </span>
              Institute Searched
            </p>
            <ul className="list-disc ml-4">
              <li className="border-2 rounded-xl px-2 mb-2 text-xs">
                Alpha Classes
              </li>
              <li className="border-2 rounded-xl px-2 mb-2 text-xs">
                Beta Classes
              </li>
              <li className="border-2 rounded-xl px-2 mb-2 text-xs">
                Gama Classes
              </li>
              <li className="border-2 rounded-xl px-2 mb-2 text-xs">
                Zeta Classes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleDetails;
