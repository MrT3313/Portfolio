const MailTo = ({ children, email }) => {
  return (
    <a
      href={`mailTo:${email}`}
    >
      {children}
    </a>
  )
}

export default MailTo