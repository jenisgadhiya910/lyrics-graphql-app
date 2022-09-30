import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADD_LYRIC_TO_SONG } from "../../graphql/mutations/songs";
import FETCH_SONGS from "../../graphql/queries/fetchSongs";

const LyricCreate = (props) => {
  const { songId } = props;
  const [content, setContent] = useState("");
  const [addLyric] = useMutation(ADD_LYRIC_TO_SONG);

  const onSubmit = () => {
    if (content) {
      addLyric({
        variables: { content, songId },
      }).then((data) => {
        setContent("");
      });
    }
  };

  return (
    <div>
      <label>Add a Lyric</label>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button disabled={!content} onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};

export default LyricCreate;
