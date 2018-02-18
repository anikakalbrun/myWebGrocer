import React, {Component} from 'react';
import {connect} from "react-redux";
import {number, func} from 'prop-types';

import Page1 from '../components/Page1';
import Page2 from '../containers/Page2';
import Page3 from '../components/Page3';
import {setPageNumber} from '../actions';
import '../style/css/Main.css';

const getHeight = (innerHeight) => innerHeight - 91;

export class Main extends Component {

    static propTypes = {
        pageNumber: number.isRequired,
        setPageNumber: func.isRequired
    };

    state = {
        pageNumber: getHeight(window.innerHeight)
    };

    componentDidMount() {
        window.addEventListener("resize", this.setComponentHeight);
        this.setComponentHeight();
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.setComponentHeight);
    }

    setComponentHeight = () => {
        this.setState({minHeight: getHeight(window.innerHeight)})
    };

    goToSecondPage = () => {
        this.props.setPageNumber(2)
    };

    render() {
        const {pageNumber} = this.props;
        return (
            <main className='main'>
                <div style={{minHeight: this.state.minHeight, height: 'auto', overflow: 'auto'}}>
                    {pageNumber === 1 && <Page1 goToSecondPage={this.goToSecondPage}/>}
                    {pageNumber === 2 && <Page2/>}
                    {pageNumber === 3 && <Page3/>}
                </div>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageReducer.pageNumber
    }
}

export default connect(mapStateToProps, {setPageNumber})(Main)