import { toast } from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

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
  //create a unique image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const pathName = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data: cabins, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: pathName }])
    .select();

  if (error) {
    toast.error("lodges could not be created");
  }

  //upload image here

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //delete cabin if image throw error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", cabins.id);
    if (error) {
      toast.error("error, lodges could not be created");
    }
  }

  return cabins;
};
