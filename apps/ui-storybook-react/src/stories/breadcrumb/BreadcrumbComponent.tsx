import React from "react";
import { Breadcrumb } from "flowbite-react";


type BreadcrumbItem = {
  href: string;
  label: string;
  icon?:  React.FC<React.SVGProps<SVGSVGElement>>;
};

interface BreadcrumbComponentProps {
  ariaLabel?: string;
  className?: string;
  items: BreadcrumbItem[];
}

export const BreadcrumbComponent: React.FC<BreadcrumbComponentProps> = ({
  ariaLabel = "Breadcrumb",
  items,
}) => (
  <Breadcrumb aria-label={ariaLabel} className="text-primary dark:text-primary-dark">
    {items.map((item, index) => (
      <Breadcrumb.Item key={index} href={item.href} icon={item.icon}>
        {item.label}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
