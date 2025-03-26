import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Imprint: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-primary-900/30 p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-6">
          Impressum
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-secondary-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-6 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          
          <div className="flex items-start mb-6">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
              <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                Firmenanschrift
              </h3>
              <p className="mb-0">
                RKZ Metall Design GmbH<br />
                St. Georgener Hauptstrasse 105<br />
                3151 St. Georgen<br />
                Österreich
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
              <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
                Kontakt
              </h3>
              <p className="mb-1">
                Telefon: <a href="tel:+43677617699 51" className="text-primary-600 dark:text-primary-400 hover:underline">+43 677 617 699 51</a>
              </p>
              <p className="mb-0">
                E-Mail: <a href="mailto:office@rkz-design.gmbh" className="text-primary-600 dark:text-primary-400 hover:underline">office@rkz-design.gmbh</a>
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
              Handelsregister
            </h3>
            <p className="mb-1">
              Firmenbuchnummer: FN 123456a
            </p>
            <p className="mb-1">
              Firmenbuchgericht: Landesgericht St. Pölten
            </p>
            <p className="mb-0">
              UID-Nummer: ATU12345678
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
              Geschäftsführung
            </h3>
            <p className="mb-0">
              Roland Kern
            </p>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 dark:text-secondary-100 mt-8 mb-4">
            Haftungsausschluss
          </h2>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
            Haftung für Inhalte
          </h3>
          <p className="mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
            Haftung für Links
          </h3>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary-200 mb-2">
            Urheberrecht
          </h3>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          
          <p className="mt-8 text-sm text-gray-500 dark:text-secondary-500">
            Stand: 01.01.2025
          </p>
        </div>
      </div>
    </div>
  );
};