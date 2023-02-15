import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  transaction?: any;
  children?: any;
}
const Modal = ({ isOpen, closeModal, children }: ModalProps): JSX.Element => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <div className="modal-header">
        <button onClick={closeModal}>x</button>
      </div>
      {children}
    </ReactModal>
  );
};
export default Modal;
