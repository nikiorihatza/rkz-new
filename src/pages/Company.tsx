import React from 'react';
import { motion } from 'framer-motion';
import { TeamSection } from '../components/Team';
import { TEAM_CONFIG, TEAM_MEMBERS } from '../components/Team/config';
import { MapPin, Calendar, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export const Company: React.FC = () => {
  return (
      <div>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-white dark:bg-dark-950 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent">
                RKZ Metall Design GmbH
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            id="standorte"
            className="bg-gray-100 dark:bg-dark-900 py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
                Standorte
              </h2>
              <p className="text-lg text-gray-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Besuchen Sie uns an einem unserer Standorte oder vereinbaren Sie einen Termin für eine persönliche Beratung.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-primary-900/30 p-8 hover:shadow-xl hover:border-primary-400 dark:hover:shadow-neon transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-primary-300">
                    Aktueller Standort
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-dark-900/50 p-4 rounded-lg border border-gray-200 dark:border-dark-700 group-hover:border-primary-200 dark:group-hover:border-primary-800/30 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-secondary-200 mb-2">
                      RKZ Metall Design GmbH - St. Georgen
                    </h3>
                    <address className="not-italic text-gray-600 dark:text-secondary-300 mb-4">
                      St. Georgener Hauptstrasse 105<br />
                      3151 St. Georgen<br />
                      Österreich
                    </address>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start group/item hover:bg-gray-200 dark:hover:bg-dark-700/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-dark-600">
                        <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-secondary-300 mb-1">Telefon</h4>
                          <a href="tel:+43677617699 51" className="text-gray-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                            +43 677 617 699 51
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start group/item hover:bg-gray-200 dark:hover:bg-dark-700/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-dark-600">
                        <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-secondary-300 mb-1">E-Mail</h4>
                          <a href="mailto:office@rkz-design.gmbh" className="text-gray-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                            office@rkz-design.gmbh
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start group/item hover:bg-gray-200 dark:hover:bg-dark-700/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-dark-600">
                        <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-secondary-300 mb-1">Öffnungszeiten</h4>
                          <p className="text-gray-600 dark:text-secondary-400">
                            Mo - Fr: 8:00 - 17:00 Uhr
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-dark-700 group-hover:border-primary-200 dark:group-hover:border-primary-800/30 transition-all duration-300">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.7758533444384!2d15.6167!3d48.2025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4772a97b95bfffff%3A0x3c5c2c0c3c3c3c3c!2sSt.%20Georgener%20Hauptstra%C3%9Fe%20105%2C%203151%20St.%20Georgen!5e0!3m2!1sde!2sat!4v1620000000000!5m2!1sde!2sat"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Standort St. Georgen"
                        className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </motion.div>

              <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-primary-900/30 p-8 hover:shadow-xl hover:border-primary-400 dark:hover:shadow-neon transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden">
                  <div className="absolute top-[8px] right-[-55px] bg-accent-500 text-white py-1 px-0 w-[170px] text-center transform rotate-45 shadow-md z-10 font-bold text-lg">
                    Neu!
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-primary-300">
                    Wir siedeln um!
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-accent-50 dark:bg-accent-900/20 p-4 rounded-lg border border-accent-200 dark:border-accent-800/30 group-hover:border-accent-300 dark:group-hover:border-accent-700/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <ArrowRight className="w-5 h-5 text-accent-600 dark:text-accent-400 mr-2" />
                      <h3 className="text-lg font-semibold text-accent-700 dark:text-accent-300">
                        Ab 01.07.2025 in Prinzersdorf!
                      </h3>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-secondary-200 mb-2">
                      RKZ Metall Design GmbH - Prinzersdorf
                    </h3>
                    <address className="not-italic text-gray-600 dark:text-secondary-300 mb-4">
                      Wachaustraße 45<br />
                      3385 Prinzersdorf<br />
                      Österreich
                    </address>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start group/item hover:bg-gray-200 dark:hover:bg-dark-700/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-dark-600">
                        <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-secondary-300 mb-1">Telefon</h4>
                          <p className="text-gray-600 dark:text-secondary-400">
                            Bleibt unverändert
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start group/item hover:bg-gray-200 dark:hover:bg-dark-700/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-dark-600">
                        <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-secondary-300 mb-1">E-Mail</h4>
                          <p className="text-gray-600 dark:text-secondary-400">
                            Bleibt unverändert
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-dark-700 group-hover:border-primary-200 dark:group-hover:border-primary-800/30 transition-all duration-300">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.7758533444384!2d15.3167!3d48.2025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4772a97b95bfffff%3A0x3c5c2c0c3c3c3c3c!2sHauptstra%C3%9Fe%2042%2C%203385%20Prinzersdorf!5e0!3m2!1sde!2sat!4v1620000000000!5m2!1sde!2sat"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Neuer Standort Prinzersdorf"
                        className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
        >
          <TeamSection
              title={TEAM_CONFIG.title}
              subtitle={TEAM_CONFIG.subtitle}
              members={TEAM_MEMBERS}
          />
        </motion.div>
      </div>
  );
};