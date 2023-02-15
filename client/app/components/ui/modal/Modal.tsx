import ReactModal from "react-modal";
import { Transaction } from "./data";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  transaction?: Transaction | null;
}

export default function Modal({
  isOpen,
  closeModal,
  transaction
}: ModalProps): JSX.Element {
  const renderTransaction = (transaction: Transaction) => {
    return (
      <div>
        <p>{`Transaction for ${transaction.entityName}`}</p>
        <p>{`${transaction.status} for ${transaction.category} on ${transaction.transactionDate}`}</p>
        <small>{transaction.id}</small>
      </div>
    );
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <div className="modal-header">
        <button onClick={closeModal}>x</button>
      </div>

      {transaction ? (
        renderTransaction(transaction)
      ) : (
        <p>No available transaction.</p>
      )}
    </ReactModal>
  );
}
