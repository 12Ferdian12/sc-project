import { NextApiRequest } from "next";
import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebase_store } from "@/utils/firebase/config";

export async function GET(request: NextApiRequest) {
  try {
    let querySnapshot = await getDocs(
      query(collection(firebase_store, "user"))
    );

    if (querySnapshot.empty) {
      return null;
    }

    const token = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(token));
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: error.message || error.toString(),
      }),
      {
        status: 500,
      }
    );
  }
}
