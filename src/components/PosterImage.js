import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
  posterTitle: PropTypes.string
};

function PosterImage(props) {
  const { poster, player, actions, className, posterTitle } = props;

  if (!poster || player.hasStarted) {
    return null;
  }

  return (
    <div
      className={classNames('video-react-poster', className)}
      style={{
        backgroundImage: `url("${poster}")`
      }}
      onClick={() => {
        if (player.paused) {
          actions.play();
        }
      }}
    >
      {posterTitle ? (
        <h3 className="video-react-poster-title">{posterTitle}</h3>
      ) : null}
    </div>
  );
}

PosterImage.propTypes = propTypes;
PosterImage.displayName = 'PosterImage';

export default PosterImage;
