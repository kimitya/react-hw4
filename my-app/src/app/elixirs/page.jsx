import axios from 'axios';
import Link from 'next/link';

const fetchData = async() => {
    try {
        const response = await axios.get('https://wizard-world-api.herokuapp.com/Elixirs');
        return response.data;
    } catch (error) {
        console.log (error);
    }
}

const Elixirs = async() => {
    const elixirs = await fetchData();

    return (
        <div className='flex flex-column nim-h-screen'>
            <main className='flex-grow flex items-center justify-center'>
                <div className="grid grid-cols-4 gap-8 ">
                    {
                        elixirs.map((elixir, index) => (
                            <Link className="flex flex-wrap gap-12" key={index} href={`/elixirs/${elixir.id}`}>
                                <div className='card bg-slate-50 w-60 h-64 '>
                                    <h2 className='mx-auto text-xl font-bold text-center flex items-center justify-center h-full'> {elixir.name} </h2>
                                </div>
                            </Link>

                        )
                    )}
                </div>
            </main>
        </div>
    );
}
    

export default Elixirs;