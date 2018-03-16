import React, {Component} from 'react';

class Record extends Component{
  render(){
    return (
      <div className='record'>
        <h3>{this.props.title}</h3>
        <h4>{this.props.artist}</h4>
      </div>
    )
  }
}

export default Record;
