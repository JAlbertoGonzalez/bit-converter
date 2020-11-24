import React from 'react'
import { Form } from 'react-bootstrap'
import Resultado from './Resultado'

class FormBits extends React.Component {


  state = {
    bits: 8,
    value: 0,
    signed: false
  }

  handleBitsChange(evt: any) {
    this.setState({
      bits: evt.currentTarget.value
    })
  }

  handleValueChange(evt: any) {
    this.setState({
      value: evt.currentTarget.value
    })
  }

  handleSignedChange(evt: any) {
    this.setState({
      signed: evt.currentTarget.checked
    })
  }

  render() {
    return <Form>
      <Form.Group controlId="formNumberBits">
        <Form.Label>Número de bits</Form.Label>
        <Form.Control type="number" min={0} max={32} placeholder="Número de bits" value={this.state.bits} onChange={this.handleBitsChange.bind(this)} />
        <Form.Text className="text-muted">Por motivos técnicos de JavaScript (lenguaje de programación utilizado para esta herramienta), no podemos usar más de 32 bits. Números superiores a 32 bits dan resultados erróneos debido a un <a href="https://en.wikipedia.org/wiki/Integer_overflow">desbordamiento</a>.</Form.Text>
      </Form.Group>

      <Form.Group controlId="formNumber">
        <Form.Label>Valor decimal</Form.Label>
        <Form.Control type="number" placeholder="Decimal value" value={this.state.value} onChange={this.handleValueChange.bind(this)} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Hay bit de signo" checked={this.state.signed} onChange={this.handleSignedChange.bind(this)} />
      </Form.Group>

      <Resultado valueDecimal={this.state.value} bits={this.state.bits} signed={this.state.signed} />

    </Form>
  }
}

export default FormBits