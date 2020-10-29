import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function Main({flux}) {
  const classes = useStyles();
      return (
    <div className={classes.root}>
      <ReactPlayer className="player-wrapper" url={flux} controls playing width='99%' height='99%' autoPlay={true}/>
    </div>
  );
}