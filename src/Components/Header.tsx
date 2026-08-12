export const Header = () => {
  return (
  <>
    <header className="bg-(--color-background) border-b border-gray-200 ">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          
              <div className="flex items-center gap-2">
                  <div className="bg-(--color-primary) text-(--color-text-light) rounded-md px-2 py-1">
                    GC
                  </div>
                  <span className="font-bold text-(--color-text)">GymControl</span>
              </div>

            
              <nav className="hidden md:flex items-center gap-8 text-(--color-text-secondary)">
                  <a href="#" className="hover:text-(--color-text)">
                    Por qué GymControl
                  </a>
                  <a href="#" className="hover:text-(--color-text)">
                    Cómo funciona
                  </a>
                  <a href="#" className="hover:text-(--color-text)" >
                    Para quién es
                  </a>
                  <a href="#" className="hover:text-(--color-text)">
                    Contáctanos
                  </a>
              </nav>

              <div className="flex items-center gap-3">
                  <button className="btn btn-secondary">Iniciar sesión </button>
                  <button className="btn btn-primary">Registrarse </button>
              </div>

        </div>
    </header>
  </>
  )
}
