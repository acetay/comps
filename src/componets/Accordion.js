import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  //index -1 will start with all items closed

  const handleClick = (newIndex) => {
    setExpandedIndex((prevState) => {
      if (prevState === newIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });
    if (expandedIndex === newIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(newIndex);
    }
  };
  //   when using a map function need event handler to be outside.
  //   when user clicks, handleClick(in return) will pass through current value of index to handleClick(outside).
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}{" "}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 justify-between bf-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
        {/* && give the last truthy value or first falsey value */}
        {/* when isExpanded is true item.content is showen, when isExpended is false nothing will be shown 
        (react does not show false/null/undefinded items) */}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
