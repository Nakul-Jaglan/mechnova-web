"use client"
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React from 'react'

function TermsPage() {
  return (
    <>
        <header>
            <Header/>
        </header>

        <main className="min-h-screen bg-gradient-to-br from-[#e6f2fb57] to-[#cbe7ff80] py-12">
            <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            Bienvenido a Mechnova Machines. Estos términos y condiciones describen las reglas y regulaciones 
                            para el uso de nuestro sitio web, ubicado en mechnovamachines.com.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Aceptación de los Términos</h2>
                        <p className="text-gray-700 mb-4">
                            Al acceder y usar este sitio web, usted acepta estar sujeto a estos términos y condiciones. 
                            Si no está de acuerdo con alguno de estos términos, no debe usar nuestro sitio web.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Uso del Sitio Web</h2>
                        <p className="text-gray-700 mb-4">El sitio web está destinado para:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Proporcionar información sobre productos y servicios de Mechnova Machines</li>
                            <li>Facilitar consultas y comunicación con nuestro equipo</li>
                            <li>Mostrar catálogos de productos y especificaciones técnicas</li>
                            <li>Conectar con distribuidores y representantes locales</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Restricciones de Uso</h2>
                        <p className="text-gray-700 mb-4">Usted se compromete a no:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Usar el sitio web para fines ilegales o no autorizados</li>
                            <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
                            <li>Interferir con el funcionamiento normal del sitio web</li>
                            <li>Copiar, reproducir o distribuir contenido sin autorización</li>
                            <li>Usar robots, spiders o herramientas automatizadas sin permiso</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Propiedad Intelectual</h2>
                        <p className="text-gray-700 mb-4">
                            Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos, marcas comerciales, 
                            especificaciones técnicas y diseño, es propiedad de Mechnova Machines y está protegido por 
                            leyes de propiedad intelectual.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Información de Productos</h2>
                        <p className="text-gray-700 mb-4">
                            Nos esforzamos por proporcionar información precisa sobre nuestros productos, incluyendo:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Especificaciones técnicas y características</li>
                            <li>Imágenes y descripciones de productos</li>
                            <li>Información de garantía y servicio</li>
                            <li>Disponibilidad y precios (sujetos a cambios)</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Sin embargo, no garantizamos que toda la información sea completamente precisa o actualizada. 
                            Recomendamos contactar directamente para confirmación de especificaciones y disponibilidad.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Garantías de Productos</h2>
                        <p className="text-gray-700 mb-4">
                            Nuestros productos vienen con garantías específicas según se indica en las especificaciones 
                            de cada producto. Las garantías están sujetas a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Uso adecuado según las instrucciones del fabricante</li>
                            <li>Mantenimiento regular y apropiado</li>
                            <li>Uso de repuestos y accesorios originales</li>
                            <li>Términos y condiciones específicos de cada producto</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitación de Responsabilidad</h2>
                        <p className="text-gray-700 mb-4">
                            Mechnova Machines no será responsable por daños directos, indirectos, incidentales o 
                            consecuenciales que puedan resultar del uso de nuestro sitio web o productos, incluyendo 
                            pero no limitado a:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Pérdida de datos o información</li>
                            <li>Interrupción del negocio</li>
                            <li>Daños por uso inadecuado de productos</li>
                            <li>Problemas técnicos del sitio web</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Privacidad y Datos</h2>
                        <p className="text-gray-700 mb-4">
                            El uso de su información personal se rige por nuestra 
                            <a href="/privacy" className="text-blue-600 underline">Política de Privacidad</a>. 
                            Al usar nuestro sitio web, usted acepta la recopilación y uso de su información según se describe en dicha política.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Enlaces a Terceros</h2>
                        <p className="text-gray-700 mb-4">
                            Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables 
                            por el contenido, políticas de privacidad o prácticas de estos sitios externos.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Modificaciones</h2>
                        <p className="text-gray-700 mb-4">
                            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                            Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Ley Aplicable</h2>
                        <p className="text-gray-700 mb-4">
                            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes aplicables, 
                            y cualquier disputa estará sujeta a la jurisdicción de los tribunales competentes.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contacto</h2>
                        <p className="text-gray-700 mb-4">
                            Si tiene preguntas sobre estos términos y condiciones, puede contactarnos:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Correo electrónico: info@mechnovamachines.com</li>
                            <li>Teléfono: +91 96670 43734</li>
                            <li>Sitio web: mechnovamachines.com</li>
                        </ul>

                        <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
                            Última actualización: Julio 2025
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default TermsPage