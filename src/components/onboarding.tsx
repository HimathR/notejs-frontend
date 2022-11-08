import { useCallback, useState } from "react";
import Button from "@atlaskit/button/standard-button";
import Modal, {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import welcomeImage from "./welcome.png";

export default function OBModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        App Info And Links
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <img src={welcomeImage} />
            <ModalHeader>
              <ModalTitle>
                <b>NoteJS Info</b>
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              This application was built with <b>React + TypeScript. Redux </b>
              was used for state management and many of the components were
              taken from the <b>AtlasKit UI</b> of the Atlassian Design System.
              <div style={{ padding: "10px" }}></div>
              <b>My Links:</b>
              <ul>
                <li>
                  <a
                    href="https://github.com/HimathR/notejs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    - GitHub Repo (Main)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/HimathR/notejs-frontend/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    - GitHub Repo (Web Version)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/himath-ratnayake/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    - My LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.himathsprojects.xyz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    - My Personal Website
                  </a>
                </li>
              </ul>
              <div style={{ padding: "10px" }}></div>
            </ModalBody>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
}
