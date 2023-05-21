import Fade from 'react-reveal/Fade';

const Brands = () => {
    const pictures = [
        'https://www.lego.com/static/favicon/lego-logo-512.png',
        'https://www.greentoys.co.uk/cdn/shop/files/greentoyslogo_updatedlogo_1200x1200.png?v=1646306067',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ55N3xjktghu_tn0g64A69_gYRuCpKMDjefk91Pf4ZBQEEM-PI',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPw-EPxJae7lropjN1Mz88boaBBCDhydUBCF_bOkZMADQEkVnT',
        
        // Add more picture URLs here
      ];
    return (
        <div className="bg-blue-50  pb-5">
            <h1 style={{ fontFamily: "Mogra, cursive" }} className="text-center text-5xl font-semibold mb-8 pt-9">Animale Toy Brands </h1>
            <div className="max-w-7xl mx-auto shadow-2xl mb-8 pb-8">
                <Fade left>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 rounded-lg p-5">
        {pictures.map((picture, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg m-3 ">
            <img src={picture} alt={`Picture ${index + 1}`} className="w-full animate__animated hover:animate__pulse " />
          </div>
        ))}
      </div>
      </Fade>
    </div>
        </div>
    );
};

export default Brands;