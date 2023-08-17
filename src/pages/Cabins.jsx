import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { toast } from "react-hot-toast";
import AddCabins from "../features/cabins/AddCabins";

function Cabins() {
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
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
