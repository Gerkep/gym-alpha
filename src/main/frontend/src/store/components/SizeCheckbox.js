import React from "react";
import { connect } from 'react-redux';
import { selectSize } from '../../actions';

class SizeCheckbox extends React.Component {
    state = {active: false}

    toggleClass = () => {
        const currentState = this.state.active;
        if(this.props.size === null){
            this.props.selectSize(this.props.text);
            if(!(this.props.disable)){
                this.setState({ active: !currentState });
            }
        }else if(this.props.size == this.props.text){
            this.props.selectSize(null)
            if(!(this.props.disable)){
                this.setState({ active: !currentState });
            }
        }
    };

    render() {
        return (
            <div 
                className={this.state.active ? 'size-container selected' : this.props.disable ? 'size-container disactivated' : 'size-container'} 
                onClick={this.toggleClass} 
            >
                <p>{this.props.text}</p>
            </div>
        )
  }
}

const mapStateToProps = (state) => {
    return {size: state.size};
}

export default connect(mapStateToProps, { selectSize: selectSize })(SizeCheckbox);