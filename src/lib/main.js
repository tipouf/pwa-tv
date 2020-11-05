import React from 'react';
import ReactPlayer from 'react-player';
import Files from 'react-files';
import "./main.css";
import m3u8 from "m3u8";
import fileReaderStream from "filereader-stream";
import Immutable, { List } from "immutable";

const styles = {
  dropzone: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 5,
  }
}


function NoChannel() {
  return <div className= "dropFile">
    <h1>Bienvenue !</h1>
    <span>
        <Files
          className="files-dropzone"
          onChange={file => {
            var contentFile = file[0];
            const parser = m3u8.createStream();
            console.log('test',fileReaderStream(contentFile).pipe(parser));
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
  return <div className= "root">
    <ReactPlayer className="player-wrapper" url={flux} controls playing width='99.5%' height='99.5%' autoPlay={true}/>
  </div>
};

export default function Main({flux}) {
if (!flux){
  return <NoChannel />;
}
  return  <TvChannel flux={flux} />;
}