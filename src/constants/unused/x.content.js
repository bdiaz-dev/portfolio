import { captures, technologies } from '../imgs.js'
import cvEn from '../assets/cv/cv_en.pdf'
import cvEs from '../assets/cv/cv_es.pdf'

export const contactLinks = {
  mail: 'mailto:contact@brunodiaz.es',
  web: 'http://brunodiaz.es',
  github: 'https://github.com/bdiaz-dev/',
  linkedin: 'http://linkedin.brunodiaz.es',
  cvDownload: [
    cvEs, cvEn
  ]
}

export const es = {
  header: {
    titles: 'Desarrollador Frontend & Videojuegos Indie'
  },
  about: {
    title: 'Sobre mi',
    text: 'Soy una persona con una curiosidad infiníta, especialmente en lo que respecta a la tecnología. Esto siempre me ha llevado a investigar cómo funcionan las cosas y a comprobar si soy capaz de hacerlas. Fue gracias a que un día decidí explorar el mundo del desarrollo independiente de videojuegos que descubrí una verdadera pasión: la programación. Me encanta construir tanto juegos como aplicaciones web con experiencias de usuario agradables y/o divertidas, y estoy siempre abierto a nuevos proyectos.'
  },
  projects: {
    title: 'Proyectos',
    jobs: [
      {
        title: 'WeatherApp2',
        text: 'Prueba técnica de consulta de clima de 3 ciudades preestablecidas para muestra de habilidades.',
        description: [
          'En esta prueba técnica se solicitó una muestra de habilidades en desarrollo con React, Vite, TypeScript, Sass y testing.',
          'Gracias a este trabajo, descubrí el potencial que podía aprovechar de mí mismo con las herramientas propuestas, además de aprender a sacar provecho de librerías que no había utilizado anteriormente.',
          'Aprendí muchas formas de optimizar el desarrollo y la escalabilidad, así como facilitar el trabajo en equipo, gracias a los principios SOLID y Clean Code. Cada módulo y componente tiene su propia responsabilidad, lo que hace mucho más sencillo identificar posibles errores y/o mejorar la aplicación.',
          'El diseño es moderno y agradable, basado en tarjetas y completamente responsivo.',
          'El título y el favicon son dinámicos, actualizándose según la ciudad seleccionada y su clima actual.',
          'Hice uso de contextos para el acceso a estados globales sin necesidad de pasar props o recurrir a la mala práctica del "prop drilling".',
          'La mayoría de animaciones se gestionan mediante la librería Framer Motion, que ahora forma parte de mi "caja de herramientas" personal.',
          'La aplicación está disponible tanto en inglés como en español, permitiendo el cambio de idioma mediante un pequeño menú de configuración desplegable. En dicho menú también es posible cambiar el tema (claro, oscuro o sincronizado con el dispositivo).',
          'Uso de modales para el formulario de contacto y para mostrar el detalle del clima en cada previsión.',
          'Se ha tenido en cuenta la accesibilidad, permitiendo manejar toda la aplicación con el teclado.',
          'Los estilos se han escrito en Sass, lo que ofrece de forma nativa el uso de mixins, funciones, variables, estilos condicionales y anidación. Esto ha permitido lograr un código de estilos más limpio, organizado, fácilmente depurable y escalable.',
          'El código ha sido controlado mediante ESLint con la configuración de Airbnb.',
          'En conclusión, he disfrutado mucho del desarrollo de esta aplicación, aprendiendo técnicas y herramientas que harán que mis futuros proyectos sean más óptimos y profesionales.',
          'Más información en el README del repositorio del proyecto.'
        ],
        urls: {
          site: 'https://weatherapp2.brunodiaz.es',
          github: 'https://github.com/bdiaz-dev/weather-ts-20'
        },
        img: captures.weatherApp2,
        tech: [
          technologies.html,
          technologies.css,
          technologies.typescript,
          technologies.react,
          technologies.vite,
          technologies.vitest,
          technologies.testingLibray,
          technologies.sass,
          technologies.framerMotion
        ]
      },
      {
        title: 'ReactDee',
        text: 'Componentes para aplicaciones React. Simples, faciles y listos para usar.',
        description: [
          'Para este proyecto, quería crear una herramienta que facilitara la creación de aplicaciones web con React. Decidí crear un catálogo de componentes, pero con una particularidad.',
          'ReactDee se basa en la simplicidad a la hora de implementar y configurar estos componentes. Además de poder copiar el código desde el repositorio, se ofrece la posibilidad de instalarlo mediante paquetes de "npm". Con un solo comando de terminal, simple y fácil de recordar, se puede obtener un componente listo para importar en el proyecto correspondiente.',
          'La configuración personalizada se realiza de forma sencilla mediante el uso de props, sin necesidad de utilizar CSS para los estilos. Con muy pocas líneas de código, y sin instalaciones o configuraciones adicionales, se pueden obtener componentes funcionales y agradables para el usuario final.',
          'Actualmente, hay cuatro componentes disponibles con los que ya se puede construir una sencilla web, pero hay planes de seguir ampliando y actualizando la herramienta.',
          'Además de los componentes, también trabajé en la construcción del sitio web que alojaría la documentación y presentación de este proyecto. El sitio fue creado con Next.js, aprovechando su enrutamiento y la optimización de renderizado en servidor.'
        ],
        urls: {
          site: 'https://reactdee.brunodiaz.es',
          github: 'https://github.com/bdiaz-dev/reactdee'
        },
        img: captures.reactdee,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.react,
          technologies.nextjs,
          technologies.npm
        ]
      },
      {
        title: 'Ona Games',
        text: 'La pagina web de mi desarrolladora Indie de Videojuegos.',
        description: [
          'En esta página web desarrollada con React se puede encontrar la información referente al estudio de videojuegos independiente que da imagen de marca a mis juegos.',
          'Este proyecto lo pospuse hasta tener los conocimientos necesarios sobre React y React Router. Además, fue la primera vez que trabajé con enrutamiento en una aplicación. Gracias a este proceso, descubrí la importancia del renderizado en servidor (SSR), ya que inicialmente no podía acceder a una ubicación directamente por URL ni refrescar la página estando en producción. Esto lo solucioné, dado que el proyecto usa renderizado en cliente, implementando "createHashRouter".',
          'Dispone de un selector de idioma dinámico, además de la detección automática del idioma configurado en el navegador.',
          'En la página de cada juego, se pueden abrir modales que muestran las imágenes en tamaño grande o, en el primer modal, el tráiler del juego.',
          'También hay un formulario de contacto integrado en la página correspondiente para facilitar la comunicación.'
        ],
        urls: {
          site: 'http://onagames.brunodiaz.es/',
          github: 'https://github.com/bdiaz-dev/OnaGamesStudioWeb'
        },
        img: captures.onaGames,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.reactRouter
        ]
      },
      {
        title: 'Editorial Dinav',
        text: 'Aplicación para hacer lista de lectura sobre Editorial inventada.',
        description: [
          'Creé este proyecto como ejercicio para practicar mis conocimientos con React y la gestión de estados globales, utilizando Zustand.',
          'En esta aplicación, se encuentra una pequeña colección de libros, los cuales se pueden agregar a una lista de lectura personal.',
          'La lista de lectura se gestiona mediante un desplegable en la parte inferior de la pantalla, que también muestra el número de elementos que contiene.',
          'Para la manipulación de los libros, al hacer clic en uno de ellos, se abre un modal que muestra la información del libro y un botón para añadirlo a la lista.',
          'La colección inicial se puede filtrar por género, y hay una opción para mostrar u ocultar los libros ya agregados a la lista de lectura.',
          'Este proyecto es completamente escalable, permitiendo agregar más libros a la colección o más filtros de búsqueda sin afectar su comportamiento. Además, se han cuidado los detalles, como ofrecer animaciones suaves y alertas emergentes que mejoran la experiencia del usuario, haciendo que la aplicación sea agradable e intuitiva de usar.'
        ],
        urls: {
          site: 'http://editorialdinav.brunodiaz.es/',
          github: 'https://github.com/bdiaz-dev/lista-lectura'
        },
        img: captures.listaLectura,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.zustand
        ]
      },
      // {
      //   title: 'React shop',
      //   text: 'Mi primer trabajo de ensayo para aprender react.',
      //   description: [
      //     'Esta es una aplicación simple para practicar el manejo de estados globales en forma de carrito de compras.',
      //     'Se pueden añadir elementos al carrito, los cuales mostrarán un aviso indicando que ya han sido agregados. Además, el botón de compra cambiará para mostrar la opción de añadir una unidad más.',
      //     'Dispone de filtros para buscar los artículos por categoría o por precio.',
      //     'El carrito se muestra como un menú desplegable, con un listado en columna. Desde aquí se pueden añadir o quitar unidades de cada artículo, y si la cantidad llega a cero, se eliminará de la lista.',
      //     'Es un ejemplo sencillo en el que no dediqué más tiempo una vez fue funcional lo que pretendía, ya que quería continuar con mi entrenamiento en proyectos más interesantes.'
      //   ],
      //   urls: {
      //     site: 'http://practice.reactshop.brunodiaz.es/',
      //     github: 'https://github.com/bdiaz-dev/react-shop'
      //   },
      //   img: captures.reactShop,
      //   tech: [
      //     technologies.html,
      //     technologies.css,
      //     technologies.javaScript,
      //     technologies.vite,
      //     technologies.react,
      //     technologies.zustand
      //   ]
      // },
      {
        title: 'Weather Now',
        text: 'Una aplicacion de clima escrita en JavaScript puro.',
        description: [
          'Este es uno de mis primeros proyectos que construí mientras aprendía JavaScript. Me sirvió para comprender plenamente el funcionamiento de este lenguaje: la manipulación del DOM, trabajar con el objeto window, callbacks, control de variables, localStorage y muchas otras funcionalidades que aún no había puesto en práctica.',
          'La aplicación tiene acceso a la geolocalización del navegador, previa consulta al usuario. También permite buscar localizaciones a petición y guarda todas en el almacenamiento local del navegador para tenerlas siempre disponibles. Además, es posible eliminar varios o todos los elementos de esa lista mediante su correspondiente botón.',
          'Se puede ver el clima actual de la localización elegida, con algunos datos detallados, así como un resumen de las próximas previsiones en intervalos de 3 horas.',
          'Para la lectura de la información, se puede alternar entre los formatos Fahrenheit o Celsius, y la web elegirá entre inglés o español según el idioma predeterminado del navegador.'
        ],
        urls: {
          site: 'https://weathernow.brunodiaz.es/',
          github: 'https://github.com/bdiaz-dev/weatherApp-javaScript-vanilla'
        },
        img: captures.weatherNow,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript
        ]
      },

      {
        title: 'Block Survivor',
        text: 'Juego para Android tipo Arcade 80s hecho con Godot.',
        description: [
          'Este es mi proyecto más ambicioso en lo que respecta al desarrollo de videojuegos indie, hasta la fecha.',
          'Se trata de un juego tipo arcade con una estética inspirada en los 80, en el cual el jugador debe superar una serie de niveles llenos de obstáculos, usando solo su habilidad para mover la nave de un lado a otro y pasar a través de bloques que dificultan el viaje.',
          'El proceso de desarrollo ha sido laborioso, inspirador y emocionante, además de desafiante. Fue la razón por la que decidí entrar en la programación de forma profesional, ya que me apasionó codificar el comportamiento del juego.',
          'El juego incluye todo tipo de funcionalidades, como: gestión de datos del jugador guardados en la nube, misiones que se actualizan en tiempo real durante la partida, una tienda de aspectos para la nave, modos de juego extra que reutilizan los niveles originales cambiando las reglas, entre otros. ¡Les invito a probarlo, es muy adictivo!',
          'Una de las partes más difíciles de programar, y de las que más orgulloso estoy, es el menú principal. Este menú lo desarrollé completamente desde cero sin utilizar herramientas preestablecidas del motor, ya que buscaba algo muy concreto con comportamientos específicos. Cada funcionalidad, el comportamiento de los botones, las páginas, la selección de modos de juego y/o aspectos fueron programados directamente con lógica. Esto me brindó una gran habilidad en este campo.'
        ],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.blocksurvivor',
          github: null
        },
        img: captures.blockSurvivor,
        tech: [
          technologies.godot,
          technologies.playconsole
        ]
      },
      {
        title: 'Amigos de Palabras',
        text: 'Miniapp para jugar IRL a juegos de adivinar palabras, para Android y hecha con Godot.',
        description: ['Miniapp para jugar IRL a juegos de adivinar palabras, para Android y hecha con Godot.'],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.amigospalabras',
          github: null
        },
        img: captures.amigosPalabras,
        tech: [
          technologies.godot,
          technologies.playconsole
        ]
      }
    ]
  },
  skills: {
    title: 'Habilidades'
  },
  footer: [
    'Este portfolio ha sido desarrollado con React bajo el entorno de Vite.',
    'Puede acceder a su repositorio haciendo click ',
    ' aquí.',
    'Si tiene un proyecto en mente no dude en ', 'contactarme.'
  ],
  menu: {
    about: 'Sobre mi',
    projects: 'Proyectos',
    skills: 'Habilidades',
    repo: 'Repositorio GitHub',
    go: 'Visitar proyecto'
  }
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

