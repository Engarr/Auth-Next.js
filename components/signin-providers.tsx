import { useState, useEffect } from 'react';
import { getProviders, ClientSafeProvider } from 'next-auth/react';
import ProviderBtn from './UI/provider-btn';
import { providersIcons } from '@/lib/data';
import { AnimatePresence } from 'framer-motion';
('framer-motion');

const SigninProviders = () => {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      if (res) {
        setProviders(res);
      }
    };

    fetchProviders();
  }, []);

  const filteredProviders = providers
    ? Object.values(providers).filter(
        (provider) => provider.name !== 'credentials'
      )
    : [];

  return (
    <AnimatePresence>
      {providers &&
        filteredProviders.map((provider) =>
          providersIcons.map((icon) => (
            <ProviderBtn key={provider.name} providerId={provider.id}>
              <span className='mr-2 text-xl'>
                {icon.name.toLowerCase() === provider.name.toLowerCase() &&
                  icon.providerIcon}
              </span>
              Sign in with {provider.name}
            </ProviderBtn>
          ))
        )}
    </AnimatePresence>
  );
};

export default SigninProviders;
