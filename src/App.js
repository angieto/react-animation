import React, {Component} from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

import facts from './NASA_facts.json';

//styles
import styles from './App.module.css';

class App extends Component {
  state = {
    facts
  }

  updateClicked = (id) => {
    const updatedState = {...this.state};
    const fact = updatedState.facts[id];
    fact.clicked = !fact.clicked;
    this.setState(updatedState)
  };

  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid 
          facts={this.state.facts}
          updateClicked={this.updateClicked} />
        <Rocket />
        <Smoke />
      </div>
    )
  }
}

export default App;
