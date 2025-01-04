"use client";
import { driver } from "driver.js";
import { FcTodoList } from "react-icons/fc";
import "driver.js/dist/driver.css";
import { Button } from "@/components/ui/button"

export function StartTourButton() {
  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
    steps: [
      {
        element: "#nombre",
        popover: { title: "Mi nombre", description: "Creador de esta pagina, la cual está dirigida a reclutadores y personas que tengan interes en colaboraciones profesionales." },
      },
      {
        element: "#carrera",
        popover: { title: "Carrera", description: "Estudios que tengo actualmente." },
      },
      {
        element: "#herramientas",
        popover: { title: "Lenguajes, Tecnologías y Metodologías Usadas", description: "En este apartado Se mencionan los lenguajes de programacion, tecnologias y las metodologias usadas por mi persona en diferentes proyectos ya sean de desarrollo movile o de desarrollo web." },
      },
      
      {
        element: "#proyectos",
        popover: { title: "Proyectos desarrollados", description: "En esta seccion se muestran tres de los proyectos desarrollados durente el transcurso de mi carrera universitaria" },
      },
      {
        element: "#contacto",
        popover: { title: "Forma de contacto", description: "Es una sección diseñada para que puedas comunicarte fácilmente con nosotros. Aquí encontrarás accesos directos como números de teléfono, correos electrónicos, o botones para enviarnos un mensaje rápido. Todo está pensado para facilitar tu experiencia y resolver tus dudas de manera inmediata." },
      },
    ],
    });

    driverObj.drive();
  };

  return (
    <Button onClick={startTour} className="p-2 rounded-full border dark:border-gray-600 border-gray-300 
            bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-700 fixed  
            bottom-2 right-2 z-50">
      <FcTodoList />
    </Button>
  );
}
