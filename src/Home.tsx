import { fetchProviders, fetchProvider } from "./api";
import { LocationIcon } from "./components/icons";
import PiereImage from './assets/images/1.png'

function Home() {
  // Samples of API requests
  fetchProviders().then(console.log)
  fetchProvider("1").then(console.log)

  return (
    <div className="min-h-screen w-[100%] bg-neutral2 flex-col">
      <div className="w-[100%] bg-white shadow-header pt-[40px] pb-[38px]">
        <div className="container mx-auto max-w-screen-sm pl-[32px]">
          <h1 className="text-sub3 text-neutral9 mb-[10px] font-medium">Browse our providers</h1>
          <h2 className="text-input3 text-neutral7 mb-[20px]">Mental Wellness</h2>
          <button className="flex items-center justify-center rounded-full bg-white border w-[69px] h-[37px]"><span className="mr-[3px]"><LocationIcon /></span> <span className="text-label3 text-neutral8">ON</span></button>


          <div className="hidden absolute z-10 w-48 bg-white rounded shadow dark:bg-gray-700">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="checkbox-item-4" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input checked id="checkbox-item-5" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="checkbox-item-5" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="checkbox-item-6" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                </div>
              </li>
            </ul>
          </div>


        </div>
      </div>
      <div className="w-[100%]">
        <div className="container mx-auto max-w-screen-sm pt-[19px]">
          <p className="text-input2 text-neutral9 mb-[22px]"><span className="font-medium text-neutral8">17</span> providers in "Ontario"</p>
          <div className="container mx-auto max-w-screen-sm mb-[6px] bg-white pl-[16px] pt-[10px] pb-[14px] pr-[16px]">
            <div className="flex items-center mb-[10px]">
              <div className="w-[56px] border rounded-full mr-[12px]"><img src={PiereImage} alt="Provider" className="rounded-full px-[4px] py-[4px]" /></div>
              <div>
                <h2 className="text-label5 text-neutral9 font-medium mb-[6px]">Dylan Zambrano, MSW</h2>
                <p className="text-input1 text-neutral7 text-subTitle">Registered Social Worker</p>
              </div>
            </div>
            <p className="text-body3 text-neutral7 mb-[12px] text-subTitle">Dylan is a therapist of 15 years experience. Working in international contexts, her background includes community health care, paediatrics, and geriatrics. Lorem ipsum ...</p>
            <button className="text-input1 text-neutral8 font-medium rounded-full bg-secondary2 w-[135px] h-[25px] py-[6px] px-[12px]">Available tomorrow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
