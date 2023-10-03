function Button(props) {
  const { loading, children, ...restProps } = props;
  return (
    <button 
        {...restProps}
        disabled={loading || props.disabled} 
    >
      {loading ? "loading" : children}
    </button>
  );
}
export default Button;
