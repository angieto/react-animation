import React from 'react';
import GridItem from './GridItem';

import styles from './Grid.module.css';

export default class Grid extends React.Component {

  renderFacts = () => {
    console.log("grid", this.props.updateClicked);
    return this.props.facts.map(item => 
      <GridItem 
        key={item.id}
        fact={item}
        updateClicked = {this.props.updateClicked}
      />
    );
  };

  render() {
    return (
      <section className={styles.grid}>
        { this.renderFacts() }  
      </section>
    );
  }
}
