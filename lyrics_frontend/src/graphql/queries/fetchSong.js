import { gql } from "@apollo/client";

const FETCH_SONG_DETAILS = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default FETCH_SONG_DETAILS
