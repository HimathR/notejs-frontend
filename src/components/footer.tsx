import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Button from "@atlaskit/button";
import "./footer.css";

const Footer: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(cells)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  console.log(cells);
  return (
    <div className="footerButton">
      {/* only show footerbutton if length of cells is greater than 1 */}
      {cells.length >= 1 && (
        <Button onClick={exportData} appearance="primary">
          Export Data
        </Button>
      )}
    </div>
  );
};
export default Footer;
