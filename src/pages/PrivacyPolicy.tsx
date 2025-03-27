import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-primary-900/30 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-6">
                    Datenschutzerklärung
                </h1>

                <div className="prose prose-lg max-w-none text-gray-600 dark:text-secondary-300">
                    <p className="mb-4">
                        Stand: 01.01.2025
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        1. Datenschutz auf einen Blick
                    </h2>
                    <p className="mb-4">
                        Die RKZ Metall Design GmbH nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        2. Allgemeine Hinweise und Pflichtinformationen
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                        Verantwortliche Stelle
                    </h3>
                    <p className="mb-4">
                        RKZ Metall Design GmbH<br />
                        St. Georgener Hauptstrasse 105<br />
                        3151 St. Georgen<br />
                        Österreich<br /><br />
                        Telefon: +43 677 617 699 51<br />
                        E-Mail: office@rkz-design.gmbh
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        3. Datenerfassung auf unserer Website
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                        Cookies
                    </h3>
                    <p className="mb-4">
                        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                        Server-Log-Dateien
                    </h3>
                    <p className="mb-4">
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li>Browsertyp und Browserversion</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        4. Analyse-Tools und Werbung
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                        Google Analytics
                    </h3>
                    <p className="mb-4">
                        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        5. Newsletter
                    </h2>
                    <p className="mb-4">
                        Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        6. Plugins und Tools
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                        Google Maps
                    </h3>
                    <p className="mb-4">
                        Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
                        7. Ihre Rechte
                    </h2>
                    <p className="mb-4">
                        Sie haben jederzeit das Recht:
                    </p>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                        <li>Die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                        <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                        <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
                        <li>Der Datenverarbeitung zu widersprechen</li>
                        <li>Die Datenübertragbarkeit zu verlangen</li>
                    </ul>

                    <p className="mt-8 text-sm text-gray-500 dark:text-secondary-500">
                        Diese Datenschutzerklärung wurde erstellt unter Berücksichtigung der DSGVO und des österreichischen Datenschutzgesetzes (DSG).
                    </p>
                </div>
            </motion.div>
        </div>
    );
};