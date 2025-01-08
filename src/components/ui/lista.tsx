"use client";

import React, { useEffect, useMemo, useState } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function TechListWithTooltips() {
  function Tooltip(props: { children: React.ReactNode; text: string }) {
    const { children, text } = props;
    const [visible, setVisible] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setVisible(false)}
        onMouseLeave={() => setVisible(false)}
        onTouchStart={() => setVisible(true)}
        onTouchEnd={() => setVisible(false)}
      >
        {children}
        {visible && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-full max-w-[90vw] px-2 py-1 text-xs text-white bg-black rounded shadow-lg overflow-hidden">
            {text}
          </div>
        )}
      </div>
    );
  }

  const techData = useMemo(() => [  // useMemo se utiliza para evitar que se recalcule el array en cada renderizado
    { name: "JavaScript", info: "Lenguaje de programación orientado a la web. Lo he utilizado tanto en el desarrollo de backend como en la creación de funcionalidades para el frontend." },
    { name: "React", info: "Librería para la construcción de interfaces de usuario. La he empleado en varios proyectos para desarrollar las vistas de aplicaciones web interactivas." },
    { name: "Node.js", info: "Entorno de ejecución para JavaScript en el servidor. Lo he utilizado en proyectos tanto de backend como de frontend." },
    { name: "PHP", info: "Lenguaje de scripting para desarrollo web. Se ha utilizado en el desarrollo de API REST y en la conexión con bases de datos." },
    { name: "SQL MariaDB", info: "Sistema de gestión de bases de datos relacional. Lo he utilizado para crear bases de datos y gestionar grandes volúmenes de información." },
    { name: "SQLite", info: "Base de datos ligera y autocontenida. Se ha empleado en el desarrollo de aplicaciones móviles que requieren una base de datos local." },
    { name: "Git", info: "Sistema de control de versiones. Lo utilizo para gestionar el historial de mis proyectos y para almacenar el código en GitHub." },
    { name: "C++", info: "Lenguaje de programación orientado a objetos. Lo he utilizado principalmente en proyectos universitarios para desarrollar aplicaciones de escritorio." },
    { name: "Metodologías Ágiles (Scrum)", info: "Metodología ágil que he aplicado en equipos de trabajo para mejorar la eficiencia en el desarrollo de proyectos." },
    { name: "Metodologías Ágiles (Kanban)", info: "Método ágil de gestión visual del trabajo, que he utilizado para organizar y priorizar tareas en algunos de mis proyectos." },
    { name: "SQL Server", info: "Sistema de gestión de bases de datos desarrollado por Microsoft. Lo he utilizado en la gestión de bases de datos complejas, incluyendo la creación de procedimientos almacenados y triggers." },
    { name: "Java", info: "Lenguaje de programación orientado a objetos y multiplataforma. Lo he utilizado en diversos proyectos académicos y profesionales." },
    { name: "Flutter", info: "Framework de código abierto desarrollado por Google para la creación de aplicaciones móviles. Lo he utilizado en el desarrollo de diversas aplicaciones móviles." },
    { name: "Dart", info: "Lenguaje de programación de código abierto desarrollado por Google. Lo he usado principalmente en proyectos de desarrollo móvil con Flutter." },
    { name: "Next.js", info: "Framework de JavaScript basado en React para la creación de aplicaciones web y sitios estáticos. Lo he utilizado en proyectos web para mejorar la experiencia de usuario y el rendimiento." },
    { name: "Drive.js", info: "Librería de JavaScript que permite crear tutoriales paso a paso para explicar a los usuarios cómo utilizar una interfaz gráfica o una sección de una página web" },
  ], []);

  useEffect(() => {
    const driverObj = driver({
      popoverClass: "driverjs-theme",
      stagePadding: 0,
    });

    techData.forEach((tech) => {
      const element = document.getElementById(tech.name);
      if (element) {
        element.addEventListener("focus", () => {
          driverObj.highlight({
            element,
            popover: {
              title: tech.name,
              description: tech.info,
            },
          });
        });
      }
    });

    return () => {
      techData.forEach((tech) => {
        const element = document.getElementById(tech.name);
        if (element) {
          element.removeEventListener("focus", () => {});
          element.removeEventListener("blur", () => {});
        }
      });
    };
  }, [techData]);

  return (
    <section id="herramientas" className="mb-20">
      <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
        Lenguajes, Tecnologías y Metodologías Usadas
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techData.map((tech) => (
          <div
            key={tech.name}
            id={tech.name}
            tabIndex={0} // propiedad que permite que el elemento sea enfocable
            className="bg-gray-50 dark:bg-gray-800 border-0 rounded-xl shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 focus:outline-none"
          >
            <Tooltip text={tech.info}>
              <div className="flex items-center justify-center p-4">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {tech.name}
                </span>
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
}
