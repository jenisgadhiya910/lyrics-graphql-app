import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import LyricCreate from "../../components/LyricCreate/LyricCreate";
import LyricList from "../../components/LyricList/LyricList";
import { ADD_SONG } from "../../graphql/mutations/songs";
import FETCH_SONG_DETAILS from "../../graphql/queries/fetchSong";
import FETCH_SONGS from "../../graphql/queries/fetchSongs";

const SongDetails = (props) => {
  const params = useParams();
  const [fetchSongDetails, { loading, data }] =
    useLazyQuery(FETCH_SONG_DETAILS);

  useEffect(() => {
    fetchSongDetails({ variables: { id: params?.songId } });
  }, [params?.songId]);

  if (loading) {
    return <BeatLoader color="#36d7b7" />;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{data?.song?.title}</h3>
      <LyricList lyrics={data?.song?.lyrics || []} />
      <LyricCreate songId={params?.songId} />
    </div>
  );
};

export default SongDetails;
