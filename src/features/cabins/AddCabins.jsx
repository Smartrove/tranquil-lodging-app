import React from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const AddCabins = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Lodge</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      {/* <Modal.Open>
        <Button>Add New Lodge</Button>
      </Modal.Open>
      <Modal.Window>
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
};

// const AddCabins = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onClose={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabins;
