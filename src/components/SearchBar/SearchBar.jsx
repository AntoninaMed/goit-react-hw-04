import  { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from "./SearchBar.module.css"
import { TbPhotoSearch } from "react-icons/tb";

export const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(searchTerm); // Відправляємо значення інпуту на обробку
    setSearchTerm(''); // Очищаємо значення інпуту після відправки форми
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Оновлюємо стан значення інпуту при введенні користувачем
  };
  return (
    <div>
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input 
        className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button  className={css.button} type="submit"><TbPhotoSearch size="22px" /></button>
      </form>
    </header>
    </div>
  );
};

export default SearchBar;