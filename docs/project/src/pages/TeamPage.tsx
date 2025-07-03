import React, { useState } from 'react';
import { Users, UserPlus, Mail, Trash2, Shield, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { TeamMember } from '../types';

const TeamPage: React.FC = () => {
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'admin' | 'member'>('member');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock team data
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      userId: 'user1',
      teamId: 'team1',
      role: 'admin',
      inviteStatus: 'accepted',
      email: 'alex@example.com',
      name: 'Alex Johnson',
    },
    {
      id: '2',
      userId: 'user2',
      teamId: 'team1',
      role: 'member',
      inviteStatus: 'accepted',
      email: 'sarah@example.com',
      name: 'Sarah Williams',
    },
    {
      id: '3',
      userId: '',
      teamId: 'team1',
      role: 'member',
      inviteStatus: 'pending',
      email: 'michael@example.com',
    },
  ]);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inviteEmail) return;
    
    try {
      setIsSubmitting(true);
      
      // In a real app, you would make an API call to send the invitation
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add the new invitation to the list
      const newInvite: TeamMember = {
        id: Date.now().toString(),
        userId: '',
        teamId: 'team1',
        role: inviteRole,
        inviteStatus: 'pending',
        email: inviteEmail,
      };
      
      setTeamMembers([...teamMembers, newInvite]);
      setInviteEmail('');
      setInviteRole('member');
      setShowInviteForm(false);
      
    } catch (error) {
      console.error('Error sending invitation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveMember = (id: string) => {
    if (window.confirm('Are you sure you want to remove this team member?')) {
      setTeamMembers(teamMembers.filter(member => member.id !== id));
    }
  };

  const handleChangeRole = (id: string, newRole: 'admin' | 'member') => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id ? { ...member, role: newRole } : member
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your team members and their permissions
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button 
            leftIcon={<UserPlus size={18} />}
            onClick={() => setShowInviteForm(true)}
          >
            Invite Team Member
          </Button>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-primary-100">
                <Users className="h-6 w-6 text-primary-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Members</p>
                <h3 className="text-2xl font-bold text-gray-900">{teamMembers.length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-100">
                <ShieldCheck className="h-6 w-6 text-green-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Members</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {teamMembers.filter(m => m.inviteStatus === 'accepted').length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-yellow-100">
                <Mail className="h-6 w-6 text-yellow-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending Invites</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {teamMembers.filter(m => m.inviteStatus === 'pending').length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invite Form */}
      {showInviteForm && (
        <Card>
          <CardHeader>
            <CardTitle>Invite New Team Member</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleInvite} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="colleague@example.com"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                required
                leftIcon={<Mail size={18} />}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`
                      p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${inviteRole === 'member' 
                        ? 'border-primary-600 bg-primary-50' 
                        : 'border-gray-200 hover:border-gray-300'}
                    `}
                    onClick={() => setInviteRole('member')}
                  >
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-700" />
                      <div className="ml-3">
                        <h4 className="font-medium">Team Member</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Can create and manage their own cards
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className={`
                      p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${inviteRole === 'admin' 
                        ? 'border-primary-600 bg-primary-50' 
                        : 'border-gray-200 hover:border-gray-300'}
                    `}
                    onClick={() => setInviteRole('admin')}
                  >
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-gray-700" />
                      <div className="ml-3">
                        <h4 className="font-medium">Administrator</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Can manage team members and all cards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowInviteForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Send Invitation
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Team Members List */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teamMembers.map((member) => (
                  <tr key={member.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                          {member.name ? member.name.charAt(0) : member.email.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {member.name || 'Invited User'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{member.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {member.inviteStatus === 'accepted' ? (
                        <select
                          value={member.role}
                          onChange={(e) => handleChangeRole(member.id, e.target.value as 'admin' | 'member')}
                          className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                        >
                          <option value="admin">Administrator</option>
                          <option value="member">Team Member</option>
                        </select>
                      ) : (
                        <div className="text-sm text-gray-900 capitalize">
                          {member.role}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {member.inviteStatus === 'accepted' ? (
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {member.inviteStatus === 'pending' ? (
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleRemoveMember(member.id)}
                            className="text-red-600 hover:bg-red-50"
                          >
                            Cancel Invite
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          leftIcon={<Trash2 size={16} />}
                          onClick={() => handleRemoveMember(member.id)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamPage;