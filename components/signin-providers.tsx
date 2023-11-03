import { useState, useEffect } from 'react';
import { getProviders, ClientSafeProvider, signIn } from 'next-auth/react';
import ProviderBtn from './UI/provider-btn';

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
    <>
      {providers &&
        filteredProviders.map((provider) => (
          <ProviderBtn key={provider.name} providerId={provider.id}>
            Sign in with {provider.name}
          </ProviderBtn>
        ))}
    </>
  );
};

export default SigninProviders;
