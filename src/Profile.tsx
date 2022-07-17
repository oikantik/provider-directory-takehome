import { fetchProviders, fetchProvider } from "./api";
import { EducationIcon, GlobeIcon, LeftChevronIcon, MapIcon, TopChevronIcon } from "./components/icons";
import PiereImage from './assets/images/1.png'
import { Link } from 'react-router-dom'

function Profile() {
    // Samples of API requests
    fetchProviders().then(console.log)
    fetchProvider("1").then(console.log)

    return (
        <div className="min-h-screen w-[100%] bg-neutral2 flex-col">
            <div className="w-[100%]">
                <div className="container mx-auto max-w-screen-sm pt-[19px]">
                    <div className="text-input1 text-neutral8 mb-[22px] flex items-center"><Link to={"/"}><span className="text-input1 text-neutral7 mr-[6px]">Mental Wellness</span></Link> <span className="mr-[6px]"><LeftChevronIcon /></span> <span>Dr. Justina Choi, MSW</span></div>
                    <div className="flex">
                        <div className="mr-[12px]"><img src={PiereImage} alt="Provider" className="border border-neutral3 w-[289px] mr-[20px]" /></div>
                        <div>
                            <div className="container mx-auto max-w-screen-sm bg-white px-[32px] py-[24px] flex-col border-b border-neutral3">
                                <div className="flex-col">
                                    <div className="flex items-center mb-[10px]">
                                        <div>
                                            <h2 className="text-sub1 text-neutral9 font-medium mb-[6px]">Dylan Zambrano, MSW</h2>
                                            <p className="text-label3 text-neutral7 font-medium text-subTitle">Registered Social Worker</p>
                                        </div>
                                    </div>
                                    <p className="text-body3 text-neutral7 mb-[16px] text-subTitle">
                                        Justina is a therapist of 15 years experience. Working in international contexts, her background includes community health care, paediatrics, and
                                        She works collaboratively with individuals to address mental health concerns such as anxiety, depression, work/stress issues, emotion regulation, trauma, OCD, and other difficulties.
                                    </p>
                                    <button className="text-link3 text-secondary5 font-medium flex items-center"><span className="mr-[6px]">Read less</span> <span><TopChevronIcon /></span></button>
                                </div>
                            </div>



                            <div className="container mx-auto max-w-screen-sm mb-[6px] bg-white px-[32px] py-[24px] flex-col">
                                <div className="flex-col">
                                    <div className="flex items-center mb-[16px]">
                                        <div className="mr-[12px] w-[48px] h-[48px] bg-neutral1 flex items-center justify-center rounded-[3px]"><MapIcon /></div>
                                        <div>
                                            <h2 className="text-input1 text-neutral7 mb-[6px]">Location</h2>
                                            <p className="text-label3 text-neutral8 font-medium text-subTitle">Toronto, Ontario</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-[16px]">
                                        <div className="mr-[12px] w-[48px] h-[48px] bg-neutral1 flex items-center justify-center rounded-[3px]"><EducationIcon /></div>
                                        <div>
                                            <h2 className="text-input1 text-neutral7 mb-[6px]">Education</h2>
                                            <p className="text-label3 text-neutral8 font-medium text-subTitle">Toronto, Ontario</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-[16px]">
                                        <div className="mr-[12px] w-[48px] h-[48px] bg-neutral1 flex items-center justify-center rounded-[3px]"><GlobeIcon /></div>
                                        <div>
                                            <h2 className="text-input1 text-neutral7 mb-[6px]">Language</h2>
                                            <p className="text-label3 text-neutral8 font-medium text-subTitle">Toronto, Ontario</p>
                                        </div>
                                    </div>

                                    <button className="text-button4 text-white font-medium rounded-full bg-primary5 py-[18px] w-[100%]">Book with us</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
