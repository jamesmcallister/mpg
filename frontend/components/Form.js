import React, { Component } from 'react'
import Logo from './Logo'
import mpgListQuery from '../graphql/query.js'
import formulaMpg from '../mpgFunction'
class Form extends Component {
  handelSubmit(event) {
    event.preventDefault()
    const miles = this.form.miles.value
    const litres = this.form.litres.value
    const totalmpg = formulaMpg(miles, litres)
    this.props.mutate({
      variables: {
        date: Date.now(),
        miles,
        litres,
        totalmpg
      },
      refetchQueries: [{ query: mpgListQuery }]
    })

    this.form.reset()
  }
  handelInputMiles(event) {
    event.preventDefault()
    const miles = this.form.miles.value
    this.props.updateMiles(miles)
  }
  handelInputLitres(event) {
    event.preventDefault()
    const litres = this.form.litres.value
    this.props.updateLitres(litres)
  }
  render() {
    return (
      <form
        ref={input => (this.form = input)}
        onSubmit={e => this.handelSubmit(e)}
        className="pa4 measure black-80 tc center"
      >
        <input
          id="miles"
          ref="miles"
          onInput={e => this.handelInputMiles(e)}
          type="text"
          placeholder="How far have you gone?"
          className="input-reset
            ba
            b--black-20
            pa2
            mb2
            db
            w-100"
        />
        <input
          id="litres"
          ref="litres"
          onInput={e => this.handelInputLitres(e)}
          type="text"
          placeholder="How much many litres did you put in?"
          className="input-reset
            ba
            b--black-20
            pa2
            mb2
            db
            w-100"
        />
        <button
          className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
          title="Save"
        >
          <Logo width="20" height="20" fill="white" />
          <span className="f6 ml3 pr2">Save</span>
        </button>
      </form>
    )
  }
}

export default Form
