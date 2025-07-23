import React from 'react';

const Documents = () => {
  const pdfs = [
    {
      title: "Annual Academic Calendar",
      url: "/assets/pdfs/AnnualAcademicCalendar.pdf",
    },

    {
      title: "Fee Structure of the School",
      url: "/assets/pdfs/FeeStructure.pdf",
    },

    {
      title: "List of School Management Committee (SMC)",
      url: "/assets/pdfs/ListOfSMCMembers.pdf",
    },

    {
      title: "List of Parents Teachers Association (PTA) Members",
      url: "/assets/pdfs/ListOfPTAMembers.pdf",
    },

    {
      title: "Copy of Affiliation Letter to CBSE",
      url: "/assets/pdfs/CopyOfAffliationToCBSC.pdf",
    },

    {
      title: "Copy of Society - Renewal",
      url: "/assets/pdfs/SocietyRenewalCertificate.pdf",
    },

    {
      title: "School Result Of Last 3 years",
      url: "/assets/pdfs/SchoolResult.pdf",
    },
    {
      title: "Copy of Recognition Certificate",
      url: "/assets/pdfs/RecognitionCertificate.pdf",
    },

    {
      title: "Copy of Self Certification",
      url: "/assets/pdfs/SelfCertificate.pdf",
    },

    {
      title: "Certificate of Land",
      url: "/assets/pdfs/LandCertificate.pdf",
    },

    {
      title: "Fire Safety Certificate",
      url: "/assets/pdfs/FireSafetyCertificate.pdf",
    },

    {
      title: "Building Safety Certificate",
      url: "/assets/pdfs/BuildingSafetyCertificate.pdf",
    },
    {
      title: "Safe Drinking Water Certificate",
      url: "/assets/pdfs/SafeDrinkingWaterCertificate.pdf",
    },
     {
      title: "Staff List",
      url: "/assets/pdfs/stafflist.pdf",
    },
    {
      title: "Mandatory Disclosure Details",
      url: "/assets/pdfs/MandatoryDisclosureDetails _ SARAS6.0.pdf",
    },

    
  ];

  return (
    <div className='home'>
     
        <h1 className="hero-heading text-center mb-5">Affiliations and Credentials</h1>
     
      <div className="text-center">
        <ul className="pdf-list">
          {pdfs.map((pdf, index) => (
            <li key={index}>
              <span className="pdf-name">{pdf.title}</span>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-pdf-link"
              >
                View PDF
              </a>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;

