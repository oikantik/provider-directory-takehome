import { useParams } from 'react-router-dom';

import ProviderListProvider from '../../contexts/provider';
import ProfileSection from './ProfileSection';

function Profile() {
    const { id } = useParams();

    return (
        <ProviderListProvider id={id || ''}>
            <ProfileSection />
        </ProviderListProvider>
    );
}

export default Profile;
