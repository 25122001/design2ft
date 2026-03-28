import React from "react";
import { Users } from "lucide-react";

function StatusCard({title,value,icon,bgIcon="bg-gray-700",iconColor="text-white",gradientFrom="from-gray-700",gradientTo="to-gray-900"}) {
  return (
    <div
      className={
        `rounded-lg shadow-lg p-6 border border-gray-800 transform hover:scale-105 transition-all bg-gradient-to-r ${gradientFrom} ${gradientTo}`
      }
    >
      <div className="flex  justify-between items-start">
        <div>
        <p className="text-gray-400" style={{color:"#f7f9fc"}} >{title}</p>
        <p className="text-white text-2xl font-bold" style={{color:"#f7f9fc"}}>{value.number}</p>
        <p className="text-gray-400 text-sm mt-1" >{value.description}</p>
        
      </div>
      <div className={`p-3 rounded-lg flex items-center justify-center ${bgIcon}`}>
      {React.cloneElement(icon, { size: 24, className: iconColor })}
      </div>
      </div>
    </div>
  );
}
export default StatusCard;
