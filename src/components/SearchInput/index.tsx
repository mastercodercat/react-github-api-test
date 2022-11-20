import { useState } from "react";

interface SearchInputProps {
  className?: string;
  onSearch: (search: string) => {};
}

const SearchInput = ({ className, onSearch }: SearchInputProps) => {
  const [search, setSearch] = useState("");

  const onChange = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();

    setSearch(evt.currentTarget.value);
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSearch(search);
  };

  return (
    <form
      action="#"
      className={`input-group mb-3 ${className}`}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search ..."
        aria-label="Search ..."
        value={search}
        onChange={onChange}
      />
      <button
        className="btn btn-outline-primary"
        type="submit"
        id="button-addon2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
