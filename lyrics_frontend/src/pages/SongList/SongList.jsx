import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import FETCH_SONGS from "../../graphql/queries/fetchSongs";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { DELETE_SONG } from "../../graphql/mutations/songs";

const SongList = () => {
  const { loading, data } = useQuery(FETCH_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  const onSongDelete = (id) => {
    deleteSong({ variables: { id }, refetchQueries: [FETCH_SONGS] });
  };

  if (loading) {
    return <BeatLoader color="#36d7b7" />;
  }

  return (
    <div>
      <h1>Song List</h1>
      <ul className="collection">
        {data?.songs?.map((song) => {
          return (
            <li key={song?.id} className="collection-item">
              <Link to={`/songs/${song?.id}`}>{song?.title}</Link>
              <i
                className="material-icons"
                onClick={() => onSongDelete(song?.id)}
              >
                delete
              </i>
            </li>
          );
        })}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
      {!data?.songs?.length && <h3>No songs found</h3>}
    </div>
  );
};

export default SongList;
