import { useMutation } from "@apollo/client";
import React from "react";
import { LIKE_LYRIC } from "../../graphql/mutations/songs";

const LyricList = (props) => {
  const { lyrics } = props;
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const onLike = (id) => {
    likeLyric({ variables: { id } });
  };

  return (
    <ul className="collection">
      {lyrics?.map(({ id, content, likes }) => {
        return (
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i className="material-icons" onClick={() => onLike(id)}>
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LyricList;
