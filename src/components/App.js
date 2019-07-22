import React, {Component} from 'react';
import Grupo from './Grupo';
import AddGroup from './AddGroup'
import './../App.css';

/* ¿Cansado de calcular la tabla de posiciones? ¿Con miedo de cometer un error matemático? ¡No te preocupes! Nosotros te ayudamos. 
*/
class App extends Component {
  state = {
    grupos: [
      {
        title: 'Grupo A',
        id: 0
      }
    ]
  };

  prevId=this.state.grupos.length;
  title='Tabla de clasificaciones';

  handleAddGroup = (titl) => {
    let newGroup = {
      title: 'Grupo ' + titl,
      id: this.prevId += 1
    };

    this.setState(prevState => ({
      grupos:prevState.grupos.concat(newGroup)
    }));
  };

  handleRemoveGroup = ind => {
    this.setState(prevState => ({
      grupos: prevState.grupos.filter(grupo => grupo.id !== ind)
    }));
  };

  render() {
    return (
      <div className="tablas">
        <h1 className='title'>{this.title}</h1>
        {this.state.grupos.map(grupo => 
          <Grupo
          title={grupo.title}
          key={grupo.id.toString()}
          index={grupo.id}
          handleRemoveGroup={this.handleRemoveGroup}
          />
        )}
        
        <AddGroup 
        handleAddGroup={this.handleAddGroup} />
      </div>
    );
  }
}

export default App;
