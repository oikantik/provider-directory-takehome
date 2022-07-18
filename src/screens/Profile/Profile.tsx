import { useParams } from 'react-router-dom';

import { ProvidersList, fetchProvider } from '../../api';
import ProviderListProvider from '../../contexts/provider';
import useFetch from '../../hooks/useFetch';
import ProfileSection from './ProfileSection';

function Profile() {
    const { id } = useParams();
    const { data, error, loading } = useFetch<ProvidersList>(fetchProvider, id);

    return (
        <ProviderListProvider data={data} loading={loading} error={error}>
            <ProfileSection />
        </ProviderListProvider>
    );
}

export default Profile;
