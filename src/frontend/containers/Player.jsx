import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { setVideoSource, setPathName } from '../actions';
import NotFound from '../containers/NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  props.setPathName(props.match.path);
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.setVideoSource(id);
  }, []);

  return hasPlaying ? (
    <section className='player'>
      <video className='player__item' controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='player__back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </section>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  setVideoSource,
  setPathName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
