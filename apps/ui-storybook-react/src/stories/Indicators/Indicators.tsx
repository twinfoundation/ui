import React from "react";

type IconType = "number" | "checkmark" | "custom";

interface IndicatorsProps {
  iconType: IconType; // Type of icon
  iconValue?: number | string; // Value for number or custom icons
  withText?: boolean; // Display text or not
  text?: string; // Optional text
}

const Indicators: React.FC<IndicatorsProps> = ({
  iconType,
  iconValue,
  withText = false,
  text = "",
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case "number":
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
            {iconValue}
          </div>
        );
      case "checkmark":
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
            ✓
          </div>
        );
      case "custom":
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 text-white">
            {iconValue}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {renderIcon()}
      {withText && <span className="text-gray-800">{text}</span>}
    </div>
  );
};

export default Indicators;
