import Accordion from "../componets/Accordion";
import { v4 as uuid } from "uuid";

function AccordionPage() {
  const items = [
    {
      id: uuid(),
      label: "Can i use React on a project",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto eius velit explicabo! Reiciendis, similique ipsam dolor hic cumque fugiat?",
    },
    {
      id: uuid(),
      label: "Can i use Javascript on a project",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eaque dolorum magni libero non reiciendis, et corporis laborum minima itaque.",
    },
    {
      id: uuid(),
      label: "Can i use CSS on a project",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid vero magnam blanditiis earum? Maiores non, error ipsam et voluptatibus accusantium.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
