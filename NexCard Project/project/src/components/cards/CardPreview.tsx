import React from 'react';
import { Mail, Phone, Globe, MapPin, Smartphone } from 'lucide-react';
import { ProfileData, CardTheme } from '../../types';

interface CardPreviewProps {
  profileData: Partial<ProfileData>;
  theme: CardTheme;
}

const CardPreview: React.FC<CardPreviewProps> = ({ profileData, theme }) => {
  // Function to get theme-specific styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'classic':
        return {
          card: 'bg-white border-gray-200',
          header: 'bg-gray-100 text-gray-900',
          name: 'text-gray-900',
          title: 'text-gray-600',
          company: 'text-primary-700 font-semibold',
          icon: 'text-gray-500',
        };
      case 'modern':
        return {
          card: 'bg-white border-gray-200',
          header: 'bg-primary-600 text-white',
          name: 'text-white',
          title: 'text-primary-100',
          company: 'text-white font-semibold',
          icon: 'text-primary-500',
        };
      case 'minimal':
        return {
          card: 'bg-white border-gray-100',
          header: 'bg-white text-gray-900',
          name: 'text-gray-900',
          title: 'text-gray-500',
          company: 'text-gray-800 font-medium',
          icon: 'text-gray-400',
        };
      case 'bold':
        return {
          card: 'bg-gray-900 border-gray-800 text-white',
          header: 'bg-accent-600 text-white',
          name: 'text-white',
          title: 'text-gray-300',
          company: 'text-accent-400 font-semibold',
          icon: 'text-accent-500',
        };
      case 'elegant':
        return {
          card: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200',
          header: 'bg-gradient-to-r from-secondary-800 to-primary-800 text-white',
          name: 'text-white',
          title: 'text-gray-200',
          company: 'text-white font-medium',
          icon: 'text-secondary-500',
        };
      default:
        return {
          card: 'bg-white border-gray-200',
          header: 'bg-gray-100 text-gray-900',
          name: 'text-gray-900',
          title: 'text-gray-600',
          company: 'text-primary-700 font-semibold',
          icon: 'text-gray-500',
        };
    }
  };

  const styles = getThemeStyles();

  // Placeholder image for the avatar
  const avatarPlaceholder = 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100';

  // Handle empty profile data for preview
  const fullName = profileData.fullName || 'Your Name';
  const title = profileData.title || 'Your Title';
  const company = profileData.company || 'Your Company';
  const email = profileData.email || 'email@example.com';
  const phone = profileData.phone || '+1 (555) 123-4567';
  const website = profileData.website || 'website.com';
  const address = profileData.address || '123 Business St, City';

  return (
    <div className={`w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-md border ${styles.card} transition-all duration-300`}>
      {/* Header section */}
      <div className={`px-6 py-4 ${styles.header}`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-white p-1">
              <img
                src={profileData.photo || avatarPlaceholder}
                alt="Profile"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="ml-4">
            <h2 className={`text-xl font-bold ${styles.name}`}>{fullName}</h2>
            <p className={`${styles.title}`}>{title}</p>
            <p className={`text-sm ${styles.company}`}>{company}</p>
          </div>
        </div>
      </div>

      {/* Contact information */}
      <div className="px-6 py-4 space-y-3">
        <div className="flex items-center">
          <Mail className={`h-5 w-5 ${styles.icon}`} />
          <span className="ml-3 text-sm">{email}</span>
        </div>
        <div className="flex items-center">
          <Phone className={`h-5 w-5 ${styles.icon}`} />
          <span className="ml-3 text-sm">{phone}</span>
        </div>
        {website && (
          <div className="flex items-center">
            <Globe className={`h-5 w-5 ${styles.icon}`} />
            <span className="ml-3 text-sm">{website}</span>
          </div>
        )}
        {address && (
          <div className="flex items-center">
            <MapPin className={`h-5 w-5 ${styles.icon}`} />
            <span className="ml-3 text-sm">{address}</span>
          </div>
        )}
      </div>

      {/* QR Code placeholder */}
      <div className="px-6 pb-4 flex justify-center">
        <div className="h-32 w-32 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
          QR Code will appear here
        </div>
      </div>

      {/* Card footer */}
      <div className={`px-6 py-2 ${theme === 'bold' ? 'bg-gray-800' : 'bg-gray-50'} flex justify-between items-center`}>
        <span className="text-xs text-gray-500">Scan to connect</span>
        <Smartphone className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default CardPreview;