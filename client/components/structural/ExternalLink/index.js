const ExternalLink = ({children, to, kind }) => {
  return (
    <a 
      className={kind && kind}
      target="_blank"
      href={to}
    >{children}</a>
  )
}

export default ExternalLink