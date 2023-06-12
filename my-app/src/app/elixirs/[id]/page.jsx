import axios from 'axios';
import Link from 'next/link';

const fetchCharacter = async (id) => {
  try {
    const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const ElixirPage = async ({ params }) => {
  const {id} = params;
  console.log(id);
  const elixir = await fetchCharacter(id);

  if (elixir) {
    const { name, effect, characteristics, difficulty } = elixir;

    return (
        <div className="flex items-center justify-center h-screen">
            <div className='card bg-slate-50 w-2/5 m-5 p-5 flex flex-col items-center'>
                <h2 className='mx-auto text-xl font-bold flex items-center justify-center h-full'> {elixir.name} </h2>
                <div>
                    <h3 className="text-lg font-bold mb-2">Details:</h3>
                    <p>
                        <span className="font-bold">Effect:</span> {elixir.effect}
                    </p>
                    <p>
                        <span className="font-bold">Characteristics:</span> {elixir.characteristics}
                    </p>
                    <p>
                        <span className="font-bold">Difficulty:</span> {elixir.difficulty}
                    </p>
                </div>
            </div>
        </div>
    );
  } else {
    return <div>Loading...</div>; 
  }
};

export default ElixirPage;

