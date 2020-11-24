import React from 'react'
import { Container } from 'react-bootstrap';

interface Props {
  bits: number
  valueDecimal?: number
  signed: Boolean
}

export default class Resultado extends React.Component<Props> {

  dec2bin(dec: number, bits: number, signed: Boolean): string {
    dec = parseInt(dec.toString())
    return ((dec + (signed ? Math.pow(2, bits - 1) : 0)) >>> 0).toString(2)
  }

  render() {
    let error = '';
    const valueDecimal = this.props.valueDecimal || 0

    const maxValue = Math.pow(2, this.props.bits - (this.props.signed ? 1 : 0)) - 1
    const minValue = - Math.pow(2, this.props.bits - (this.props.signed ? 1 : 0))

    let valueBinary = this.dec2bin(valueDecimal, this.props.bits, this.props.signed)

    if (valueDecimal < minValue || valueDecimal > maxValue) {
      error = `El número ${this.props.valueDecimal} (${valueBinary}) no cabe en ${this.props.bits} bits`
    }

    if (valueBinary.length <= this.props.bits) {
      valueBinary = '0'.repeat(this.props.bits - valueBinary.length) + valueBinary;
    }

    if (!this.props.signed && valueDecimal < 0) {
      error = 'No puedes meter un número negativo si no hay bit de signo'
    }


    return <Container>
      <div>{error !== '' ? error : valueBinary}</div>
    </Container>
  }
}