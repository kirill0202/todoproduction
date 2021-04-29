import React from  'react';
import { useSelector } from 'react-redux';
import { CreateModal } from './ModalDefault';
import { ModalDelete } from './ModalDelete/index';


const modalCollection = {
      modalRemove: ModalDelete,
      createModal: CreateModal,
};

const Modals = () => {
    const modalWindow = useSelector((state) => state.modalReducer);

    if (!modalWindow.length) {
        return null;
      }

    return <>
      {modalWindow.map((modal) => {
        const CurrentModal = modalCollection[modal.name];
        return <CurrentModal {...modal} key={modal.name} />;
      })}
    </>
}
export default Modals;