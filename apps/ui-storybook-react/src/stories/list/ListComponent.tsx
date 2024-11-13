import React from "react";
import { List } from "flowbite-react";

interface ListItem {
	name: string;
	icon?: React.ReactNode;
}

interface ListComponentProps {
	items: ListItem[];
}

export const ListComponent: React.FC<ListComponentProps> = ({ items }) => {
	return (
		<List unstyled className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
			{items.map((item, index) => (
				<List.Item key={index} className="py-3 sm:py-4">
					<div className="flex items-center space-x-4 rtl:space-x-reverse">
						{item.icon && <div className="text-gray-500 dark:text-gray-400">{item.icon}</div>}

						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
								{item.name}
							</p>
						</div>
					</div>
				</List.Item>
			))}
		</List>
	);
};
