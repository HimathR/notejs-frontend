import "./add-cell.css";
import { useActions } from "../hooks/use-actions";
import Button from "@atlaskit/button";

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  // put out action creators
  const { insertCellBefore } = useActions();
  return (
    <div>
      <Button onClick={() => insertCellBefore(nextCellId, "code")}>Code</Button>
      <Button onClick={() => insertCellBefore(nextCellId, "text")}>Text</Button>
    </div>
  );
};
export default AddCell;
