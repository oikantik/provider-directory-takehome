import MenuProvider from '../../contexts/menu';
import ProvidersListProvider from '../../contexts/providers';
import Header from './Header';
import ProfileList from './ProfileList';

function Home() {
    return (
        <ProvidersListProvider>
            <MenuProvider>
                <div className="min-h-screen w-[100%] bg-neutral2 flex-col pb-[40px]">
                    <Header />
                    <ProfileList />
                </div>
            </MenuProvider>
        </ProvidersListProvider>
    );
}

export default Home;
