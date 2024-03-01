import Header from '@Components/Headers';
import LandingPageIcons from '@Components/Sprites';


function Page() {
  return (
    <>
      <div style={{ display: 'none' }}>
        <LandingPageIcons />
      </div>

      <main>
        <Header />
      </main>
    </>
  );
}


export default Page;
