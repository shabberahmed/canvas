import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import voterData from '../data.json';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import img from './political.jpeg';

const Voter = () => {
  const pdfRef = useRef();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchParam, setSearchParam] = useState('EPIC_NO');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError(''); // Clear any previous error messages

    if (!searchParam || !searchValue) {
      setError('Please select a search option and enter a value.');
      return;
    }

    const filtered = voterData.filter((voter) => {
      if (searchParam === 'DOB') {
        const dob = new Date(voter[searchParam]);
        const searchDate = new Date(searchValue);

        return (
          dob.getFullYear() === searchDate.getFullYear() &&
          dob.getMonth() === searchDate.getMonth() &&
          dob.getDate() === searchDate.getDate()
        );
      } else {
        return voter[searchParam].toLowerCase().includes(searchValue.toLowerCase());
      }
    });

    if (filtered.length === 0) {
      setError('No matching voters found.');
    }

    setFilteredData(filtered);
  };

  const generatePDF = (voter) => {
    const input = pdfRef.current;

    // Create a canvas from the input
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');

      // Create a new PDF document
      const pdf = new jsPDF('p', 'mm', 'a7', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 8;
      // Add the captured image to the PDF
      pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      // Save the PDF with a unique name, e.g., using the voter's ID
      const pdfFileName = `voter_${voter.EPIC_NO}.pdf`;
      pdf.save(pdfFileName);
      // After saving the PDF, you can provide share buttons
      const pdfURL = window.location.origin + '/' + pdfFileName;
      // Function to share on WhatsApp
      const shareOnWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?text=Check out this voter's information: ${pdfURL}`);
      };
      // Function to share on Facebook
      const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer.php?u=${pdfURL}`);
      };
    <div>
      <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
     <button onClick={shareOnFacebook}>Share on Facebook</button>
    </div>
    });
  };


  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="sc-header">
        <span
          onClick={() => {
            navigate('/home');
          }}
        >
          <i className="fa fa-home" aria-hidden="true"></i>
        </span>
        <h3>Voter Application</h3>
      </div>

      <div className="mt-5">
        <div className="mb-5">
          <label className="me-2">Search by:</label>
          <select
            className="form-select"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          >
            <option value="EPIC_NO">Voter ID</option>
            <option value="FM_NAME_EN">Name</option>
            <option value="DOB">DOB (e.g., YYYY-MM-DD)</option>
          </select>
        </div>
        <div className="mb-5">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter Value"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn btn-primary mt-5 w-100" onClick={handleSearch}>
            Search
          </button>
        </div>

          {filteredData.map((voter, index) => (
           <>
                    <div className='rounded' ref={pdfRef} style={{ width: '400px',height:'500px',backgroundImage: `url(${img})`,opacity:'1',backgroundSize:'center'}}>
{/* start to */}
            
<div style={{position:'relative', zIndex:1 ,backgroundColor: 'rgba(0, 0, 0, 0.7)'
}} className='rounded-3'>
        

<h1 className='text-center text-white text-6xl'> <span className='text-rose-500'>Political</span> <span className='text-green-500'>Saradhi</span> </h1>
  <div/>

  <div className='flex flex-col tommy'
  key={index}
 
  style={{

    padding: '20px',
    marginBottom: '20px',
    width:400,
    height:400,
  }}
>
  
 <div className='flex justify-between mt-5 ' style={{height:'100vh'}}>
 <h5 className=' text-2xl text-white tracking-widest' tex>Name</h5>
  <p className='text-xl text-white ' >{voter.FM_NAME_EN} {voter.LASTNAME_EN}</p>
 </div>
 <div className='flex justify-between mt-3'>
 <h5 className=' text-2xl text-white tracking-widest	'>Father's Name</h5>
  <p className='text-xl text-white tracking-widest'>{voter.RLN_FM_NM_EN}</p>
 </div>
 <div className='flex justify-between mt-3'>
 <h5 className=' text-2xl text-white tracking-widest'>Date of Birth</h5>
  <p className='text-xl text-white tracking-widest'>{voter.DOB}</p>
 </div>
  <div className='flex justify-between mt-3'>
  <h5 className=' text-2xl text-white tracking-widest' >Gender</h5>
  <p className='text-xl text-white tracking-widest'>{voter.GENDER}</p>
  </div>
<div className='flex justify-between mt-3'>
<h5 className=' text-2xl text-white tracking-widest'>Booth Number</h5>
  <p className='text-xl text-white tracking-widest'>{voter.PART_NO}</p>
</div>

</div>
</div>
{/* end to */}
  </div>
  <div>
      <button onClick={() => generatePDF(voter)} className='text-5xl text-black ms-10 '><i class="fa-solid fa-file-arrow-down"></i></button>
      {/* <button onClick={}>click</button> */}
  </div>
           </>
          ))}
         
        {/*  */}
       {/* <img src={img} alt="" /> */}
      </div>
    </div>
  );
};

export default Voter;
