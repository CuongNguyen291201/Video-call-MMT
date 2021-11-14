import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    const createRoom = () => {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <button onClick={createRoom} className="btn-create-room">Create room</button>
    );
};

export default CreateRoom;
