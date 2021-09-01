import React from 'react'
import './Filter.css'
import { useSelector, useDispatch } from 'react-redux';


function Filter(props) {
    const filter = useSelector(state => state.filter);
	const { items } = props;
    const dispatch = useDispatch();

    return (
        <>
            <div className='btn-wrapper'>
                <div>
                    <button className='btn'
                        onClick={() => {
                            dispatch({ type: 'GET_FILTERED', payload: items, run: 'Admin'});
                        }}
                    >Admin</button>
                    <button className='btn'
                    onClick={() => {
                        dispatch({ type: 'GET_FILTERED', payload: items, run: 'Editor'});
                    }}>Editor</button>
                    <button className='btn'
                    onClick={() => {
                        dispatch({ type: 'GET_FILTERED', payload: items, run: 'Viewer'});
                    }}>Viewer</button>
                </div>
            </div>
            <div className='container'>
                <div>{filter.length === 0 && <h1>No User Found</h1>}</div>
                {filter.length > 0 &&
                <div className='filter-wrapper'>{filter.map(item => {
                    return (<h4 className='filter-card' key={item.id}>{item.name}</h4>)
                })}
                </div>
                }
            </div>
        </>
    )
}

export default Filter
