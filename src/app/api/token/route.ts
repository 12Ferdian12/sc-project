import { NextApiRequest } from "next";
import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebase_store } from "@/utils/firebase/config";

export async function GET(request: NextApiRequest) {
  try {
    const code = request.query?.code as string;

    let querySnapshot = await getDocs(
      query(collection(firebase_store, "user"))
    );

    // if (code) {
    //   querySnapshot = await getDocs(
    //     query(collection(firebase_store, "user"), where("token", "==", code))
    //   );
    // }

    if (querySnapshot.empty) {
      return null;
    }

    const token = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //TODO: adding fucntion if code is available

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
