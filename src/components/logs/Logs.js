import React,{ useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import {getLogs} from '../../actions/logActions';

const Logs = ({log: {logs, loading}, getLogs}) => {
 

    useEffect(()=>{
        getLogs();
        
    },[getLogs])


    if(loading || logs === null){
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length ===0 ?(<p className="centre">No logs to show...</p>):(
                logs.map(log => <LogItem key={log.id} log={log} />)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log:PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log:state.log
})

export default connect(mapStateToProps,{getLogs})(Logs);
