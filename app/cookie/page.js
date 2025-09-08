"use client"
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React from 'react'

function CokkiePage() {
  return (
    <>
        <header>
            <Header/>
        </header>

        <main className="min-h-screen bg-gradient-to-br from-[#e6f2fb57] to-[#cbe7ff80] py-12">
            <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-8">Política de Cookies</h1>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            Esta política de cookies explica qué son las cookies, cómo las usamos en el sitio web de 
                            Mechnova Machines y cómo puede controlar su uso.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">¿Qué son las Cookies?</h2>
                        <p className="text-gray-700 mb-4">
                            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, 
                            tablet o móvil) cuando visita nuestro sitio web. Estas cookies permiten que el sitio web 
                            recuerde sus acciones y preferencias durante un período de tiempo.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">¿Cómo Utilizamos las Cookies?</h2>
                        <p className="text-gray-700 mb-4">Utilizamos cookies para:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Recordar sus preferencias de idioma (español/inglés)</li>
                            <li>Mejorar la funcionalidad del sitio web</li>
                            <li>Analizar el tráfico y uso del sitio web</li>
                            <li>Personalizar su experiencia de navegación</li>
                            <li>Recordar sus preferencias de visualización</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tipos de Cookies que Utilizamos</h2>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Cookies Esenciales</h3>
                        <p className="text-gray-700 mb-4">
                            Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Cookies de sesión:</strong> Mantienen su sesión activa durante su visita</li>
                            <li><strong>Cookies de seguridad:</strong> Protegen contra ataques maliciosos</li>
                            <li><strong>Cookies de preferencias:</strong> Recuerdan su selección de idioma</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Cookies Funcionales</h3>
                        <p className="text-gray-700 mb-4">
                            Estas cookies mejoran la funcionalidad del sitio web:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Cookies de personalización:</strong> Recuerdan sus preferencias de visualización</li>
                            <li><strong>Cookies de ubicación:</strong> Ayudan a personalizar contenido según su región</li>
                            <li><strong>Cookies de formularios:</strong> Recuerdan información ingresada en formularios</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Cookies Analíticas</h3>
                        <p className="text-gray-700 mb-4">
                            Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Google Analytics:</strong> Analiza el tráfico del sitio web</li>
                            <li><strong>Cookies de rendimiento:</strong> Miden la velocidad de carga de páginas</li>
                            <li><strong>Cookies de navegación:</strong> Rastrean las páginas visitadas</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Cookies de Marketing</h3>
                        <p className="text-gray-700 mb-4">
                            Estas cookies se utilizan para mostrar contenido relevante:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                            <li><strong>Cookies de seguimiento:</strong> Rastrean su comportamiento de navegación</li>
                            <li><strong>Cookies de personalización:</strong> Muestran contenido relevante</li>
                            <li><strong>Cookies de redes sociales:</strong> Permiten compartir contenido</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies de Terceros</h2>
                        <p className="text-gray-700 mb-4">
                            Algunos servicios externos que utilizamos pueden establecer sus propias cookies:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                            <li><strong>Google Maps:</strong> Para mostrar ubicaciones de distribuidores</li>
                            <li><strong>Redes sociales:</strong> Para botones de compartir y widgets</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Duración de las Cookies</h2>
                        <p className="text-gray-700 mb-4">Las cookies pueden ser:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra su navegador</li>
                            <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo durante un período específico</li>
                            <li><strong>Cookies de preferencias:</strong> Se mantienen hasta que las elimine manualmente</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cómo Controlar las Cookies</h2>
                        <p className="text-gray-700 mb-4">
                            Puede controlar y gestionar las cookies de varias maneras:
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Configuración del Navegador</h3>
                        <p className="text-gray-700 mb-4">
                            Puede configurar su navegador para rechazar cookies o alertarle cuando se envíen cookies:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Google Chrome:</strong> Configuración {'>'}  Privacidad y seguridad {'>'} Cookies</li>
                            <li><strong>Mozilla Firefox:</strong> Opciones {'>'} Privacidad y seguridad {'>'} Cookies</li>
                            <li><strong>Safari:</strong> Preferencias {'>'} Privacidad {'>'} Cookies</li>
                            <li><strong>Microsoft Edge:</strong> Configuración {'>'} Privacidad {'>'} Cookies</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Herramientas de Exclusión</h3>
                        <p className="text-gray-700 mb-4">
                            Puede optar por no recibir cookies de análisis:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 underline" target="_blank">Google Analytics Opt-out</a></li>
                            <li><a href="https://www.youronlinechoices.com/" className="text-blue-600 underline" target="_blank">Your Online Choices</a></li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Consentimiento</h2>
                        <p className="text-gray-700 mb-4">
                            Al continuar usando nuestro sitio web, usted acepta el uso de cookies según se describe en esta política. 
                            Puede retirar su consentimiento en cualquier momento cambiando la configuración de su navegador.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Actualizaciones de esta Política</h2>
                        <p className="text-gray-700 mb-4">
                            Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestro 
                            sitio web o requisitos legales. Le recomendamos que revise esta página periódicamente.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contacto</h2>
                        <p className="text-gray-700 mb-4">
                            Si tiene preguntas sobre nuestra política de cookies, puede contactarnos:
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

export default CokkiePage