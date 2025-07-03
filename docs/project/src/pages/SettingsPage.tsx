import React, { useState } from 'react';
import { User, CreditCard, Bell, Shield, Smartphone, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'account' | 'notifications' | 'appearance' | 'security' | 'billing' | 'devices'>('account');
  
  // Account settings state
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSaveAccountSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // In a real app, you would make an API call to update the user's account
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success notification would go here
      
    } catch (error) {
      console.error('Error updating account:', error);
      // Error notification would go here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'account'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <User className={`mr-3 h-5 w-5 ${activeTab === 'account' ? 'text-primary-600' : 'text-gray-500'}`} />
                  Account
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'notifications'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Bell className={`mr-3 h-5 w-5 ${activeTab === 'notifications' ? 'text-primary-600' : 'text-gray-500'}`} />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('appearance')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'appearance'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Palette className={`mr-3 h-5 w-5 ${activeTab === 'appearance' ? 'text-primary-600' : 'text-gray-500'}`} />
                  Appearance
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'security'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Shield className={`mr-3 h-5 w-5 ${activeTab === 'security' ? 'text-primary-600' : 'text-gray-500'}`} />
                  Security
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'billing'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <CreditCard className={`mr-3 h-5 w-5 ${activeTab === 'billing' ? 'text-primary-600' : 'text-gray-500'}`} />
                  Billing
                </button>
                <button
                  onClick={() => setActiveTab('devices')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'devices'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Smartphone className={`mr-3 h-5 w-5 ${activeTab === 'devices' ? 'text-primary-600' : 'text-gray-500'}`} />
                  Devices
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3">
          {activeTab === 'account' && (
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveAccountSettings} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Photo
                      </label>
                      <div className="flex items-center">
                        <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-xl">
                          {name.charAt(0)}
                        </div>
                        <div className="ml-5">
                          <Button variant="outline" size="sm">
                            Change
                          </Button>
                          <Button variant="ghost" size="sm" className="ml-2 text-red-600 hover:bg-red-50">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Button type="submit" isLoading={isSubmitting}>
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="card-views"
                            name="card-views"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="card-views" className="font-medium text-gray-700">
                            Card Views
                          </label>
                          <p className="text-gray-500">Receive notifications when someone views your card</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="team-invites"
                            name="team-invites"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="team-invites" className="font-medium text-gray-700">
                            Team Invites
                          </label>
                          <p className="text-gray-500">Receive notifications for team invitations</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="marketing"
                            name="marketing"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="marketing" className="font-medium text-gray-700">
                            Marketing
                          </label>
                          <p className="text-gray-500">Receive updates about new features and promotions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Push Notifications</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="push-all"
                            name="push-all"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-all" className="font-medium text-gray-700">
                            Enable Push Notifications
                          </label>
                          <p className="text-gray-500">Receive push notifications on your devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
                    <div className="mt-4 space-y-4">
                      <Input
                        label="Current Password"
                        type="password"
                        placeholder="Enter your current password"
                      />
                      
                      <Input
                        label="New Password"
                        type="password"
                        placeholder="Enter your new password"
                      />
                      
                      <Input
                        label="Confirm New Password"
                        type="password"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <div className="mt-4">
                      <Button>
                        Update Password
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Add an extra layer of security to your account
                    </p>
                    <div className="mt-4">
                      <Button variant="outline">
                        Enable Two-Factor Authentication
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Sessions</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage your active sessions
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Current Session</p>
                            <p className="text-xs text-gray-500">Started 2 hours ago • San Francisco, CA</p>
                          </div>
                          <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Mobile App</p>
                            <p className="text-xs text-gray-500">Started 3 days ago • New York, NY</p>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                        Sign Out All Devices
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'billing' && (
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Current Plan</h3>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-semibold text-gray-900">Professional Plan</p>
                          <p className="text-sm text-gray-600">$12.00 per month</p>
                          <p className="text-xs text-gray-500 mt-1">Renews on April 15, 2025</p>
                        </div>
                        <Button variant="outline">
                          Change Plan
                        </Button>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-700">Plan Features:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Up to 5 digital business cards
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            All premium templates
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            NFC capabilities
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Advanced analytics
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-10 w-16 bg-gray-200 rounded"></div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                            <p className="text-xs text-gray-500">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Billing History</h3>
                    <div className="mt-4 overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Invoice
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              March 15, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              $12.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-primary-600 hover:text-primary-900">
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              February 15, 2025
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              $12.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-primary-600 hover:text-primary-900">
                                Download
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Theme</h3>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div className="border-2 border-primary-600 rounded-lg p-4 bg-white">
                        <div className="h-20 bg-white border border-gray-200 rounded-md mb-2"></div>
                        <p className="text-sm font-medium text-center">Light</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                        <div className="h-20 bg-gray-900 border border-gray-700 rounded-md mb-2"></div>
                        <p className="text-sm font-medium text-center">Dark</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                        <div className="h-20 bg-gradient-to-b from-white to-gray-900 border border-gray-200 rounded-md mb-2"></div>
                        <p className="text-sm font-medium text-center">System</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Default Card Theme</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Choose the default theme for new business cards
                    </p>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="border-2 border-primary-600 rounded-lg p-4 bg-white">
                        <div className="h-24 bg-white border border-gray-200 rounded-md mb-2">
                          <div className="h-6 bg-gray-600"></div>
                        </div>
                        <p className="text-sm font-medium text-center">Classic</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                        <div className="h-24 bg-white border border-gray-200 rounded-md mb-2">
                          <div className="h-6 bg-primary-600"></div>
                        </div>
                        <p className="text-sm font-medium text-center">Modern</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                        <div className="h-24 bg-white border border-gray-200 rounded-md mb-2">
                          <div className="h-6 bg-gray-400"></div>
                        </div>
                        <p className="text-sm font-medium text-center">Minimal</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                        <div className="h-24 bg-gray-900 border border-gray-700 rounded-md mb-2">
                          <div className="h-6 bg-accent-600"></div>
                        </div>
                        <p className="text-sm font-medium text-center">Bold</p>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                        <div className="h-24 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-md mb-2">
                          <div className="h-6 bg-gradient-to-r from-secondary-800 to-primary-800"></div>
                        </div>
                        <p className="text-sm font-medium text-center">Elegant</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'devices' && (
            <Card>
              <CardHeader>
                <CardTitle>Connected Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">NFC Devices</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage your NFC-enabled devices for tap sharing
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-primary-100">
                              <Smartphone className="h-5 w-5 text-primary-700" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">NFC Business Card</p>
                              <p className="text-xs text-gray-500">Connected on March 10, 2025</p>
                            </div>
                          </div>
                          <div>
                            <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                              Active
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Linked to: Marketing Director Card</p>
                            <Button variant="outline" size="sm">
                              Change Card
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">
                        Add New NFC Device
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Mobile Devices</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Devices where you've installed the mobile app
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-gray-100">
                              <Smartphone className="h-5 w-5 text-gray-700" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">iPhone 13 Pro</p>
                              <p className="text-xs text-gray-500">Last active: Today</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                            Disconnect
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-gray-100">
                              <Smartphone className="h-5 w-5 text-gray-700" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">iPad Pro</p>
                              <p className="text-xs text-gray-500">Last active: 3 days ago</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                            Disconnect
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;