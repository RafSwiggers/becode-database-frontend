
import React,{ Component } from 'react';
import Notes from './components/notes';

    class App extends Component {

      state = {
        notes: []
      }
      componentDidMount() {
        fetch('http://localhost/note.php?list')
        .then(res => res.json())
        .then((data) => {
          this.setState({ notes: data })
        })
        .catch(console.log)
    }
    render() {
      return (
        <Notes notes={this.state.notes} />
      )
    }
  }
  export default App;