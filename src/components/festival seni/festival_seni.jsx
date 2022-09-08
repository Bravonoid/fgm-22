import React, {useState} from 'react';

const festival_seni = () => {
    return (
        <>
            <div className="h-[300px] bg-slate-200">
                <div className="top-10  relative w-[600px]">
                    <div className="bg-slate-400 h-[100px] py-4 w-[600px] pl-20">
                        <p className="font-bold align-middle">FESTIVAL SENI</p>
                        <p>26 November 2022 | Lapangan Pancasila UGM</p>
                    </div>
                    <div className="pl-20 pt-4">
                        <p className="underline text-bold text-2xl">PRADIKA AKSARA</p>
                        <p>Bermakna dengan merebaknya syair dalam pesta sebagai wujud kesatuan diversitas berkehidupan di nusantara yang selaras, senada, dan berdampingan</p>
                    </div>
                </div>
            </div>
            <div className="h-[500px]">
                <div className="items-center flex flex-col relative top-10">
                    <p className="items-center font-bold text-lg">Pertunjukan</p>
                    <div className="flex flex-row gap-3">
                        <div className="bg-blue-200 w-[500px] h-[225px]">
                            <div className="text-left px-4 mt-20">
                                <p className="font-bold text-lg">BINTANG TAMU</p>
                                <p className="text-base">Turut dimeriahkan dengan adanya bintang tamu sebagai puncak penampilan</p>
                            </div>
                        </div>
                        <div className="bg-blue-200 w-[500px] h-[225px]">
                            <div className="text-left px-4 mt-20">
                                <p className="font-bold text-lg">UNIT KEGIATAN MAHASISWA</p>
                                <p className="text-base">pertunjukan panggung hiburan tradisional yang dikemas secara modern sebagai wadah mahasiswa UGM dalam mengekspresikan bakatnya melalui seni pertunjukkan  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black h-[500px]">
                <div className="items-center flex flex-col relative py-4 gap-2">
                    <p className="font-bold text-xl text-white">BINTANG TAMU KITA</p>
                    <div className="flex flex-row gap-0">
                        <div className="bg-blue-100 w-[300px] h-[400px]">
                        </div>
                        <div className="bg-blue-200 w-[300px] h-[400px]">
                        </div>
                        <div className="bg-blue-300 w-[300px] h-[400px]">
                        </div>
                        <div className="bg-blue-400 w-[300px] h-[400px]">
                        </div>
                        <div className="bg-blue-500 w-[300px] h-[400px]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[500px]">
                <div className="items-center flex flex-col relative py-4 gap-2 top-10">
                    <p className="font-bold text-xl">UNIT KEGIATAN MAHASISWA</p>
                    <div className="bg-black flex flex-row flex-wrap gap-2 h-[200px] w-screen">
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                        <div className="bg-gray-600 w-[200px] h-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-700 h-[200px]">
                <button className="bg-white text-xl rounded relative top-16 left-[600px] p-4">BELI TIKETMU SEKARANG</button>
            </div>
        </>
    );
};

export default festival_seni;
