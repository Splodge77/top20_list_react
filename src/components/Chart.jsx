import React from 'react';
import Record from './Record';

const Chart = (props) => {
  // if (props.songs = null || props.songs.length === 0) {
  //   return <p>Loading...<p>;
  // }
  const recordComponents = props.records.map((record, index) => {
    return (
      <Record
        key={index}
        position={index + 1}
        title={record['im:name'].label}
        artist={record['im:artist'].label}
      />
    )
  });
  return (
    <div>
      {recordComponents}
    </div>
  );
};

export default Chart;
