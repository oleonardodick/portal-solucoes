import { X } from 'lucide-react';
import {
  Modal,
  CabecalhoModal,
  TituloModal,
  ConteudoModal,
} from '../../components/Modal';
import { useContext } from 'react';
import { IOrdemServico } from '../../interfaces/IOrdemServico';
import { ModalContext } from '../../contexts/ModalContext';

export function ApoioModal({ OS }: { OS: IOrdemServico }) {
  const { closeModal } = useContext(ModalContext);
  return (
    <Modal>
      <CabecalhoModal>
        <TituloModal>
          Dados do Apoio {OS.numero}/{OS.item}
        </TituloModal>
        <button onClick={closeModal}>
          <X />
        </button>
      </CabecalhoModal>
      <ConteudoModal>Detalhes do apoio: {OS.solicitado}</ConteudoModal>
    </Modal>
  );
}
