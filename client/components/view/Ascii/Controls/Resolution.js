const Resolution = ({resolution, setResolution}) => {
  // methods
  const handleChange = (e) => {
    console.log('THE VALUE ', typeof e.target.value, e.target.value)
    setResolution(e.target.value)
  }

  return (
    <>
      <label htmlFor="resolution" id="resolutionLabel">Resolution</label>
      <input type="range" id="resolution" name="resolution" min={1} max={15} value={resolution || 7} onChange={handleChange}></input>
    </>
  )
}

export default Resolution