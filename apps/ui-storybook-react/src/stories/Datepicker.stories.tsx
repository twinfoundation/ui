import { Meta } from "@storybook/react";
import { Datepicker } from "flowbite-react";
import { useState } from "react";

const meta = {
	title: "Components/Datepicker",
	component: Datepicker
} satisfies Meta<typeof Datepicker>;

export default meta;
export function Default() {
	return <Datepicker inline labelTodayButton="Ok" labelClearButton="Clear" />;
}

export function DateRangeSelector() {
	const [startDate, setStartDate] = useState<Date | null>(null);
	// const [endDate, setEndDate] = useState<Date | null>(null);

	return (
		<div className="flex flex-col space-y-4">
			<Datepicker
				label="Select Period"
				selected={startDate}
				onChange={date => setStartDate(date)}
				labelTodayButton="Ok"
				labelClearButton="Clear"
				className="text-primary"
			/>

			{/* <Datepicker
					inline
					selected={endDate}
					onChange={date => setEndDate(date)}
					labelTodayButton="Ok"
					labelClearButton="Clear"
					className="text-gray-50"
				/> */}
		</div>
	);
}
