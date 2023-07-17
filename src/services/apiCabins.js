import supabase from "./supabase";
import { toast } from "react-toastify";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    toast.error("lodges could not be found");
  }

  return cabins;
}
