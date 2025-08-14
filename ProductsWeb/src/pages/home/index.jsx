import { useEffect, useState } from 'react';
import CompanyCard from '../../components/company';
import { getAllCompanies } from '../../services';

function Home() {
  const [companies, setCompanies] = useState([]);
  const [val, setVal] = useState('');
  const [up, setUp] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCompanies();
        setCompanies(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [up]);

  const filteredCompanies = companies.filter(item =>
    item.companyName?.toLowerCase().includes(val)
  );

  return (
    <div>
      <form
        className='flex justify-center pb-[4rem]'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='text'
          className='border-2 rounded-md shadow-md p-[10px_30px] text-[18px]'
          onChange={(e) => setVal(e.target.value.toLowerCase().trim())}
        />
      </form>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
        {filteredCompanies.map(company => (
          <CompanyCard
            {...company}
            key={company.id}
            up={up}
            setUp={setUp}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
