import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultList.css';

const SearchResultsList = ({results}) => {
  

  return (
    <div className='results-list' style={{ width: '350px', borderRadius: '0',  boxShadow: 'none', outline: 'none', marginLeft: '12.65rem',border: 'none' }}>{
     results.map((result,id)=>{
        
        return  <Link to={`/products/${result.proid}`} className="text-reset search-result" 
        style={{ textDecoration: 'none', boxShadow: '0 4px 6px rgba(0.01, 0.01, 0.01, 0.05)', }}
        
        >
        <div key={id}>{result.proname}</div></Link>
     })
    }
    </div>
  );
};

export default SearchResultsList;
