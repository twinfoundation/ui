import React, { SVGProps } from "react";
import { ListGroup } from "flowbite-react";

interface ListGroupItem {
  label: string;
  icon?:React.FC<SVGProps<SVGSVGElement>>;  
  active?: boolean; 
}

interface ListGroupComponentProps {
  items: ListGroupItem[]; 
}

const ListGroupComponent: React.FC<ListGroupComponentProps> = ({ items }) => {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        {items.map((item, index) => (
          <ListGroup.Item key={index} icon={item.icon} active={item.active}>
            {item.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListGroupComponent;
