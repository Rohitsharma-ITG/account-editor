import { json } from "@remix-run/node";
import { request } from "http";
import mongoose from "mongoose";

export const loader = async () => {
    try{
        const database = mongoose.connection.useDb("test");
        const data = await database.collection("partners").find().toArray();
        console.log('daata',data);
        return json(data);
    } catch(error) {
        return Response.json({ message: 'Internal Server Error'},{error}, { status: 500});
    }
 
};



export const action = async ({ request }) => {
    if (request.method === 'POST') {
        const id = await request.json();
        const objectId = new mongoose.Types.ObjectId(id);
        const database = mongoose.connection.useDb("test");
        const data = await database.collection("partners").findOne({ _id: objectId });
        if (!data) {
            return json({ message: 'No Data Found' }, { status: 404 });
        }
        return json(data);
    } else {
        return json({ message: 'Method Not Allowed' }, { status: 405 });
    }
}

