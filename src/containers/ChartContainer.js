import React, {Component} from "react";
import Chart from "../components/Chart";

class ChartContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      records: []
    }
  }

  componentDidMount() {
    this.fetchRecords(this.props.genres[0].url)
  }

  fetchRecords(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const recordList = JSON.parse(jsonString);
        this.setState({records: recordList.feed.entry});
      }
    });
    request.send();
  }

  render(){
    return(
      <div className="chart-container">
        <Chart
          records={this.state.records}
        />
      </div>
    )
  }
}

export default ChartContainer;
