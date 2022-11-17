import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate();

    const searchHandler = (e) =>{
        e.preventDefault();

        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }
        else{
            navigate("/")
        }
    }
    console.log(keyword)

    return (
    <form onSubmit={searchHandler}>
    <div className="input-group">
    <input
        type="text"
        id="search_field"
<<<<<<< HEAD
        className="form-control"
        placeholder='¿Que producto buscas?...'
=======
        class="form-control"
        placeholder='¿Que producto estas buscando?...'
>>>>>>> fc3bfc1eb8577ee6b78bc0e492051900a383a44a
        onChange={(e) => setKeyword(e.target.value)}
        />
        
    <div className="input-group-append">
        <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</div>
</form >
  );
};

export default Search