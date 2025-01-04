import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Image from "next/image"
import { SocialLink } from "@/components/ui/social-link"
import ThemeToggle from "@/components/ui/theme";
import TechListWithTooltips from "@/components/ui/lista"
import {StartTourButton} from "@/components/ui/manual"


export default function PortfolioPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <h1 id="nombre" className=" text-4xl font-bold text-gray-900 dark:text-white">Darwin Silva Gadea</h1>
          <p id="carrera" className=" text-xl text-gray-600 dark:text-gray-400 mt-2">Ingeniero en Sistemas de informacion</p>
          <ThemeToggle />
          <StartTourButton />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <Card className="overflow-hidden border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <Image
                    src="/imagen.jpeg"
                    alt="Foto de perfil"
                    width={300}
                    height={300}
                    className="rounded-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Perfil Profesional</h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Ingeniero en Sistemas recién graduado con sólidos conocimientos en desarrollo web y desarrollo móvil.
                    Mi enfoque se centra en la creación de soluciones tecnológicas eficientes y escalables.
                    Busco oportunidades para aplicar mis habilidades técnicas y analíticas en proyectos desafiantes
                    que impulsen la innovación y el crecimiento empresarial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <TechListWithTooltips />
        </section>

        <section className="mb-20">
          <h2 id="proyectos" className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Proyectos Destacados</h2>
          <div className="space-y-12">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/practica.png"
                      alt="Vista previa de Sinpe-TP Pasajero"
                      width={800}
                      height={450}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-4 flex items-end">
                      <p className="text-white text-sm">Vista previa de la aplicación</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sinpe-TP Pasajero</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        En esta aplicación, mi práctica abarcó tanto el desarrollo de las interfaces (vistas) que se presentan a los usuarios como la implementación de funcionalidades internas que garantizan el correcto funcionamiento de la aplicación. Esto incluyó la creación de diseños intuitivos y accesibles para mejorar la experiencia del usuario, así como la programación de la lógica necesaria para que las diferentes secciones de la aplicación operen de manera eficiente y coherente. Mi contribución combinó aspectos visuales y técnicos, asegurando una integración armoniosa entre el diseño y el rendimiento del sistema.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">Dart</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">Flutter</span>
                      </div>
                    </div>
                    <a
                        href="https://www.canva.com/design/DAGV0DB3CEo/iMrYWz06s77MCKu2hi0bDQ/edit?utm_content=DAGV0DB3CEo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                    <Button variant="outline" className="group w-fit">
                      Ver detalles
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/wiki.png"
                      alt="Vista previa WIKI Mapa interactivo de la revolución digital"
                      width={800}
                      height={450}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-4 flex items-end">
                      <p className="text-white text-sm">Mapa interactivo de la revolución digital</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Globalización y Economía Digital</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Un mapa interactivo diseñado para explorar y analizar cómo la tecnología está transformando nuestra comprensión de la economía global y el panorama de los negocios digitales. Esta herramienta combina datos visuales y funcionalidad dinámica para ilustrar las conexiones, tendencias y cambios impulsados por la innovación tecnológica, ofreciendo una perspectiva clara y actualizada sobre los desafíos y oportunidades en el ámbito económico y empresarial.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">React</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">Tailwind CSS</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">Next.js</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">Dark Mode</span>
                      </div>
                    </div>
                    <a
                        href="https://wiki-nine-nu.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                    <Button variant="outline" className="group w-fit">
                      Explorar Proyecto
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/save_food.png"
                      alt="Vista previa de SaveFood"
                      width={800}
                      height={450}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-4 flex items-end">
                      <p className="text-white text-sm">Vista previa de la plataforma</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">SaveFood</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Se diseñó el proyecto FrontEnd SaveFood como parte de una iniciativa de desarrollo social en el marco de un curso universitario. Este proyecto fue concebido con el propósito de abordar problemáticas relacionadas con el desperdicio de alimentos, promoviendo soluciones innovadoras que contribuyan a una gestión más sostenible de los recursos y al bienestar de las comunidades.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Explicacion para obtener credenciales de administrador:
                          <br />
                          <br />
                          Ingresar un nombre de usuario, ingrese la contraeña de su elección, sin seleccionar un tipo de usuario y en el apartado de codigo del administrador ingresar los siguientes datos: Administrador12345
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">Next.js</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">React</span>
                      </div>
                    </div>
                    <a
                        href="https://save-food-gamma.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                    <Button variant="outline" className="group w-fit">
                      Ver detalles
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacto">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Estoy interesado en oportunidades que me permitan crecer profesionalmente y contribuir al éxito de proyectos innovadores.
                No dude en contactarme para discutir posibles colaboraciones.
              </p>
              <div className="flex flex-wrap gap-4">
                <SocialLink url="mailto:dsilvagadea@gmail.com" />
                <SocialLink url="https://www.linkedin.com/in/darwin-silva-52605024b" />
                <SocialLink url="https://github.com/Infil505" />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Darwin Silva Gadea. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}