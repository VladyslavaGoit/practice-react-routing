export const SearchBox = ({ value, onChange }) => {
  return (
    <input value={value} onChange={event => onChange(event.target.value)} />
  );
};
