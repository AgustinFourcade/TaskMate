import React from "react"
import PropTypes from "prop-types"
 
class UbicacionPuntero extends React.Component {
  
  constructor(props) {
    super(props);
    this.movimientoPuntero = this.movimientoPuntero.bind(this);
    this.state = { x: 0, y: 0 };
  }
 
  movimientoPuntero(evento) {
    this.setState({
      x: evento.clientX,
      y: evento.clientY
    });
  }
 
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.movimientoPuntero}>        
        <p>La posición actual del puntero es: ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}
 
export default UbicacionPuntero