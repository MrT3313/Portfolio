const Resolution = () => {
  return (
    <>
      <label for="resolution" id="resolutionLabel">Resolution</label>
      <input type="range" id="resolution" name="resolution" min="1" max="20" value="5"></input>
    </>
  )
}

export default Resolution