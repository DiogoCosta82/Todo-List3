function Content(props) {
  return (
    <div id="contentList">
      <p className="idTask"></p>
      {props.task}
    </div>
  );
}

export default Content;
