import React, { useContext } from 'react';
import MyContext from '../context';
import '../styles/SearchInput.css';

function SearchInput() {
  const { inputSearch, setInputSearch } = useContext(MyContext);

  let time = null
  const handleChange = ({ target: { value: values } }) => {
    clearTimeout(time);
    time = setTimeout(() => {
      setInputSearch({ ...inputSearch, search: values });
    }, 1000)
  }

  return (
    <section className="search-input-container">
      <label className="search-input-label">
        <input type="text"
          name="search"
          id="search"
          placeholder="Buscar podcast..."
          onChange={handleChange}
          className="input-search"
        />
      </label>
    </section>
  );
}

export default SearchInput;
