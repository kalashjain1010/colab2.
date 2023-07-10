import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export function useAddPost(){
    const [isLoading, setLoading] = useState(false);
    const toast = useToast(); 

    async function addPost(post){
        setLoading(true);
        const id = uuidv4();
        await setDoc(doc(db,"posts",id), {
            ...post,
            id,
            date: Date.now(),
            likes: [],
        });
        toast({
            title: "post added successfully",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        setLoading(false);
    }
    return {addPost, isLoading};
}

export function usePosts(uid = null) {
    const q = query(collection(db,"posts"))
    const [posts, isLoading, error] = useCollectionData(q);
    if (error) throw error;
    return { posts, isLoading };
  }
