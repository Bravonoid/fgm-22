import React from 'react';
import picture from '../../assets/press release/IMG_0608.JPG';
import picture1 from '../../assets/press release/IMG_0485.JPG';
import picture2 from '../../assets/press release/IMG_0502.JPG';
import picture3 from '../../assets/press release/IMG_0519.JPG';
import picture4 from '../../assets/press release/IMG_0534.JPG';
const press_release = () => {
    return(
        <>
            <div className="bg-[#202020] relative overflow-hidden h-auto text-white">
                <div className='flex flex-col justify-center items-center mt-20'>
                    <div className="font-bold text-2xl">
                        <p>Dukung UMKM, Festival Gadjah Mada Gelar Seminar Edukasi Kewirausahaan</p>
                    </div>
                    <div className="text-justify text-base w-fit px-20 gap-y-12">
                        <img src={picture} alt="" className="w-1/2 mx-auto py-12"/>
                        <p className="pb-12 indent-12">Yogyakarta, 13 November 2022 – Kewirausahaan, khususnya UMKM, menjadi sektor penting dalam perekonomian Indonesia, terlebih lagi kemunculan UMKM menyumbang 61% PDB Indonesia. Dalam mendukung peran ini, Festival Gadjah Mada menghadirkan seminar edukasi kewirausahaan pada hari Minggu (13/11/2022) di Ruang Audiotorium Tropical Biologi, Universitas Gadjah Mada. Seminar yang bertemakan “Optimizing Additional Capital & Market Analyze For Business Strategy in Digital Era” ini bertujuan untuk mengembangkan potensi dalam berwirausaha serta mengoptimalkan bisnis.</p>
                        <p className="pb-12 indent-12">“Sebagai negeri yang dikenal dengan sebutan negeri UMKM, tentunya acara ini diharapkan bisa menambah semangat para entrepreneur dalam berwirausaha. Tentunya apresiasi untuk para panitia yang turut menyiapkan acara ini sebagai langkah kita bersama untuk mengembangkan semangat kewirausahaan” ujar Afif Zul, wakil ketua BEM KM UGM saat memberikan kata sambutan.</p>
                        <img src={picture1} alt="" className="w-1/2 mx-auto py-12"/>
                        <p className="pb-12 indent-12">Dalam acara ini, Festival Gadjah Mada mengundang narasumber dari PT. Pegadaian, Carbon is Lyfe, dan PT. Winn Appliance. Hadir sebagai narasumber pertama, Raihan Kausar Nirwan sebagai CEO Carbon is Lyfe memberikan pemaparan terkait pentingnya digital marketing yang kreatif dan tepat sasaran. Raihan mencontohkan dengan digital marketing, produk dari Carbon is Lyfe yang merupakan pionir di bidang fashion dari karbon fiber, bisa mengiklankan bahkan melakukan transaksi lintas negara.</p>
                        <img src={picture2} alt="" className="w-1/2 mx-auto py-12"/>
                        <p className="pb-12 indent-12"> “Salah satu unsur paling penting dalam bisnis adalah mengenali dan menjangkau konsumen. Di sini, digital marketing, misalnya dengan menggunakan bantuan influencer merupakan salah satu cara efektif yang bisa menjangkau konsumen lebih luas tanpa effort yang besar,” ucap Raihan dalam pemaparan materinya. Raihan juga menekankan pentingnya penerapan setiap ide maupun ilmu entrepreneur yang diiringi dengan pembelajaran.</p>
                        <p className="pb-12 indent-12">Selanjutnya pada sesi kedua, Anjar Susilo, Market Research and Development PT. Winn Appliance, menekankan pentingnya menjaga suatu brand yang dimiliki agar masyarakat bisa mengenali brand secara konsisten. Dalam kesempatan yang sama, Anjar juga mengingatkan para peserta untuk memperhatikan segala detail dalam berwirausaha, misalnya saja untuk pengusaha makanan, maka penting untuk memastikan segala sarana prasarana yang digunakan itu aman. Salah satunya contohnya adalah memperhatikan regulator gas yang dipilih untuk memasak.</p>
                        <img src={picture3} alt="" className="w-1/2 mx-auto py-12"/>
                        <p className="pb-12 indent-12">Pada sesi terakhir, Winarta selaku Assistant Vice President Business Micro PT. Pegadaian mengangkat topik terkait isu pelemahan perekonomian sebagai salah isu yang penting untuk menjadi perhatian bersama. Masyarakat, baik itu pengusaha atau non-pengusaha perlu melakukan investasi sebagai salah bentuk antisipasi saat perekonomian melemah. Dalam hal ini, Pegadaian menyediakan berbagai produk yang bertujuan untuk membantu perekonomian nasional melalui jasa pembiayaan jangka pendek dan jangka panjang.</p>
                        <img src={picture4} alt="" className="w-1/2 mx-auto py-12"/>
                        <p className="pb-12 indent-12">“Setiap produk memiliki kelebihan dan tujuannya masing-masing. Bisa disesuaikan dengan kebutuhan. Selain itu, Pegadaian juga memiliki program Gadai Peduli Pegadaian yang bebas bunga hingga dua juta lima ratus riba rupiah.” jelas Winarta. Dalam kesempatan ini, Pegadaian juga memaparkan program Agen Pegadaian yang bertujuan untuk membantu masyarakat menambah penghasilan.</p>
                        <p className="pb-12 indent-12">“Selain sesi pemaparan materi, terdapat juga sesi diskusi dan tanya jawab antar peserta bersama para narasumber. Seminar edukasi kewirausahaan ini kemudian ditutup dengan penyerahan kenang-kenangan bagi narasumber serta hadiah bagi lima penanya terbaik. </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default press_release;