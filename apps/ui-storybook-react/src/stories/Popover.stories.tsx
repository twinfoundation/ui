import { Meta, StoryObj } from "@storybook/react";
import { Button, Popover } from "flowbite-react";


const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

const content = (
  <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
    <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div className="px-3 py-2">
      <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
  </div>
);

export const TopPopover: Story = {
  render: () => (
    <Popover content={content} placement="top">
        <Button>Popover top</Button>
      </Popover>
  )
}
export const BottomPopover:Story ={
  render: () => (
    <Popover content={content} placement="bottom">
        <Button>Popover bottom</Button>
      </Popover>
  )
}
export const LeftPopover:Story = {
  render: () => (
    <Popover content={content} placement="left">
        <Button>Popover left</Button>
      </Popover>)
}

export const RightPopover:Story = {
  render: () => (
    <Popover content={content} placement="right">
        <Button>Popover right</Button>
      </Popover>
  )
}

export const DefaultPopover: Story = {
  render: () => (
    <Popover
      aria-labelledby="default-popover"
      content={
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
          </div>
          <div className="px-3 py-2">
            <p>And here's some amazing content. It's very engaging. Right?</p>
          </div>
        </div>
      }
    >
      <Button>Default popover</Button>
    </Popover>
  ),
};


export const ProfilePopover: Story = {
  render: () => (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p id="profile-popover" className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                <span className="text" >Followers</span>
              </a>
            </li>
          </ul>
        </div>
      }
    >
      <Button>Company profile</Button>
    </Popover>
  ),
};


export const HoverPopover: Story = {
  render: () => (
    <p className="text-gray-500 dark:text-gray-400">
      Due to its central geographic location in Southern Europe,{' '}
      <Popover
        trigger="hover"
        content={
          <div className="w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <div className="grid grid-cols-5">
              <div className="col-span-3 p-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">About Italy</h3>
                  <p>
                    Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered
                    part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.
                  </p>
                  <a
                    href="#"
                    className="flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                  >
                    Read more{' '}
                    <svg
                      className="ms-1.5 h-2 w-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://flowbite.com/docs/images/popovers/italy.png"
                className="col-span-2 h-full"
                alt="Italy map"
              />
            </div>
          </div>
        }
      >
        <a href="#" className="text-blue-600 underline hover:no-underline dark:text-blue-500">
          Italy
        </a>
      </Popover>{' '}
      has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed
      throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the
      peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in
      insular Italy.
    </p>
  ),
};
