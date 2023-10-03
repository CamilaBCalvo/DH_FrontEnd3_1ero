function Title(props) {
  console.log(props);
  return (
    <div id="Title">
        {props.children}
      <h1 className="components-title">
          {props.title}
      </h1>
    </div>
  );
}
export default Title;
