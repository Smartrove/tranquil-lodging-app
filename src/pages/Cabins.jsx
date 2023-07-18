import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { toast } from "react-hot-toast";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    getCabins()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((showButton) => !showForm)}>
          Add New Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
