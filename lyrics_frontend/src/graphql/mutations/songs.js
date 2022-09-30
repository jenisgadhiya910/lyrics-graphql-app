import { gql } from "@apollo/client";

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export const ADD_SONG = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export const LIKE_LYRIC = gql`
mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;