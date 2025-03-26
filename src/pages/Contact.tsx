import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Briefcase, Award, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-12 lg:py-20">
        <motion.div
            ref={ref}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
            <h1 className="text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
              Kontaktieren Sie uns
            </h1>
            <p className="text-lg text-gray-600 dark:text-secondary-300">
              Unser Expertenteam steht Ihnen für alle Fragen rund um Hochwasserschutz zur Verfügung.
            </p>
          </motion.div>

          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Roland Kern Card */}
              <ContactCard
                  name="Roland Kern"
                  title="Geschäftsführer"
                  phone="+43 664 592 72 31"
                  email="r.kern@rkz-design.gmbh"
                  image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  expertise={[
                    { icon: Briefcase, text: "Strategische Leitung" },
                    { icon: Award, text: "20+ Jahre Erfahrung" },
                    { icon: Users, text: "Partnerschaften" },
                  ]}
              />

              {/* Tobias Zahorsky Card */}
              <ContactCard
                  name="Tobias Zahorsky"
                  title="Verkaufsleiter"
                  phone="+43 677 617 699 51"
                  email="office@rkz-design.gmbh"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  expertise={[
                    { icon: Briefcase, text: "Vertriebsleitung" },
                    { icon: Award, text: "Technische Beratung" },
                    { icon: Users, text: "Kundenbetreuung" },
                    { icon: Calendar, text: "Projektplanung" }
                  ]}
              />
            </motion.div>

            {/* Quick Contact Box */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-primary-900/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-primary-300 mb-6">
                Schnellkontakt
              </h2>
              <div className="space-y-6">
                <QuickContactItem
                    icon={<Phone className="w-5 h-5" />}
                    title="Telefon"
                    value="+43 677 617 699 51"
                    link="tel:+43677617699 51"
                />
                <QuickContactItem
                    icon={<Mail className="w-5 h-5" />}
                    title="E-Mail"
                    value="office@rkz-design.gmbh"
                    link="mailto:office@rkz-design.gmbh"
                />
                <QuickContactItem
                    icon={<Clock className="w-5 h-5" />}
                    title="Öffnungszeiten"
                    value="Mo - Fr: 8:00 - 17:00 Uhr"
                />
                <QuickContactItem
                    icon={<MapPin className="w-5 h-5" />}
                    title="Adresse"
                    value="St. Georgener Hauptstrasse 105, 3151 St. Georgen"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
              variants={itemVariants}
              className="bg-primary-500 dark:bg-primary-900/50 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgydi00aC0ydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Kostenlose Erstberatung
              </h2>
              <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
                Vereinbaren Sie jetzt einen Termin für eine unverbindliche Beratung zu Ihrem individuellen Hochwasserschutz.
              </p>
              <a
                  href="tel:+43677617699 51"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300 group"
              >
                Jetzt anrufen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
  );
};

interface ExpertiseItem {
  icon: React.FC<{ className?: string }>;
  text: string;
}

const ContactCard: React.FC<{
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  expertise: ExpertiseItem[];
}> = ({ name, title, phone, email, image, expertise }) => (
    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg dark:shadow-none border border-gray-100 dark:border-primary-900/30 hover:shadow-xl dark:hover:shadow-neon transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-300 dark:border-primary-400">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-primary-300">{name}</h3>
          <p className="text-lg text-primary-600 dark:text-primary-400">{title}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {expertise.map((item, index) => (
            <div
                key={index}
                className="flex items-center p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/30"
            >
              <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
              <span className="text-sm text-primary-700 dark:text-primary-300">{item.text}</span>
            </div>
        ))}
      </div>

      <div className="space-y-4">
        <a
            href={`tel:${phone}`}
            className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-dark-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-300"
        >
          <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
          <span className="text-gray-700 dark:text-secondary-300">{phone}</span>
        </a>
        <a
            href={`mailto:${email}`}
            className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-dark-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-300"
        >
          <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
          <span className="text-gray-700 dark:text-secondary-300">{email}</span>
        </a>
      </div>
    </div>
);

const QuickContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}> = ({ icon, title, value, link }) => {
  const content = (
      <div className="flex items-start">
        <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-secondary-400">{title}</p>
          <p className="text-gray-900 dark:text-secondary-200">{value}</p>
        </div>
      </div>
  );

  return link ? (
      <a
          href={link}
          className="block hover:bg-gray-50 dark:hover:bg-dark-700/50 rounded-lg p-2 -mx-2 transition-colors duration-300"
      >
        {content}
      </a>
  ) : (
      <div className="p-2 -mx-2">{content}</div>
  );
};

export default Contact;