function Button({ color, children }) {
  return (
    <button className={`bg-${color}-600 hover:bg-${color}-500`}>
      {children}
    </button>
  );
}
