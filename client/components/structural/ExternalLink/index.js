const ExternalLink = ({children, to }) => {
  return (
    <a 
      target="_blank"
      href={to}
    >{children}</a>
  )
}

export default ExternalLink