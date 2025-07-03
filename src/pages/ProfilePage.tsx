import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Profile data state
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    company: 'Acme Inc.',
    title: 'Marketing Director',
    website: 'www.example.com',
    address: '123 Business Ave, San Francisco, CA',
    bio: 'Experienced marketing professional with a passion for digital strategy and brand development.',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // In a real app, you would make an API call to update the profile
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsEditing(false);
      
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your personal information
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          {!isEditing ? (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-3xl">
                  {profileData.name.charAt(0)}
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                  <p className="text-gray-600">{profileData.title} at {profileData.company}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex">
                    <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-gray-900">{profileData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-gray-900">{profileData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Globe className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Website</p>
                      <p className="text-gray-900">{profileData.website}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex">
                    <Briefcase className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Company</p>
                      <p className="text-gray-900">{profileData.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <User className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Job Title</p>
                      <p className="text-gray-900">{profileData.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Address</p>
                      <p className="text-gray-900">{profileData.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bio</p>
                    <p className="mt-1 text-gray-900">{profileData.bio}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex">
                  <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Member Since</p>
                    <p className="text-gray-900">{new Date(user?.createdAt || Date.now()).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-3xl">
                  {profileData.name.charAt(0)}
                </div>
                <div className="ml-6">
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <Input
                  label="Full Name"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  leftIcon={<User size={18} />}
                />
                
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  leftIcon={<Mail size={18} />}
                />
                
                <Input
                  label="Phone Number"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  leftIcon={<Phone size={18} />}
                />
                
                <Input
                  label="Website"
                  name="website"
                  value={profileData.website}
                  onChange={handleInputChange}
                  leftIcon={<Globe size={18} />}
                />
                
                <Input
                  label="Company"
                  name="company"
                  value={profileData.company}
                  onChange={handleInputChange}
                  leftIcon={<Briefcase size={18} />}
                />
                
                <Input
                  label="Job Title"
                  name="title"
                  value={profileData.title}
                  onChange={handleInputChange}
                  leftIcon={<User size={18} />}
                />
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <Input
                  label="Address"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  leftIcon={<MapPin size={18} />}
                />
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows={4}
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;