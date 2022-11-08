import { useActions } from "../hooks/use-actions";
import Button from "@atlaskit/button";
import "./action-bar.css";
import Tooltip from "@atlaskit/tooltip";

interface ActionBarProps {
  //   actions: Action[];
  //   className?: string;
  //   onAction: (action: Action) => void;
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <Button onClick={() => moveCell(id, "up")} appearance="primary">
        <Tooltip content="Move Cell Up" position={"bottom"}>
          <span className="icon is-small">
            <i className="fas fa-arrow-up"></i>
          </span>
        </Tooltip>
      </Button>

      <Button onClick={() => moveCell(id, "down")} appearance="primary">
        <Tooltip content="Move Cell Down" position={"bottom"}>
          <span className="icon is-small">
            <i className="fas fa-arrow-down"></i>
          </span>{" "}
        </Tooltip>
      </Button>

      <Button onClick={() => deleteCell(id)} appearance="danger">
        <Tooltip content="Delete Cell" position={"bottom"}>
          <span className="icon is-small">🗑️</span>{" "}
        </Tooltip>
      </Button>
    </div>
  );
};
export default ActionBar;
