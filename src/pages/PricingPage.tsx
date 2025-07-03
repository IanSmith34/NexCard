import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  
  const plans = [
    {
      name: 'Free',
      description: 'Perfect for individuals getting started with digital business cards.',
      price: { monthly: 0, annually: 0 },
      features: [
        '1 digital business card',
        'Basic templates',
        'QR code sharing',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For professionals who need more cards and features.',
      price: { monthly: 12, annually: 120 },
      features: [
        'Up to 5 digital business cards',
        'All premium templates',
        'NFC capabilities',
        'Advanced analytics',
        'Priority email support',
        'Custom domain',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Business',
      description: 'For teams that need to manage multiple members and cards.',
      price: { monthly: 29, annually: 290 },
      features: [
        'Unlimited business cards',
        'Team management',
        'Brand customization',
        'Priority support',
        'API access',
        'Dedicated account manager',
        'SSO integration',
      ],
      cta: 'Get Started',
      popular: false,
    },
  ];

  // Calculate annual savings
  const getAnnualSavings = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return null;
    const monthlyCost = plan.price.monthly * 12;
    const annualCost = plan.price.annually;
    const savings = monthlyCost - annualCost;
    const savingsPercentage = Math.round((savings / monthlyCost) * 100);
    return savingsPercentage;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works for you or your team
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative bg-white rounded-full p-1 flex shadow-sm">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`${
                billingPeriod === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              } relative py-2 px-6 rounded-full text-sm font-medium transition-colors focus:outline-none`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`${
                billingPeriod === 'annually'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              } relative py-2 px-6 rounded-full text-sm font-medium transition-colors focus:outline-none`}
            >
              Annually
              <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const annualSavings = getAnnualSavings(plan);
            
            return (
              <div 
                key={plan.name}
                className={`
                  bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg
                  ${plan.popular ? 'border-2 border-primary-500 relative md:scale-105' : 'border border-gray-200'}
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annually}
                    </span>
                    <span className="ml-1 text-xl text-gray-500">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingPeriod === 'annually' && annualSavings && (
                    <div className="mt-2">
                      <span className="text-sm text-green-600 font-medium">
                        Save {annualSavings}% with annual billing
                      </span>
                    </div>
                  )}
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                </div>
                
                <div className="px-6 pt-2 pb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/register">
                      <Button 
                        variant={plan.popular ? 'primary' : 'outline'} 
                        fullWidth
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Can I change plans later?</h3>
              <p className="mt-2 text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">How does the team plan work?</h3>
              <p className="mt-2 text-gray-600">
                The Business plan allows you to add team members who can create and manage their own cards. You'll have admin controls to manage permissions and maintain brand consistency across all team cards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-600">
                We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal for annual subscriptions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Is there a free trial?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer a 14-day free trial of the Professional plan. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Can I cancel my subscription?</h3>
              <p className="mt-2 text-gray-600">
                Yes, you can cancel your subscription at any time. When you cancel, you'll have access to your paid features until the end of your current billing period.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Do you offer custom enterprise plans?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer custom enterprise solutions for larger organizations with specific needs. Contact our sales team to discuss your requirements and get a custom quote.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary-900 rounded-xl text-white py-12 px-8 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your networking?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have already made the switch to digital business cards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button variant="secondary" size="lg">
                  Create Your Card Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;