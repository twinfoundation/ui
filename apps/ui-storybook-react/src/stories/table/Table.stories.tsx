import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Table } from "flowbite-react"; 

const meta: Meta<typeof Table> = {
  title: "Components/Table with Transaction Status",
  component: Table, 
  argTypes: {
    hoverable: {
      control: "boolean",  
      description: "Enable hover effect for rows"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    hoverable: true, 
  },
  render: (args) => (
    <div className="overflow-x-auto">
      <Table hoverable={args.hoverable}>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>TRANSACTION</Table.HeadCell>
          <Table.HeadCell>DATE & TIME</Table.HeadCell>
          <Table.HeadCell>AMOUNT</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
      
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {"Apple MacBook Pro 17\""}
            </Table.Cell>
            <Table.Cell>2024-11-10 10:00 AM</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                Completed
              </button>
            </Table.Cell>
          </Table.Row>
         
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>2024-11-09 02:30 PM</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                Pending
              </button>
            </Table.Cell>
          </Table.Row>
        
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>2024-11-08 11:15 AM</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Done
              </button>
            </Table.Cell>
          </Table.Row>
          {/* Row 4 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple AirPods</Table.Cell>
            <Table.Cell>2024-11-07 09:45 AM</Table.Cell>
            <Table.Cell>$199</Table.Cell>
            <Table.Cell>
              <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                Rejected
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
};
