import { supabase } from "@/Utils/supabaseClient";

export const uploadFile = async (file, onProgress) => {
  const { data, error } = await supabase
    .storage
    .from('uploads')
    .upload(`public/${file.name}`, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    throw error;
  }

  return data;
};
