import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADD_SONG } from "../../graphql/mutations/songs";
import FETCH_SONGS from "../../graphql/queries/fetchSongs";

const NewSong = (props) => {
  const [title, setTitle] = useState("");
  const [addSong] = useMutation(ADD_SONG);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (title) {
      addSong({ variables: { title }, refetchQueries: [FETCH_SONGS] }).then(
        (data) => {
          navigate("/");
        }
      );
    }
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>

      <label>Song Title:</label>
      <input onChange={(event) => setTitle(event.target.value)} value={title} />
      <button disabled={!title} onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};

export default NewSong;
