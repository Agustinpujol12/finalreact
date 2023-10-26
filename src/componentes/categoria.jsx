

export const Categoria = ({isActive = false, name}) => {
    return (
      <a 
      className={`nav-link ${isActive ? "active" : null}`} 
      aria-current="page"
      href="#">
        {name}
    </a>
    )
  }
  
  