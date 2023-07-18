import { toast } from "react-hot-toast";
import supabase from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    toast.error("lodges could not be found");
  }

  return cabins;
}

export const deleteCabin = async (id) => {
  const { data: cabins, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);
  if (error) {
    toast.error("lodges could not be deleted");
  }

  return cabins;
};

export const createCabin = async (newCabin) => {
  const { data: cabins, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    toast.error("lodges could not be created");
  }

  return cabins;
};
