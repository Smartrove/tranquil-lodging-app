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

export const createEditCabin = async (newCabin, id) => {
  const hasPathName =
    typeof newCabin.image === "string" &&
    newCabin?.image?.startsWith(supabaseUrl);

  //create a unique image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const pathName = hasPathName
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");

  //create lodge

  if (!id) query = query.insert([{ ...newCabin, image: pathName }]);

  //dont

  if (id) query = query.update({ ...newCabin, image: pathName }).eq("id", id);

  const { data: cabins, error } = await query.select().single();

  if (error) {
    toast.error("lodges could not be created");
  }

  //upload image here
  if (hasPathName) return cabins;
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
