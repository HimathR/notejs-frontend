import { useCallback, useState } from "react";

import { css } from "@emotion/react";

import Button from "@atlaskit/button/standard-button";
import { subtleText } from "@atlaskit/theme/colors";
import { gridSize } from "@atlaskit/theme/constants";
import { token } from "@atlaskit/tokens";

import Modal, {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalTransition,
  useModal,
} from "@atlaskit/modal-dialog";
import welcomeImage from "./welcome.png";
const footerStyles = css({
  display: "flex",
  padding: gridSize() * 3,
  alignItems: "center",
  justifyContent: "space-between",
});

const wrapperStyles = css({
  display: "flex",
  alignItems: "center",
  color: token("color.text.subtlest", subtleText()),
  cursor: "help",
});

const marginLeftStyles = css({ marginLeft: "1em" });

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Click Me For A Tutorial!
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <img src={welcomeImage} />
            <ModalHeader>
              <ModalTitle>Welcome To NoteJS! [Web Version]</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <h1>A JavaScript + Markdown editor!</h1>
            </ModalBody>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
}
