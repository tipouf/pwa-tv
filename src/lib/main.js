import React from 'react';
import ReactPlayer from 'react-player';
import Files from 'react-files';
import styles from './style.module.css';

console.log(styles);

function NoChannel() {
  return <div className={styles.dropFile}>
    <h1>Bienvenue !</h1>
    <span>
        <Files
          className="files-dropzone"
          onChange={file => {
            console.log(file)
          }}
          onError={err => console.log(err)}
          accepts={['.m3u']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
      </span>
    </div>;
};

function TvChannel({flux}) {
  return <div className={styles.root}>
    <ReactPlayer className="player-wrapper" url={flux} controls playing width='99%' height='99%' autoPlay={true}/>
  </div>
};

export default function Main({flux}) {
if (!flux){
  return <NoChannel />;
}
  return  <TvChannel flux={flux} />;
}