export const en = {
  header: {
    titles: 'Frontend Developer & Indie Games'
  },
  about: {
    title: 'About me',
    text: 'I am an individual with boundless curiosity, particularly in the realm of technology. This innate curiosity has consistently driven me to explore the inner workings of things and determine my capacity to accomplish them. It was through my decision to delve into the realm of indie games development that I unearthed a genuine passion: programming. I thoroughly enjoy creating both games and web applications that provide enjoyable and/or engaging user experiences, and I am constantly receptive to new projects.'
  },
  projects: {
    title: 'Projects',
    jobs: [
      {
        title: 'WeatherApp2',
        text: 'Technical test for weather consultation of 3 pre-set cities to showcase skills.',
        description: [
          'This technical test required a demonstration of development skills using React with Vite, along with TypeScript, Sass, and testing.',
          'Thanks to this project, I discovered the potential I could unlock with the proposed tools, as well as learning how to take advantage of libraries I hadn’t used before.',
          'I learned many ways to optimize development and scalability, while also making it easier for potential team collaboration, thanks to SOLID principles and Clean Code. Each module and component has its own responsibility, making it much easier to identify possible errors and improve the application.',
          'The design is modern and pleasant, based on cards and fully responsive.',
          'Dynamic title and favicon that change according to the selected city and its current weather.',
          'I utilized contexts to access global states without the need to pass props or fall into the bad practice of "prop drilling."',
          'Most animations are handled using the framer-motion library, which has now become part of my personal "toolbox."',
          'The application is available in both English and Spanish, and you can switch between them via a small dropdown settings menu. In that menu, you can also change the theme (light, dark, or synced with the device).',
          'Modals are used for the contact form and to display detailed weather information for each forecast.',
          'Accessibility has been taken into account, allowing the entire application to be navigated using only the keyboard.',
          'Styles are written in Sass, which natively offers the use of mixins, functions, variables, conditional styling, and nesting. This allowed me to create cleaner, more organized, and easily debuggable and scalable styles.',
          'Code syntax is controlled using ESLint with the Airbnb configuration.',
          'In conclusion, I really enjoyed developing this application while learning many techniques and tools that will make my future developments more efficient and professional.',
          'More information can be found in the README of the project repository.'
        ],
        urls: {
          site: 'https://weatherapp2.brunodiaz.es',
          github: 'https://github.com/bdiaz-dev/weather-ts-20'
        },
        img: captures.weatherApp2,
        tech: [
          technologies.html,
          technologies.css,
          technologies.typescript,
          technologies.react,
          technologies.vite,
          technologies.vitest,
          technologies.testingLibray,
          technologies.sass,
          technologies.framerMotion
        ]
      },
      {
        title: 'ReactDee',
        text: 'Simply, easy, and ready for use React Components for your apps.',
        description: [
          'For this project, I wanted to create a tool that would make building web applications with React a little easier. So, I decided to create a catalog of components, but with a twist.',
          'ReactDee is all about simplicity when it comes to implementing and configuring these components. In addition to copying the code from the repository, it offers the possibility of installing it using "npm" packages. With a single terminal command, simple and easy to remember, you can obtain a component that is ready to import into your project.',
          'Custom configuration is easily achieved using props, without the need for CSS for styling.',
          'This allows for functional and pleasant components for the end user with very few lines of code, without the need for additional installations or configurations in other files.',
          'Currently, there are four components available to build a simple website, but there are plans to expand and update the tool.',
          'In this case, in addition to the components, I also worked on the construction of the website that hosts the documentation and presentation of this project. It was created with Next.js to take advantage of features like routing and server-side optimization.'
        ],
        urls: {
          site: 'https://reactdee.brunodiaz.es',
          github: 'https://github.com/bdiaz-dev/reactdee'
        },
        img: captures.reactdee,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.react,
          technologies.nextjs,
          technologies.npm
        ]
      },
      {
        title: 'Ona Games',
        text: 'The website of my Indie Game Development studio.',
        description: [
          'On this React-developed website, you can find information related to the study of independent video games, which gives a brand identity to my games.',
          'I postponed this project until I acquired the necessary knowledge about React and React Router, as it marked my first experience with application routing. Through this project, I discovered the significance of server-side rendering (SSR), as direct URL access or simply refreshing the page while in production was not feasible. I addressed this issue, in the case of client-side rendering, by implementing "createHashRouter."',
          'It features a dynamic language selector, along with automatic detection based on the language configured in the browser.',
          'On each game’s page, modals can be opened to display either enlarged images or, in the first modal, the trailer.',
          'Additionally, a contact form is integrated into the contact page for this purpose.'
        ],
        urls: {
          site: 'https://onagames.brunodiaz.es/',
          github: 'https://github.com/bdiaz-dev/OnaGamesStudioWeb'
        },
        img: captures.onaGames,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.reactRouter
        ]
      },
      {
        title: 'Editorial Dinav',
        text: 'Application for creating a reading list for a fictional publishing house.',
        description: [
          'I created this project as an exercise to practice my skills with React and global states, which I managed using Zustand. In this application, you can find a small collection of books that can be added to a personal reading list.',
          'The reading list can be managed through a dropdown at the bottom of the screen, which also displays the number of items it contains. When you click on a book, a modal opens, displaying its information and a button to add it to the list.',
          'The initial collection can be filtered by genre, and there is an option to show or hide items added to the reading list. This project is fully scalable, allowing for the addition of more books to the collection or more search filters without affecting its behavior.',
          'Great attention has been given to detail, offering smooth animations and pop-up alerts to enhance the user experience, making it enjoyable and intuitive to use.'
        ],
        urls: {
          site: 'http://editorialdinav.brunodiaz.es/',
          github: 'https://github.com/bdiaz-dev/lista-lectura'
        },
        img: captures.listaLectura,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.zustand
        ]
      },
      // {
      //   title: 'React shop',
      //   text: 'My first essay project to learn React.',
      //   description: [
      //     'This is a very simple application to practice managing global states in the form of a shopping cart.',
      //     'Items can be added to the cart, and a notice will indicate that they have already been added. Additionally, the purchase button will change to show the option to add one more unit.',
      //     'It features filters to search for items by category or starting price.',
      //     'The cart is displayed as a drop-down menu with a column listing. From here, you can add or remove units of each item to buy, and if the quantity reaches zero, it will be deleted from the list.',
      //     'It’s a simple example in which I didn’t spend more time once what I intended was functional, as I wanted to continue my training on more interesting projects.'
      //   ],
      //   urls: {
      //     site: 'http://practice.reactshop.brunodiaz.es/',
      //     github: 'https://github.com/bdiaz-dev/react-shop'
      //   },
      //   img: captures.reactShop,
      //   tech: [
      //     technologies.html,
      //     technologies.css,
      //     technologies.javaScript,
      //     technologies.vite,
      //     technologies.react,
      //     technologies.zustand
      //   ]
      // },
      {
        title: 'Weather Now',
        text: 'A weather application written in pure JavaScript.',
        description: [
          'This is one of my first projects that I built while learning JavaScript. It helped me fully understand how this language works, including its manipulation of the DOM, working with the window object, callbacks, variable control, localStorage, and many other functionalities that I had not yet put into practice.',
          'The application has access to the browser’s geolocation after consulting the user. You can also search for locations on request, and it will save all of them in the browser’s local storage to keep them available. Additionally, we can delete several or all of the elements from that list using the corresponding button.',
          'We will be able to see the current weather of the chosen location with some detailed data, as well as a summary of the upcoming forecasts in 3-hour intervals.',
          'To read the information, we can switch between Fahrenheit and Celsius formats, and the website will choose between English and Spanish depending on the default language of the browser.'
        ],
        urls: {
          site: 'https://weathernow.brunodiaz.es/',
          github: 'https://github.com/bdiaz-dev/weatherApp-javaScript-vanilla'
        },
        img: captures.weatherNow,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript
        ]
      },

      {
        title: 'Block Survivor',
        text: 'An arcade-style 80s game for Android created using Godot.',
        description: [
          'This is my most ambitious project to date in terms of indie game development.',
          'It is an Arcade-style game with aesthetics inspired by the 80s, where the player must overcome a series of levels filled with obstacles, using only their skill to maneuver the ship from side to side to pass through blocks that hinder the journey.',
          'This project has offered me a laborious, inspiring, and exciting development process, as well as challenging. It was the reason I decided to enter programming professionally because I was passionate about coding the behavior of everything.',
          'It features a variety of functionalities, such as management of player data saved in the cloud, missions that are updated in real-time during the game, a shop for ship skins, and extra game modes that leverage the original levels by changing the rules. I invite you to try a game; it’s very addictive!',
          'There are many aspects of this project that were difficult to program, but I am especially proud of the main menu. I developed this menu completely from scratch without using the preset tools of the engine because I wanted something very specific with certain behaviors. Every functionality, button behavior, page navigation, and selection of game modes and/or skins was programmed directly with logic, which significantly improved my skills in this field.'
        ],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.blocksurvivor',
          github: null
        },
        img: captures.blockSurvivor,
        tech: [
          technologies.godot,
          technologies.playconsole
        ]
      },
      {
        title: 'Amigos de Palabras',
        text: 'Mini-app for real-life word guessing games, designed for Android and developed with Godot.',
        description: ['Mini-app for real-life word guessing games, designed for Android and developed with Godot.'],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.amigospalabras',
          github: null
        },
        img: captures.amigosPalabras,
        tech: [
          technologies.godot,
          technologies.playconsole
        ]
      }
    ]
  },
  skills: {
    title: 'Skills'
  },
  footer: [
    'This portfolio has been developed with React on Vite.',
    'You can access its repository by clicking ',
    'here.',
    'If you have a project in mind, feel free to ', 'contact me.'
  ],
  menu: {
    about: 'About me',
    projects: 'Projects',
    skills: 'Skills',
    repo: 'GitHub repository',
    go: 'Visit project'
  }
}

export const content = {
  es,
  en
}
