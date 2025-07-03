import React, { useState } from 'react';
import { Palette, Image, Check, X } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { BusinessCard, CardTheme, ProfileData } from '../../types';
import CardPreview from './CardPreview';

interface CardCreatorProps {
  onSave: (card: Partial<BusinessCard>) => void;
  initialData?: Partial<BusinessCard>;
}

const CardCreator: React.FC<CardCreatorProps> = ({ onSave, initialData }) => {
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState<CardTheme>(initialData?.theme || 'classic');
  const [title, setTitle] = useState(initialData?.title || 'My Business Card');
  const [profileData, setProfileData] = useState<Partial<ProfileData>>(
    initialData?.profileData || {
      fullName: '',
      title: '',
      company: '',
      email: '',
      phone: '',
    }
  );

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSave = () => {
    onSave({
      title,
      theme,
      profileData: profileData as ProfileData,
    });
  };

  const themes: { id: CardTheme; name: string; description: string }[] = [
    {
      id: 'classic',
      name: 'Classic',
      description: 'Traditional, professional design with elegant typography',
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean, minimalist design with bold accents',
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple, focused layout with essential information only',
    },
    {
      id: 'bold',
      name: 'Bold',
      description: 'Strong colors and typography for maximum impact',
    },
    {
      id: 'elegant',
      name: 'Elegant',
      description: 'Sophisticated design with premium styling',
    },
  ];

  const isFirstStepValid = title.trim() !== '';
  const isSecondStepValid = theme !== '';
  const isThirdStepValid =
    profileData.fullName &&
    profileData.title &&
    profileData.company &&
    profileData.email &&
    profileData.phone;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Create Your Digital Business Card</CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-medium">Basic Information</h3>
                <p className="text-gray-600">
                  Let's start with the basics for your digital business card.
                </p>

                <Input
                  label="Card Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="My Business Card"
                  helperText="This is for your reference only and won't be displayed on the card"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-medium">Select a Theme</h3>
                <p className="text-gray-600">
                  Choose a theme that represents your brand and style.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {themes.map((t) => (
                    <div
                      key={t.id}
                      className={`
                        p-4 rounded-lg border-2 cursor-pointer transition-all
                        ${
                          theme === t.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                      onClick={() => setTheme(t.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{t.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{t.description}</p>
                        </div>
                        {theme === t.id && (
                          <Check className="h-5 w-5 text-primary-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-lg font-medium">Professional Information</h3>
                <p className="text-gray-600">
                  Add your professional details to be displayed on your card.
                </p>

                <div className="space-y-4">
                  <Input
                    label="Full Name *"
                    name="fullName"
                    value={profileData.fullName || ''}
                    onChange={handleProfileChange}
                    placeholder="John Doe"
                    required
                  />

                  <Input
                    label="Job Title *"
                    name="title"
                    value={profileData.title || ''}
                    onChange={handleProfileChange}
                    placeholder="Marketing Director"
                    required
                  />

                  <Input
                    label="Company *"
                    name="company"
                    value={profileData.company || ''}
                    onChange={handleProfileChange}
                    placeholder="Acme Inc."
                    required
                  />

                  <Input
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={profileData.email || ''}
                    onChange={handleProfileChange}
                    placeholder="john@example.com"
                    required
                  />

                  <Input
                    label="Phone Number *"
                    name="phone"
                    value={profileData.phone || ''}
                    onChange={handleProfileChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />

                  <Input
                    label="Website"
                    name="website"
                    value={profileData.website || ''}
                    onChange={handleProfileChange}
                    placeholder="https://example.com"
                  />

                  <Input
                    label="Address"
                    name="address"
                    value={profileData.address || ''}
                    onChange={handleProfileChange}
                    placeholder="123 Business St, City, State, ZIP"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-lg font-medium">Review & Finalize</h3>
                <p className="text-gray-600">
                  Review your digital business card before saving.
                </p>

                <div className="mt-4 space-y-4">
                  <h4 className="font-medium">Basic Information</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-600">Card Title:</div>
                    <div>{title}</div>
                    <div className="text-gray-600">Theme:</div>
                    <div>{themes.find(t => t.id === theme)?.name}</div>
                  </div>

                  <h4 className="font-medium pt-2">Professional Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-600">Full Name:</div>
                    <div>{profileData.fullName}</div>
                    <div className="text-gray-600">Job Title:</div>
                    <div>{profileData.title}</div>
                    <div className="text-gray-600">Company:</div>
                    <div>{profileData.company}</div>
                    <div className="text-gray-600">Email:</div>
                    <div>{profileData.email}</div>
                    <div className="text-gray-600">Phone:</div>
                    <div>{profileData.phone}</div>
                    {profileData.website && (
                      <>
                        <div className="text-gray-600">Website:</div>
                        <div>{profileData.website}</div>
                      </>
                    )}
                    {profileData.address && (
                      <>
                        <div className="text-gray-600">Address:</div>
                        <div>{profileData.address}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {step < 4 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !isFirstStepValid) ||
                  (step === 2 && !isSecondStepValid) ||
                  (step === 3 && !isThirdStepValid)
                }
              >
                Continue
              </Button>
            ) : (
              <Button onClick={handleSave}>Save Card</Button>
            )}
          </CardFooter>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <div className="sticky top-6">
          <h3 className="text-lg font-medium mb-4">Preview</h3>
          <CardPreview 
            profileData={profileData as ProfileData} 
            theme={theme} 
          />
          
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-medium mb-2">Current Step</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step > 1 ? <Check size={14} /> : '1'}
                </div>
                <span className="ml-2 text-sm">Basic Information</span>
              </li>
              <li className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step > 2 ? <Check size={14} /> : '2'}
                </div>
                <span className="ml-2 text-sm">Select Theme</span>
              </li>
              <li className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step > 3 ? <Check size={14} /> : '3'}
                </div>
                <span className="ml-2 text-sm">Professional Information</span>
              </li>
              <li className="flex items-center">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  4
                </div>
                <span className="ml-2 text-sm">Review & Finalize</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCreator;