"use client"
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import React from 'react'

function PrivacyPage() {
  return (
    <>
        <header>
            <Header/>
        </header>

        <main className="min-h-screen bg-gradient-to-br from-[#e6f2fb57] to-[#cbe7ff80] py-12">
            <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-8">Política de Privacidad</h1>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            En Mechnova Machines, nos comprometemos a proteger su privacidad y datos personales. 
                            Esta política describe cómo recopilamos, usamos y protegemos su información.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Información que Recopilamos</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Información de Ubicación:</strong> Utilizamos su ubicación geográfica para personalizar automáticamente el idioma del sitio web y mostrar contenido relevante para su región.</li>
                            <li><strong>Información de Contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono y dirección física cuando nos contacta a través de formularios.</li>
                            <li><strong>Información de Navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia en el sitio.</li>
                            <li><strong>Cookies:</strong> Pequeños archivos que se almacenan en su dispositivo para mejorar su experiencia de navegación.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cómo Usamos Su Información</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Personalizar su experiencia en el sitio web, incluyendo la selección automática de idioma basada en su ubicación</li>
                            <li>Responder a sus consultas y solicitudes de información sobre productos</li>
                            <li>Mejorar nuestros productos y servicios</li>
                            <li>Cumplir con obligaciones legales y regulatorias</li>
                            <li>Enviar comunicaciones comerciales (solo con su consentimiento)</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Compartir Información</h2>
                        <p className="text-gray-700 mb-4">
                            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Con su consentimiento explícito</li>
                            <li>Para cumplir con obligaciones legales</li>
                            <li>Para proteger nuestros derechos y propiedades</li>
                            <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ubicación Geográfica</h2>
                        <p className="text-gray-700 mb-4">
                            Utilizamos su ubicación geográfica aproximada (obtenida a través de su dirección IP) para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Configurar automáticamente el idioma del sitio web (español o inglés)</li>
                            <li>Mostrar información de productos relevante para su región</li>
                            <li>Proporcionar información de contacto de distribuidores locales</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Esta información se procesa automáticamente y no se almacena de forma permanente. 
                            Puede cambiar manualmente el idioma en cualquier momento usando el selector de idioma.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Seguridad de Datos</h2>
                        <p className="text-gray-700 mb-4">
                            Implementamos medidas de seguridad técnicas y organizacionales para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Sus Derechos</h2>
                        <p className="text-gray-700 mb-4">Usted tiene derecho a:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Acceder a sus datos personales</li>
                            <li>Rectificar información inexacta</li>
                            <li>Solicitar la eliminación de sus datos</li>
                            <li>Oponerse al procesamiento de sus datos</li>
                            <li>Solicitar la portabilidad de sus datos</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
                        <p className="text-gray-700 mb-4">
                            Utilizamos cookies para mejorar su experiencia de navegación. Puede desactivar las cookies en su navegador, 
                            aunque esto puede afectar algunas funcionalidades del sitio.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contacto</h2>
                        <p className="text-gray-700 mb-4">
                            Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, 
                            puede contactarnos a través de:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Correo electrónico: info@mechnovamachines.com</li>
                            <li>Teléfono: +91 96670 43734</li>
                            <li>Dirección: 2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122015</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Actualizaciones</h2>
                        <p className="text-gray-700 mb-4">
                            Esta política de privacidad puede ser actualizada ocasionalmente. 
                            Le notificaremos sobre cambios importantes a través de nuestro sitio web.
                        </p>

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

export default PrivacyPage