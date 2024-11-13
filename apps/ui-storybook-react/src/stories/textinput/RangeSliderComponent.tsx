import { Label, RangeSlider } from "flowbite-react";

export function RangeSliderComponent({
  id,
  label,
  disabled = false,
  sizing,
}: {
  id: string;
  label: string;
  disabled?: boolean;
  sizing?: "sm" | "md" | "lg";
}) {
  return (
    <div className="flex max-w-md flex-col gap-2">
      <div className="mb-1 block">
        <Label htmlFor={id} value={label} />
      </div>
      <RangeSlider id={id} disabled={disabled} sizing={sizing} />
    </div>
  );
}
